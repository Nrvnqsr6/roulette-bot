import { Context, Markup } from 'telegraf';
import { Command, Update } from 'nestjs-telegraf';
//import LocalSession from 'telegraf-session-local';
// import { TelegramUser } from './telegram-user/entities/telegram-user.entity';

@Update()
export class AppUpdate {
    //constructor() {}

    @Command('menu')
    async getMenuCommand(ctx: Context) {
        ctx.reply('Что вы хотите сделать?', keyboard);
    }
}

const keyboard = Markup.keyboard([
    ['Выбрать для рекомендации'],
    ['Получить рекомендацию'],
    ['Изменить настройки'],
]);
