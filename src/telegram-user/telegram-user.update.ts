import { Scenes } from 'telegraf';
import { Ctx, Hears, Update } from 'nestjs-telegraf';
import { TelegramUserService } from './telegram-user.service';
import { UpdateTelegramUserDto } from './dto/update-telegram-user.dto';
import { UpdateType as TelegrafUpdateType } from 'telegraf/typings/telegram-types';
import { ExecutionContext } from '@nestjs/common';

@Update()
export class TelegramUserUpdate {
    constructor() {} // private readonly userService: TelegramUserService, //private readonly userLocalSession: LocalSession<TelegramUser>, //@InjectBot("Roulette-bot")

    @Hears(['Выбрать для рекомендации'])
    async onCreateRecomendation(
        updateTelegramUserDto: UpdateTelegramUserDto,
        @Ctx() ctx: Scenes.SceneContext,
    ) {
        ctx.scene.enter('recomendation-making');
        // const a = await ctx;
        // console.log(a);
        // console.log("heard")
        // const res = ctx.scene.enter('recomendation-making');
        // console.log(res);
    }
}
