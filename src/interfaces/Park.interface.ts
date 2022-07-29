import { IDog } from "./Dog.interface";


export interface IPark {
    id: string;
    name: string;
    location?: [number, number];
    dogs?: IDog[]; 
    photos?: string[];
}