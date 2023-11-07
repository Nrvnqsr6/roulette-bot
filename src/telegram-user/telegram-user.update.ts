import { Markup, Scenes } from 'telegraf';
import { Ctx, Hears, Start, Update } from 'nestjs-telegraf';
import { TelegramUserService } from './telegram-user.service';
import { UpdateTelegramUserDto } from './dto/update-telegram-user.dto';
import { UpdateType as TelegrafUpdateType } from 'telegraf/typings/telegram-types';
import { Body, ExecutionContext, Inject } from '@nestjs/common';

@Update()
export class TelegramUserUpdate {
    constructor(private readonly telegramUserService: TelegramUserService) {}

    @Start()
    async startCommand(ctx: Scenes.SceneContext) {
        ctx.session = null;
        if (this.telegramUserService.findOne(ctx.from.id))
            return 'Вы уже зарегистрованы';
        ctx.scene.enter('registration');
    }

    @Hears(['Выбрать для рекомендации'])
    async onCreateRecomendation(@Ctx() ctx: Scenes.WizardContext) {
        //Markup.removeKeyboard();

        ctx.session = null;
        ctx.scene.enter('recomendation-making');
        // const updateTelegramUserDto = new UpdateTelegramUserDto();
        // updateTelegramUserDto.GivenAnime = givenAnime;
        // const user_id = ctx.chat.id;
        // this.telegramUserService.update(user_id, updateTelegramUserDto);
    }
}
