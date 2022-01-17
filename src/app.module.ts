import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PlannerController } from './controllers/planner.controller';
import { AppService } from './app.service';
import { PlannerService } from './services/planner.service';

@Module({
  imports: [],
  controllers: [AppController, PlannerController],
  providers: [AppService, PlannerService],
})
export class AppModule {}
