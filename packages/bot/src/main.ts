import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { FastifyInstance } from 'fastify'
import * as fastifyCompress from 'fastify-compress';

async function bootstrap() {
  const fastifyAdapter: FastifyAdapter<FastifyInstance> = new FastifyAdapter();
  fastifyAdapter.getInstance().register(fastifyCompress);

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapter
  );

  app.enableCors();

  await app.listen(3002);
}

bootstrap().catch(err => console.error(err));
