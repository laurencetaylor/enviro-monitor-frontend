import axios from 'axios';

import { RPI_IP } from '../../.env';

interface IParameters {
    dateFrom?: string;
    dateTo?: string;
    limit?: number;
}

const constructUrl = (params: IParameters = {}): string => {
    let url = `${RPI_IP}/readings?`;

    const arr = [];
    if (params.dateFrom) arr.push(`dateFrom=${params.dateFrom}`);
    if (params.dateTo) arr.push(`dateTo=${params.dateTo}`);
    if (params.limit) arr.push(`limit=${params.limit}`);
    url += arr.join('&');

    return url;
};

const getEnviroReadings = (params: IParameters = {}): Promise<any> => {
    const url = constructUrl(params);

    return axios.get(url);
};

export { getEnviroReadings };
