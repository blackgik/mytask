import e from 'express';
import { Kafka, Partitioners } from 'kafkajs';

const kafKa = new Kafka({
  clientId: 'todos',
  brokers: ['127.0.0.1:9092', '127.0.0.1:9093']
});

export const producer = kafKa.producer({
  createPartitioner: Partitioners.LegacyPartitioner
});

export const consumer = kafKa.consumer({ groupId: 'todos-group' });
