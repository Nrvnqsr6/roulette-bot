import { Inject } from '@nestjs/common';
import { Ctx, Message, Wizard, WizardStep } from 'nestjs-telegraf';
import { TelegramUserService } from 'src/telegram-user/telegram-user.service';
import { Scenes } from 'telegraf';

@Wizard('recomendation-making')
export class RecommendationWizard {
    //constructor(@Inject(TelegramUserService) telegramUserService) {}
    @WizardStep(1)
    async onEnter(@Ctx() ctx: Scenes.WizardContext) {
        ctx.reply(
            'Ссылка или название аниме на сервисе, которым вы пользуетесь',
        );
        ctx.wizard.next();
    }
    @WizardStep(2)
    async onAnime(
        @Ctx() ctx: Scenes.WizardContext,
        @Message() msg: { text: string },
    ) {
        if (!this.verifyExisting(msg.text)) {
            ctx.reply;
            ctx.scene.reenter();
        }
        console.log('added');
        ctx.wizard.state['anime'] = msg.text;
        ctx.scene.leave();
    }

    private verifyExisting(anime: string): boolean {
        if (anime) {
            return true;
        }
        return false;
    }
}
