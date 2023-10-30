import { AppService } from './app.service';
import { Context, Scenes, Telegraf } from 'telegraf';
import { InjectBot, Start, Update } from 'nestjs-telegraf';
import LocalSession from 'telegraf-session-local';
import { TelegramUser } from './telegram-user/entities/telegram-user.entity';

@Update()
export class AppUpdate {
    constructor(
        @InjectBot() private readonly bot: Telegraf<Context>,
        //private readonly userLocalSession: LocalSession<TelegramUser>,
        private readonly appService: AppService,
    ) {}

    @Start()
    async startCommand(ctx: Scenes.SceneContext) {
        ctx.scene.enter('registration');
    }
}
