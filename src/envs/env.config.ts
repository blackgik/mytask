import "dotenv/config";

export const env = {
	port: process.env.PORT,
	MYSQL_HOST: process.env.MYSQL_HOST,
	MYPORT: process.env.MYSQL_PORT,
	MYSQL_USER: process.env.MYSQL_USER,
	MYPASS: process.env.MYSQL_PASS,
	MYSQL_DATABASE: process.env.MYSQL_DATABASE
};
