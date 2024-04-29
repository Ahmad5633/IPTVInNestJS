import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RedisIoAdapter } from './adapters/redis-io.adapter';
import { WsAdapter } from './adapters/ws-adapter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // // Uncomment these lines to use the Redis adapter:
  // const redisIoAdapter = new RedisIoAdapter(app);
  // await redisIoAdapter.connectToRedis();
  // app.useWebSocketAdapter(redisIoAdapter);

  // const app = await NestFactory.create(AppModule);
app.useWebSocketAdapter(new WsAdapter(app));

  // Move the app.listen call before setting the WebSocket adapter
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
