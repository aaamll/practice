import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Create the configuration for Swagger
  const config = new DocumentBuilder()
    .setTitle('My Project API')
    .setDescription('Detailed description of the API endpoints')
    .setVersion('1.0')
    .addTag('users') // Optional: categorizes your endpoints
    .addBearerAuth() // Optional: if you use JWT/Auth
    .build();

  // 2. Create the document object
  const document = SwaggerModule.createDocument(app, config);

  // 3. Setup the Swagger UI at a specific path (e.g., 'api/docs')
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true, // Useful for keeping tokens after refresh
    },
  });

  await app.listen(3000);
}
bootstrap();