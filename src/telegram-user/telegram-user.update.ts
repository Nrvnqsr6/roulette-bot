import { Context, Markup, Scenes, Telegraf } from 'telegraf';
import { Action, Command, Hears, InjectBot, Start, Update } from 'nestjs-telegraf';
import { TelegramUserService } from './telegram-user.service';
import { UpdateTelegramUserDto } from './dto/update-telegram-user.dto';

@Update()
export class UserUpdate {
    constructor(
        @InjectBot() private readonly bot: Telegraf<Context>,
        //private readonly userLocalSession: LocalSession<TelegramUser>,
        private readonly userService: TelegramUserService,
    ) {}

    // @Start()
    // async startCommand(ctx: Scenes.SceneContext) {
    //     ctx.scene.enter('registration');
    // }

    // @Command('menu')
    // async getMenuCommand(ctx: Context) {
    //     ctx.reply('Что вы хотите сделать?', keyboard);
    // }

    // @Hears(['Выбрать для рекомендации'])
    // async createRecomendation(updateTelegramUserDto: UpdateTelegramUserDto, ctx: Scenes.SceneContext){
    //     ctx.reply("qwe");
    //     const res = await ctx.scene.enter('recomendation-making');
    //     console.log(res);
    // }
}

const keyboard = Markup.keyboard([
    ['Выбрать для рекомендации'],
    ['Получить рекомендацию'],
    ['Изменить трекер'],
]);