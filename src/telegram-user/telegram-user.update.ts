import { Markup, Scenes } from 'telegraf';
import { Ctx, Hears, Update } from 'nestjs-telegraf';
import { TelegramUserService } from './telegram-user.service';
import { UpdateTelegramUserDto } from './dto/update-telegram-user.dto';
import { UpdateType as TelegrafUpdateType } from 'telegraf/typings/telegram-types';
import { ExecutionContext, Inject } from '@nestjs/common';

@Update()
export class TelegramUserUpdate {
    constructor(@Inject(TelegramUserService) telegramUserService) {} // private readonly userService: TelegramUserService, //private readonly userLocalSession: LocalSession<TelegramUser>, //@InjectBot("Roulette-bot")

    @Hears(['Выбрать для рекомендации'])
    async onCreateRecomendation(@Ctx() ctx: Scenes.SceneContext) {
        Markup.removeKeyboard();
        ctx.scene.enter('recomendation-making');
        console.log(ctx.scene.state['anime']);
        // const a = await ctx;
        // console.log(a);
        // console.log("heard")
        // const res = ctx.scene.enter('recomendation-making');
        // console.log(res);
    }
}
