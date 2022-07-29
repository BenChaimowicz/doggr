import {IPark} from '../interfaces/Park.interface';

export const getParks = async  (): Promise<IPark[]> => {
    return [
        {id: '1',name: 'Arigi', dogs: [], photos: ['/arigi.jpg']},
        {id: '2',name: 'Hayaar', dogs: [], photos: ['/hayaar.jpg']},
        {id: '3',name: 'Dubnov', dogs: []},
    ]
}