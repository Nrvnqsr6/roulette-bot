import { AppService } from './app.service';
import { Context, Telegraf } from 'telegraf';
import { InjectBot, Start, Update } from 'nestjs-telegraf';

@Update()
export class AppUpdate {
    constructor(
        @InjectBot() private readonly bot: Telegraf<Context>,
        private readonly appService: AppService,
    ) {}

    @Start()
    async startCommand(ctx: Context) {
        await ctx.reply('qweqwe');
    }
}
