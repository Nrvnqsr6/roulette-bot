import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import fs from 'fs';

fs.writeFile('sessions_db.json', '', (err) => {
    if (err) {
        console.log('Error writing file:', err);
    } else {
        console.log('Successfully wrote file');
    }
});

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    const port = configService.get('port');
    await app.listen(port);
}
bootstrap();
