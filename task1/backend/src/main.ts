import { NestFactory } from '@nestjs/core';
import mongoose from 'mongoose';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();

    mongoose.set('debug', true);

    const PORT = process.env.PORT || 8000;

    await app.listen(PORT);
}
bootstrap();
