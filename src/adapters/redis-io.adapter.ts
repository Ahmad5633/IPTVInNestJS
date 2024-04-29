import { IoAdapter } from '@nestjs/platform-socket.io';
import { ServerOptions } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';
export class RedisIoAdapter extends IoAdapter {
    private adapterConstructor: ReturnType<typeof createAdapter>;
  
    async connectToRedis(): Promise<void> {
      const pubClient = createClient({ url: `redis://localhost:6379` });
      const subClient = pubClient.duplicate();
  
      try {
        await Promise.all([pubClient.connect(), subClient.connect()]);
        this.adapterConstructor = createAdapter(pubClient, subClient);
      } catch (error) {
        console.error('Error connecting to Redis:', error);
        // Handle the error (e.g., retry, exit the application)
      }
    }
// export class RedisIoAdapter extends IoAdapter {
//   private adapterConstructor: ReturnType<typeof createAdapter>;

//   async connectToRedis(): Promise<void> {
//     const pubClient = createClient({ url: `redis://localhost:6379` });
//     const subClient = pubClient.duplicate();

//     await Promise.all([pubClient.connect(), subClient.connect()]);

//     this.adapterConstructor = createAdapter(pubClient, subClient);
//   }

  createIOServer(port: number, options?: ServerOptions): any {
    const server = super.createIOServer(port, options);
    server.adapter(this.adapterConstructor);
    return server;
  }
}