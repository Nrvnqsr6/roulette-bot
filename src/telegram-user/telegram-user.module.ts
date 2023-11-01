import { Module } from '@nestjs/common';
import { TelegramUserService } from './telegram-user.service';
import { RecommendationWizard } from 'src/scenes/recommendation-making.scene';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramUserUpdate } from './telegram-user.update';
// import { TelegramUserController } from './telegram-user.controller';

@Module({
    imports: [],
    // controllers: [TelegramUserController],
    providers: [TelegramUserService, TelegramUserUpdate, RecommendationWizard],
})
export class TelegramUserModule {}
