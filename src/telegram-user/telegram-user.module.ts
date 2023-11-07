import { Module } from '@nestjs/common';
import { TelegramUserService } from './telegram-user.service';
import { RecommendationWizard } from 'src/scenes/recommendation-making.scene';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramUserUpdate } from './telegram-user.update';
import { RegistrationWizard } from 'src/scenes/registration.scene';
// import { TelegramUserController } from './telegram-user.controller';

@Module({
    providers: [
        TelegramUserService,
        TelegramUserUpdate,
        RecommendationWizard,
        RegistrationWizard,
    ],
})
export class TelegramUserModule {}
