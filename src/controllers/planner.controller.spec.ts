/* eslint-disable prefer-const */
import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';

describe('Server Planner', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  const data = {
    serverType: { CPU: 1, RAM: 16, HDD: 100 },
    virtualMachines: [
      { CPU: 1, RAM: 8, HDD: 20 },
      { CPU: 2, RAM: 8, HDD: 15 },
      { CPU: 2, RAM: 32, HDD: 10 },
    ],
  };

  it('API should return the number of servers that are required to host a non-empty collection of virtual machines POST', () => {
    return request(app.getHttpServer())
      .post('/server/plan')
      .send(data)
      .expect(HttpStatus.OK);
  });
});
