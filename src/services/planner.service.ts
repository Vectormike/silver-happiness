import { Injectable, Req, Res, HttpStatus } from '@nestjs/common';
import { serverMakeup, IServerPlanning } from '../interfaces/server.interface';
import ServerManager from '../helpers/calculateServer';
import { Request, Response } from 'express';
import { ServerDto } from 'src/dto/server.dto';

@Injectable()
export class PlannerService {
  serverPlanner(response: Response, serverData: ServerDto): any {
    try {
      const { serverType, virtualMachines } = serverData;
      const vmManager = new ServerManager(serverType, virtualMachines);
      const result = vmManager.calculate();

      return response.status(HttpStatus.OK).json({
        message:
          'Successfully fetched the holding capacity for the server type',
        result: {
          value: result,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
