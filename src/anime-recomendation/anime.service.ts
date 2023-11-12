import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AnimeRecomendation } from './entity/anime-recomendation.entity';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { Sequelize } from 'sequelize-typescript';
import { TelegramUser } from 'src/telegram-user/entities/telegram-user.entity';

@Injectable()
export class AnimeService {
    constructor(
        @InjectModel(AnimeRecomendation)
        private animeRecomendation: typeof AnimeRecomendation,
    ) {}

    create(createAnime: CreateAnimeDto): Promise<AnimeRecomendation> {
        return this.animeRecomendation.create(createAnime);
    }

    findOne(id: number): Promise<AnimeRecomendation> {
        return this.animeRecomendation.findByPk(id);
    }

    findAllPending(): Promise<AnimeRecomendation[]> {
        return this.animeRecomendation.findAll({
            where: {
                Pending: true,
            },
        });
    }

    async update(
        id: number,
        updateAnimeDto: UpdateAnimeDto,
    ): Promise<AnimeRecomendation> {
        const model = await this.animeRecomendation.findByPk(id);
        return (await model.update(updateAnimeDto)).save();
    }
}
