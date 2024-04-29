import { Test, TestingModule } from '@nestjs/testing';
import { WsAdapter } from './ws-adapter';
import WebSocket from 'ws';

describe('WsAdapter', () => {
  let app: TestingModule;
  let adapter: WsAdapter;
  let server: WebSocket.Server;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      providers: [WsAdapter],
    }).compile();

    adapter = app.get<WsAdapter>(WsAdapter);
    server = adapter.create(3000);
  });

  afterAll(() => {
    adapter.close(server);
  });

  it('should handle client connections', (done) => {
    server.on('connection', () => {
      done();
    });

    const client = new WebSocket('ws://localhost:3000');
  });

});
