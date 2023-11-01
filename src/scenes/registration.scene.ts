import { Ctx, Message, Wizard, WizardStep } from 'nestjs-telegraf';
import { Scenes } from 'telegraf';

@Wizard('registration')
export class RegistrationWizard {
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
        ctx.wizard.next();
    }

    @WizardStep(2)
    async onService(@Ctx() ctx: Scenes.WizardContext) {
        ctx.reply('Ваш ID на этом сервисе');
        if ('data' in ctx.callbackQuery) {
        { ctx.wizard.state.service = ctx.callbackQuery.data; }
        ctx.wizard.next();
    }

    @WizardStep(3)
    async onUserId(
        @Ctx() ctx: Scenes.WizardContext,
        @Message() msg: { text: string },
    ) {
        ctx.wizard.state.user_id = msg.text;
        // create user
        ctx.scene.leave();
    }
}
