import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { Scene, TelegrafModule } from 'nestjs-telegraf';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configurations from './config/config';
import { TelegramUser } from './telegram-user/entities/telegram-user.entity';
import LocalSession from 'telegraf-session-local';
import { AppUpdate } from './app.update';
import { Scenes } from 'telegraf';
import { RegistrationWizard } from './scenes/registration.scene';
import { getSequelizeConfig } from './config/sequelize.config';
import { AnimelistApiModule } from './animelist-api/animelist-api.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configurations],
        }),
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: getSequelizeConfig,
        }),
        TelegrafModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                middlewares: [
                    new LocalSession({
                        database: 'sessions_db.json',
                    }).middleware(),
                    new Scenes.Stage().middleware(),
                ],
                token: configService.get('tg_token'),
            }),
        }),
        AnimelistApiModule,
    ],
    providers: [AppService, AppUpdate, RegistrationWizard],
})
export class AppModule {}
