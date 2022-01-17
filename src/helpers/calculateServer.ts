import { IServerPlanning, serverMakeup } from '../interfaces/server.interface';

class ServerManager implements IServerPlanning {
  serverType: any;
  virtualMachines: any;
  data: Array<serverMakeup> = [];
  carryingCapacity = 0;

  constructor(serverType: serverMakeup, virtualMachines: Array<serverMakeup>) {
    this.serverType = serverType;
    this.virtualMachines = virtualMachines;
  }

  calculate(): number {
    const initialServerType: serverMakeup = {
      CPU: 0,
      RAM: 0,
      HDD: 0,
    };

    // Ensure virtual machines are sorted by "weight" or "cost".
    this.virtualMachines.sort(
      (
        a: { CPU: any; RAM: any; HDD: any },
        b: { CPU: any; RAM: any; HDD: any },
      ) => {
        const costForA = a.CPU + a.RAM + a.HDD;
        const costForB = b.CPU + b.RAM + b.HDD;

        return costForA - costForB;
      },
    );

    const canFit =
      (prev: { [x: string]: any }, curr: { [x: string]: any }) =>
      (type: string | number) =>
        prev[type] + curr[type] <= this.serverType[type];

    this.virtualMachines.reduce(
      (
        prev: { CPU: any; RAM: any; HDD: any },
        curr: { CPU: any; RAM: any; HDD: any },
      ) => {
        // Prepare curried function statement
        const fittable = canFit(prev, curr);

        // If the current VM can fit in without overload,
        // increase server carrying capacity
        if (fittable('HDD') && fittable('RAM') && fittable('CPU')) {
          this.carryingCapacity++;

          return {
            CPU: prev.CPU + curr.CPU,
            RAM: prev.RAM + curr.RAM,
            HDD: prev.HDD + curr.HDD,
          };
        }

        return {
          CPU: prev.CPU,
          RAM: prev.RAM,
          HDD: prev.HDD,
        };
      },
      initialServerType,
    );
    return this.carryingCapacity;
  }
}
export default ServerManager;
