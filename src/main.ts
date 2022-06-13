import fastifyCors from '@fastify/cors';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const fastifyAdapter = new FastifyAdapter({ logger: true });
  fastifyAdapter.register(fastifyCors); // protection
  // fastifyAdapter.register(formBodyPlugin);
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapter,
  );
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
