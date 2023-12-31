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
    async startCommand(@Ctx() ctx: Scenes.WizardContext) {
        //ctx.session = null;
        if (await this.telegramUserService.findOne(ctx.from.id))
            return 'Вы уже зарегистрованы';
        ctx.scene.enter('registration');
    }

    @Hears(['Выбрать для рекомендации'])
    async onCreateRecomendation(@Ctx() ctx: Scenes.WizardContext) {
        //ctx.session = null;
        ctx.scene.enter('recomendation-making');
        //console.log(ctx.session);
    }
}
