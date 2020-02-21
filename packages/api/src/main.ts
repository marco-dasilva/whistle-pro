import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { FastifyInstance } from 'fastify'

import * as fastifyCompress from 'fastify-compress';
import * as helmet from 'fastify-helmet';
import * as fastifySession from 'fastify-session';
import * as fastifyCookie from 'fastify-cookie';
import * as crypto from 'crypto';

async function bootstrap() {
  const fastifyAdapter: FastifyAdapter<FastifyInstance> = new FastifyAdapter();
  fastifyAdapter.getInstance().register(fastifyCompress);
  fastifyAdapter.register(helmet);
  fastifyAdapter.register(fastifyCookie);
  fastifyAdapter.register(fastifySession, {
    cookie: {
      path: '/',
      maxAge: 31536000000,
    },
    secret: crypto.createHash('sha256').update((process.env.STORE_SECRET || 'secret')).digest('hex')
  })


  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapter
  );

  app.enableCors();

  await app.listen(3001);
}

bootstrap().catch(err => console.error(err));
