

export interface IUser {
    id: string;
    userName: string;
    email: string;
    password?: string;
    ownerIds?: string[]; 
    picture?: string;
}