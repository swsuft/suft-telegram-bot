import express from 'express';
import log4js from 'log4js';
import cors from 'cors';
import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';
import logconfig from './log4js.json';

dotenv.config();

export const app = express();
export const logger = log4js.getLogger();
export const bot = new TelegramBot(process.env.BOT_TOKEN!, { polling: true });

log4js.configure(logconfig);

logger.level = 'ALL';

app.set('trust proxy', true);
app.use(cors({ origin: process.env.ENDPOINT, credentials: true }));

const port = 8080;
app.listen(port, () => logger.info(`suft backend listening on ${port}`));
