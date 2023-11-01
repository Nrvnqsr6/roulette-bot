import { Context, Markup, Scenes, Telegraf } from 'telegraf';
import { Action, Command, Ctx, Hears, InjectBot, Start, TelegrafExecutionContext, Update } from 'nestjs-telegraf';
import { TelegramUserService } from './telegram-user.service';
import { UpdateTelegramUserDto } from './dto/update-telegram-user.dto';
import { UpdateType as TelegrafUpdateType } from 'telegraf/typings/telegram-types';
import { UpdateType } from 'src/common/update-type.decorator';
import { ExecutionContext } from '@nestjs/common';

@Update()
export class TelegramUserUpdate {
    constructor(
        //@InjectBot("Roulette-bot")
        //private readonly userLocalSession: LocalSession<TelegramUser>,
        //private readonly userService: TelegramUserService,
    ) {}

    @Hears(['Выбрать для рекомендации'])
    async onCreateRecomendation(updateTelegramUserDto: UpdateTelegramUserDto, @Ctx() ctx: Scenes.SceneContext){
        ctx.scene.enter('recomendation-making');
        // const a = await ctx;
        // console.log(a);
        //console.log("heard")
        //const res = ctx.scene.enter('recomendation-making');
        //console.log(res);
    }
}


