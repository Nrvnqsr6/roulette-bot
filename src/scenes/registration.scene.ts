import { Ctx, Message, On, Wizard, WizardStep } from 'nestjs-telegraf';
import { CreateTelegramUserDto } from 'src/telegram-user/dto/create-telegram-user.dto';
import { TelegramUserService } from 'src/telegram-user/telegram-user.service';
import { Scenes } from 'telegraf';

@Wizard('registration')
export class RegistrationWizard {
    constructor(private readonly telegramUserService: TelegramUserService) {}
    @WizardStep(1)
    async onEnter(@Ctx() ctx: Scenes.WizardContext) {
        ctx.reply('Сервис для отслеживания аниме, которым вы пользуетесь', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'My Anime List', callback_data: 'mal' }],
                    [{ text: 'Shikimori', callback_data: 'shiki' }],
                    [{ text: 'Anilist', callback_data: 'anilist' }],
                ],
            },
        });
        await ctx.wizard.next();
    }

    @WizardStep(2)
    async onService(@Ctx() ctx: Scenes.WizardContext) {
        ctx.reply('Ваш ID на этом сервисе');
        if ('data' in ctx.callbackQuery) {
            ctx.session['service'] = ctx.callbackQuery.data;
            ctx.wizard.next();
        } else ctx.scene.leave();
    }

    @On('text')
    @WizardStep(3)
    async onUserId(
        @Ctx() ctx: Scenes.WizardContext,
        @Message() msg: { text: string },
    ) {
        ctx.session['user_list_id'] = msg.text;
        const telegramUserDto = new CreateTelegramUserDto(
            ctx.from.id,
            ctx.session['service'],
            ctx.session['user_list_id'],
        );
        this.telegramUserService.create(telegramUserDto);
        ctx.session = null;
        ctx.scene.leave();
        //return;
    }
}
