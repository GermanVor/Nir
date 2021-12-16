import axios from 'axios';
import dotenv from 'dotenv';
import { Client } from 'pg';
import fs from 'fs';

// import { ARRIVAL_DATA } from './aviationstack/ARRIVAL_DATA_MOCK';
// import { DEPARTURE_DATA } from './aviationstack/DEPARTURE_DATA_MOCK';
import { IResponse } from './response.types';

import { addAirlineItemToTable, addAirplaneItemToTable, getCurrentAirline, getCurrAirplane } from './dbActions';

dotenv.config();

const errorsStream = fs.createWriteStream('./errors.log');
const airportsStream = fs.createWriteStream('./aviationstack/flightsActive7');
const airportsMetaStrim = fs.createWriteStream('./aviationstack/flightsActive7.meta');

const FETCH_DELAY = 5 * 60 * 1000; // milliseconds 2 * 60 * 1000

function LoopFetchingProcess<T>(func: (params: T) => Promise<any>, funcParams: T, limit?: number, delay = FETCH_DELAY) {
    let currentCount = 0;

    return () => {
        func(funcParams);

        const intervalId = setInterval(() => {
            ++currentCount;

            func(funcParams);

            if (currentCount === limit) {
                clearInterval(intervalId);
            }
        }, delay);
    };
}

const FETCH_URL = 'http://api.aviationstack.com/v1/flights';

interface FitchingParams {
    client: Client;
    arr_icao?: string;
    dep_icao?: string;
}

const GetAndWriteFlights = (_params: FitchingParams) => {
    console.log(`⚡️[server]:[${new Date()}] Make Api request (${_params.arr_icao ? 'arrival' : 'departure'})`);

    return (
        axios
            .get<IResponse>(FETCH_URL, {
                params: {
                    ..._params,
                    access_key: process.env.AVIATIONSTACK_KEY,
                    flight_status: 'active'
                },
            })
            // new Promise<{ status: number; data: IResponse }>((res) => {
            //     setTimeout(() => {
            //         res({
            //             status: 200,
            //             data: {
            //                 data: _params.arr_icao ? ARRIVAL_DATA : DEPARTURE_DATA,
            //             },
            //         });
            //     }, 500);
            // })
            .then((resp) => {
                const date = new Date();
                console.log(`⚡️[server]:[${date}] Get Api response (${_params.arr_icao ? 'arrival' : 'departure'})`);

                if (resp.status === 200) {
                    const { data } = resp.data;

                    data.map((info) => {
                        addAirlineItemToTable(_params.client, getCurrentAirline(info));
                        addAirplaneItemToTable(_params.client, getCurrAirplane(info));
                    });

                    airportsStream.write(JSON.stringify(data));
                    airportsMetaStrim.write(JSON.stringify(resp.data.pagination));
                } else {
                    console.log(
                        `⚡️[server]:[${date}] response status !== 200 (${_params.arr_icao ? 'arrival' : 'departure'})`
                    );
                    errorsStream.write(JSON.stringify(resp));
                }
            })
            .catch((err) => {
                errorsStream.write(JSON.stringify(err));
                console.log(err);
            })
    );
};

export const StartFetchingProcess = (client: Client) => {
    console.log(`⚡️[server]: Data processing has started`);

    const startFetchingArrivel = LoopFetchingProcess(
        GetAndWriteFlights,
        { client, arr_icao: process.env.AIRPORT_ICAO },
        100
    );

    const startFetchingDeparture = LoopFetchingProcess(
        GetAndWriteFlights,
        { client, dep_icao: process.env.AIRPORT_ICAO },
        100
    );

    startFetchingArrivel();
    startFetchingDeparture();
};
