import { AppService } from './app.service';
import { Context, Markup, Scenes, Telegraf } from 'telegraf';
import { Action, Command, Hears, InjectBot, Start, Update } from 'nestjs-telegraf';
import LocalSession from 'telegraf-session-local';
//import { TelegramUser } from './telegram-user/entities/telegram-user.entity';

@Update()
export class AppUpdate {
    constructor(
        @InjectBot() private readonly bot: Telegraf<Context>,
        //private readonly userLocalSession: LocalSession<TelegramUser>,
        private readonly appService: AppService,
    ) {}

    @Start()
    async startCommand(ctx: Scenes.SceneContext) {
        ctx.scene.enter('registration');
    }

    @Command('menu')
    async getMenuCommand(ctx: Context) {
        ctx.reply('Что вы хотите сделать?', keyboard);
    }

    // @Hears(['Выбрать для рекомендации'])
    // async createRecomendation(ctx: Scenes.SceneContext) {
    //     //ctx.reply("qwe");
    //     const res = await ctx.scene.enter('recomendation-making');
    //     console.log(res);
    // }

    // @Hears('Выбрать для рекомендации')
    // async createRecomendation(updateTelegramUserDto)
}

const keyboard = Markup.keyboard([
    ['Выбрать для рекомендации'],
    ['Получить рекомендацию'],
    ['Изменить трекер'],
]);