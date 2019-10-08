import { Poder } from './poder.model';

export class Hero {
    constructor(public id: number,
        public nombre: string,
        public descripcion?: string,
        public lugar?: string,
        public email?: string,
        public valorUnitario?: number,
        public cantidad?: number,
        public total?: number,
        public poderes?: Array<Poder>) { }
    }
