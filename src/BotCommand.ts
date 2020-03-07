import { bot } from './index';

const BotCommand = () => {
    bot.onText(/\/help/, (msg) => {
        const chatId = msg.chat.id;
        const text = `수프트 가입신청 알림을 보내는 봇입니다.
/help - 도움말
/id - 자신의 유저 ID 확인`;

        bot.sendMessage(chatId, text);
    });

    bot.onText(/\/id/, (msg) => {
        const chatId = msg.chat.id;

        bot.sendMessage(chatId, chatId.toString());
    });
};

export default BotCommand;
