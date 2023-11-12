import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimeDto } from './create-anime.dto';
import { MaxLength, MinLength } from 'class-validator';

export class UpdateAnimeDto extends PartialType(CreateAnimeDto) {
    Anime?: string;

    // @MinLength(2)
    // @MaxLength(200)
    UsersDescription?: string;

    Pending?: boolean;
}
