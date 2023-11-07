import { Markup, Scenes } from 'telegraf';
import { Ctx, Hears, Start, Update } from 'nestjs-telegraf';
import { TelegramUserService } from './telegram-user.service';
import { UpdateTelegramUserDto } from './dto/update-telegram-user.dto';
import { UpdateType as TelegrafUpdateType } from 'telegraf/typings/telegram-types';
import { Body, ExecutionContext, Inject } from '@nestjs/common';

@Update()
export class TelegramUserUpdate {
    constructor(private readonly telegramUserService: TelegramUserService) {} // private readonly userService: TelegramUserService, //private readonly userLocalSession: LocalSession<TelegramUser>, //@InjectBot("Roulette-bot")

    @Hears(['Выбрать для рекомендации'])
    async onCreateRecomendation(@Ctx() ctx: Scenes.WizardContext) {
        //Markup.removeKeyboard();
        ctx.scene.enter('recomendation-making');
        // const updateTelegramUserDto = new UpdateTelegramUserDto();
        // updateTelegramUserDto.GivenAnime = givenAnime;
        // const user_id = ctx.chat.id;
        // this.telegramUserService.update(user_id, updateTelegramUserDto);
    }

    @Start()
    async startCommand(ctx: Scenes.SceneContext) {
        ctx.scene.enter('registration');
    }
}
