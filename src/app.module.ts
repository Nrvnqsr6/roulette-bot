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
import { RecommendationWizard } from './scenes/recommendation-making.scene';
import { TelegramUserModule } from './telegram-user/telegram-user.module';
import { AnimeRecomendation } from './anime-recomendation/entity/anime-recomendation.entity';
import { AnimeModule } from './anime-recomendation/anime.model';

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
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                return {
                    middlewares: [
                        new LocalSession({
                            database: 'sessions_db.json',
                        }).middleware(),
                        new Scenes.Stage().middleware(),
                    ],
                    botName: 'Roulette-bot',
                    token: configService.get('tg_token'),
                    // include: [
                    //     TelegramUserModule,
                    //     AnimelistApiModule,
                    //     AppUpdate,
                    // ],
                };
            },
        }),
        AnimelistApiModule,
        AnimeModule,
        TelegramUserModule,
    ],
    providers: [AppService, AppUpdate],
})
export class AppModule {}
