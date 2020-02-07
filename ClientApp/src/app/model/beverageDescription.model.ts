export class BeverageDescription {
    selected: boolean = false;

    constructor(
        public name: string,
        public cost: number,
        public image: [],
        public available: boolean,
    ){

    }
}
