import { randomUUID } from 'crypto';
import { consumer, producer } from '../configs/kafka';
import { dbconnection } from '../db/connections';
import { tables } from '../db/db.tables';
import { NotFoundError } from '../lib/appErrors';
import { TaskCreationType } from '../validators/task.schema';

export const taskCreation = async ({ body }: { body: TaskCreationType }) => {
  // Check if task already exists
  const hasTask = await dbconnection(tables).first(['name']).where({ name: body.name });

  if (hasTask) throw new NotFoundError('Task already exists');

  const taskData = {
    id: randomUUID(),
    ...body
  };

  await dbconnection(tables.tasks).insert(taskData);

  // Do your Kafka here
  await producer.connect();
  await producer.send({
    topic: 'todo-topic',
    messages: [
      {
        value: JSON.stringify(taskData)
      }
    ]
  });

  await consumer.connect();
  await consumer.subscribe({ topic: 'todo-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value?.toString()
      });
    }
  });

  return taskData;
};
