import { Ctx, Message, On, Wizard, WizardStep } from 'nestjs-telegraf';
import { UpdateTelegramUserDto } from 'src/telegram-user/dto/update-telegram-user.dto';
import { TelegramUser } from 'src/telegram-user/entities/telegram-user.entity';
import { TelegramUserService } from 'src/telegram-user/telegram-user.service';
import { Scenes } from 'telegraf';

@Wizard('recomendation-making')
export class RecommendationWizard {
    constructor(private readonly telegramUserService: TelegramUserService) {}
    @WizardStep(1)
    async onEnter(@Ctx() ctx: Scenes.WizardContext): Promise<string> {
        ctx.wizard.next();
        return 'Ссылка или название аниме на сервисе, которым вы пользуетесь';
    }

    @On('text')
    @WizardStep(2)
    async onAnime(
        @Ctx() ctx: Scenes.WizardContext,
        @Message() msg: { text: string },
    ): Promise<string> {
        if (!this.verifyExisting(msg.text)) {
            ctx.wizard.selectStep(2);
            return 'Не получилось найти ваше аниме. Попробуйте еще раз.';
        }
        ctx.session['anime'] = msg.text;
        this.updateUser(ctx.from.id, ctx.session['anime'])
            .then((user) => {
                console.log(
                    `anime changed for ${user.TelegramUserID} with ${user.GivenAnime}`,
                );
                ctx.scene.leave();
                return 'Успешно добавлено';
            })
            .catch((error) => {
                console.log(error);
                return 'Внутренняя ошибка, попробуйте позже';
            });
    }

    private verifyExisting(anime: string): boolean {
        if (anime) {
            return true;
        }
        return false;
    }

    private updateUser(userID: number, anime: string): Promise<TelegramUser> {
        const updateTelegramUserDto = new UpdateTelegramUserDto();
        updateTelegramUserDto.GivenAnime = anime;
        const user_id = userID;
        return this.telegramUserService.update(user_id, updateTelegramUserDto);
    }
}
