import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configurations from './config/config';
import { TelegramUser } from './Sequelize models/TelegramUser.model';
import LocalSession from 'telegraf-session-local';
import { AppUpdate } from './app.update';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configurations],
        }),
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                dialect: 'postgres',
                host: configService.get('db_host'),
                port: configService.get('db_port'),
                username: configService.get('db_user'),
                password: configService.get('db_password'),
                database: configService.get('db_name'),
                models: [TelegramUser],
                autoLoadModels: true,
            }),
        }),
        TelegrafModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                middlewares: [
                    new LocalSession({
                        database: 'sessions_db.json',
                    }).middleware(),
                ],
                token: configService.get('tg_token'),
            }),
        }),
    ],
    // controllers: [],
    providers: [AppService, AppUpdate],
})
export class AppModule {}
