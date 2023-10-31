import { Module } from '@nestjs/common';
import { AnimelistApiService } from './animelist-api.service';

@Module({
    providers: [AnimelistApiService],
})
export class AnimelistApiModule {}
