import { Module } from '@nestjs/common';
import { AnimeSuggestionService } from './anime-suggestion.service';
import { AnimelistApiModule } from 'src/animelist-api/animelist-api.module';

@Module({
    imports: [AnimelistApiModule],
    providers: [AnimeSuggestionService],
    exports: [AnimeSuggestionService],
})
export class AnimeSuggestionModule {}
