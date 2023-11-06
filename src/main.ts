import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import fs from 'fs';

async function bootstrap() {
    fs.writeFile('user.json', '', (err) => {
        if (err) {
            console.log('Error writing file:', err);
        } else {
            console.log('Successfully wrote file');
        }
    });
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    const port = configService.get('port');
    await app.listen(port);
}
bootstrap();
