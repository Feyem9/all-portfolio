import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configure ports and frontend origin for CORS
  const port = Number(process.env.PORT) || 3001;
  const isDevelopment = process.env.NODE_ENV !== 'production';
  
  // In development: allow all origins for easier local testing
  // In production: only allow configured frontend origin
  const frontendOrigin = isDevelopment
    ? true  // Allow all origins in development
    : process.env.FRONTEND_ORIGIN || 'https://feyem9.github.io/portfolio.io'; // Production default
    
  // Enable CORS with environment-specific settings
  app.enableCors({
    origin: frontendOrigin,
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  await app.listen(port);
  console.log(`Backend listening on http://localhost:${port} (CORS allowed for ${frontendOrigin})`);
}

bootstrap();
