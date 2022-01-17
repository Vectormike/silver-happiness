import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ServerDto } from '../dto/server.dto';
import { PlannerService } from '../services/planner.service';

@Controller('server')
export class PlannerController {
  constructor(private readonly plannerService: PlannerService) {}

  @Post('/plan')
  serverPlanner(
    @Req() request: Request,
    @Res() response: Response,
    @Body() serverData: ServerDto,
  ): Promise<any> {
    return this.plannerService.serverPlanner(response, serverData);
  }
}
