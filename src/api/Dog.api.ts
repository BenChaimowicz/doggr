import { IDog } from "../interfaces/Dog.interface"


export const getDogList= async (): Promise<IDog[]> => {
    return [
        {
            id: '1',
            name: 'Puck',
            age: 9,
            ownerIds: ['1'],
            photo: '/Puck.jpeg'
        }
    ]
}