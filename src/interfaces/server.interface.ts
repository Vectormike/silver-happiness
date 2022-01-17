export interface serverMakeup {
  CPU: number;
  RAM: number;
  HDD: number;
}

export interface IServerPlanning {
  serverType: serverMakeup;
  virtualMachines: Array<serverMakeup>;
  calculate(
    serverType: serverMakeup,
    virtualMachines: Array<serverMakeup>,
  ): number;
}
