export class BeverageDescription {
  selected: boolean = false;

  constructor(
    public beverageTypeId: number,
    public name: string,
    public cost: number,
    public available: boolean
  ) {}
}
