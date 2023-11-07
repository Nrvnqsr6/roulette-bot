import { AppService } from './app.service';
import { Context, Markup, Scenes, Telegraf } from 'telegraf';
import { Command, Ctx, Hears, InjectBot, Start, Update } from 'nestjs-telegraf';
//import LocalSession from 'telegraf-session-local';
// import { TelegramUser } from './telegram-user/entities/telegram-user.entity';

@Update()
export class AppUpdate {
    constructor(
        //@InjectBot() private readonly bot: Telegraf<Context>,
        // private readonly userLocalSession: LocalSession<TelegramUser>,
        //private readonly appService: AppService,
    ) {}

    @Command('menu')
    async getMenuCommand(ctx: Context) {
        ctx.reply('Что вы хотите сделать?', keyboard);
    }
}

const keyboard = Markup.keyboard([
    ['Выбрать для рекомендации'],
    ['Получить рекомендацию'],
    ['Изменить трекер'],
]);
