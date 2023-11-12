import { Module } from '@nestjs/common';
import { AnimeSuggestionService } from './anime-suggestion.service';
import { AnimelistApiModule } from 'src/animelist-api/animelist-api.module';
import { AnimeRecomendation } from 'src/anime-recomendation/entity/anime-recomendation.entity';
import { AnimeModule } from 'src/anime-recomendation/anime.model';

@Module({
    imports: [AnimelistApiModule, AnimeModule],
    providers: [AnimeSuggestionService],
    exports: [AnimeSuggestionService],
})
export class AnimeSuggestionModule {}
