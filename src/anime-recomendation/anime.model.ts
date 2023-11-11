import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AnimeRecomendation } from './entity/anime-recomendation.entity';
import { AnimeService } from './anime.service';

@Module({
    imports: [SequelizeModule.forFeature([AnimeRecomendation])],
    providers: [AnimeService],
    exports: [AnimeService],
})
export class AnimeModule {}
