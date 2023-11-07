import { Ctx, Message, On, Wizard, WizardStep } from 'nestjs-telegraf';
import { Scenes } from 'telegraf';

@Wizard('recomendation-making')
export class RecommendationWizard {
    //constructor(@Inject(TelegramUserService) telegramUserService) {}
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
            ctx.scene.reenter();
            return 'Не получилось найти ваше аниме. Попробуйте еще раз.';
        }
        //console.log('added');
        ctx.session['anime'] = msg.text;
        ctx.wizard.next();
        return "qweqwe";
    }

    private verifyExisting(anime: string): boolean {
        if (anime) {
            return true;
        }
        return false;
    }
}
