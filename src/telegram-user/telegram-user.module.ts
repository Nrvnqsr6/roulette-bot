import { Module } from '@nestjs/common';
import { TelegramUserService } from './telegram-user.service';
import { RecommendationWizard } from 'src/scenes/recommendation-making.scene';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramUserUpdate } from './telegram-user.update';
import { RegistrationWizard } from 'src/scenes/registration.scene';
import { Sequelize } from 'sequelize-typescript';
import { SequelizeModule } from '@nestjs/sequelize';
import { TelegramUser } from './entities/telegram-user.entity';
// import { TelegramUserController } from './telegram-user.controller';

@Module({
    imports: [SequelizeModule.forFeature([TelegramUser])],
    providers: [
        TelegramUserService,
        TelegramUserUpdate,
        RecommendationWizard,
        RegistrationWizard,
    ],
})
export class TelegramUserModule {}
