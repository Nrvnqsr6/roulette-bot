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
            ctx.wizard.state['service'] = ctx.callbackQuery.data;
            ctx.wizard.next();
        } else ctx.scene.leave();
    }

    //@On('text')
    @WizardStep(3)
    async onUserId(
        @Ctx() ctx: Scenes.WizardContext,
        @Message() msg: { text: string },
    ) {
        ctx.wizard.state['user_list_id'] = msg.text;
        const telegramUserDto = new CreateTelegramUserDto(
            ctx.from.id,
            ctx.wizard.state['service'],
            ctx.wizard.state['user_list_id'],
        );
        this.telegramUserService
            .create(telegramUserDto)
            .then((user) => {
                console.log(
                    `registration of ${user.TelegramUserID} with ${user.UserListID}`,
                );
                ctx.reply('Регистрация прошла успешно');
                //ctx.session = null;
                ctx.scene.leave();
                //ctx.session = null;
                //return '';
            })
            .catch((error) => {
                console.log(error);
                //ctx.session = null;
                ctx.scene.leave();
                return 'Внутренняя ошибка, попробуйте позже';
            });
    }
}
