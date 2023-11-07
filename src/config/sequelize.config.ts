import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { TelegramUser } from 'src/telegram-user/entities/telegram-user.entity';

export const getSequelizeConfig = async (
    configService: ConfigService,
): Promise<SequelizeModuleOptions> => {
    return {
        dialect: 'postgres',
        host: configService.get('db_host'),
        port: configService.get('db_port'),
        username: configService.get('db_user'),
        password: configService.get('db_password'),
        database: configService.get('db_name'),
        //models: [TelegramUser],
        autoLoadModels: true,
        synchronize: true,
    };
};
