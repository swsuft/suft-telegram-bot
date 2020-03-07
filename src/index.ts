import express from 'express';
import log4js from 'log4js';
import cors from 'cors';
import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';
import logconfig from './log4js.json';
import BotCommand from './BotCommand';

dotenv.config();

export const app = express();
export const logger = log4js.getLogger();
export const bot = new TelegramBot(process.env.BOT_TOKEN!, { polling: true });

log4js.configure(logconfig);

logger.level = 'ALL';

app.set('trust proxy', true);
app.use(cors({ origin: process.env.ENDPOINT, credentials: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
    const { method, originalUrl, ip } = req;
    const ua = req.get('User-Agent');
    logger.info(`${ip} ${method} ${originalUrl} - ${ua}`);
    next();
});

const getTokenByHeader = (req: express.Request): string | undefined => {
    if (req.headers.authorization !== undefined) {
        return req.headers.authorization.toString().split(' ')[1];
    }

    return undefined;
};

app.post('/notification/waitinguser', (req, res) => {
    const token = getTokenByHeader(req);
    const { email, name, grade } = req.body;

    if (token !== process.env.API_TOKEN) {
        logger.warn('올바르지 않는 TOKEN으로 요청을 시도했습니다.');
        res.sendStatus(403);
        return;
    }

    res.sendStatus(200);
});

BotCommand();

const port = 8080;
app.listen(port, () => logger.info(`suft telegram-bot api listening on ${port}`));
