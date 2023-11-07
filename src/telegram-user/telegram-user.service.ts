import { Injectable } from '@nestjs/common';
import { CreateTelegramUserDto } from './dto/create-telegram-user.dto';
import { UpdateTelegramUserDto } from './dto/update-telegram-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TelegramUser } from './entities/telegram-user.entity';

@Injectable()
export class TelegramUserService {
    constructor(
        @InjectModel(TelegramUser)
        private telegramUserModel: typeof TelegramUser,
    ) {}

    create(
        createTelegramUserDto: CreateTelegramUserDto,
    ): Promise<TelegramUser> {
        return this.telegramUserModel.create(createTelegramUserDto);
    }

    findOne(id: number): Promise<TelegramUser> {
        return this.telegramUserModel.findByPk(id);
    }

    async update(
        id: number,
        updateTelegramUserDto: UpdateTelegramUserDto,
    ): Promise<TelegramUser> {
        const model = await this.telegramUserModel.findByPk(id);
        return (await model.update(updateTelegramUserDto)).save();
    }
}
