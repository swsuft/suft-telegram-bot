import { bot, logger } from './index';

const BotEvent = () => {
    bot.on('message', (msg) => {
        // eslint-disable-next-line
        const { id, last_name, first_name } = msg.chat;
        // eslint-disable-next-line
        const lastName = last_name || '';
        // eslint-disable-next-line
        const firstName = first_name || '';

        logger.info(`${id} ${lastName} ${firstName} - ${msg.text}`);
    });
};

export default BotEvent;
