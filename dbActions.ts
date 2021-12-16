import { Client } from 'pg';
import dotenv from 'dotenv';
import { IResponseDataItem } from './response.types';
import { AirplaneItemFields, AirlineItemFields, IAirlineItem, IAirplaneItem, FlightStatus } from './db.types';

dotenv.config();

const AIRPLANE_TABLE_NAME = 'airplanes';
const createAirplaneTable = (client: Client) =>
    client.query(
        `CREATE TABLE IF NOT EXISTS ${AIRPLANE_TABLE_NAME} (
            ${AirplaneItemFields.FlightNumber} varchar,
            ${AirplaneItemFields.Updated} int8,
            ${AirplaneItemFields.Latitude} float4,
            ${AirplaneItemFields.Longitude} float4,
            ${AirplaneItemFields.Altitude} float4,
            ${AirplaneItemFields.Direction} float4,
            ${AirplaneItemFields.SpeedHorizontal} float4,
            ${AirplaneItemFields.SpeedVertical} float4,
            ${AirplaneItemFields.IsGround} boolean,
            ${AirplaneItemFields.FlightStatus} varchar
        );`
    );

const AIRLINE_TABLE_NAME = 'airlines';
const createAirlineTable = (client: Client) =>
    client.query(
        `CREATE TABLE IF NOT EXISTS ${AIRLINE_TABLE_NAME} (
            ${AirlineItemFields.FlightNumber} varchar,
            ${AirlineItemFields.Updated} int8,
            ${AirlineItemFields.DepartureIata} varchar,
            ${AirlineItemFields.DepartureIcao} varchar,
            ${AirlineItemFields.ArrivalIata} varchar,
            ${AirlineItemFields.ArrivalIcao} varchar,
            ${AirlineItemFields.DepartureScheduled} varchar,
            ${AirlineItemFields.DepartureActual} varchar,
            ${AirlineItemFields.ArrivalScheduled} varchar,
            ${AirlineItemFields.ArrivalActual} varchar
        );`
    );

export const addAirplaneItemToTable = (client: Client, airplane: IAirplaneItem) =>
    client.query(`
        INSERT INTO ${AIRPLANE_TABLE_NAME} (
            ${Object.values<string>(AirplaneItemFields).reduce((a, b) => `${a}, ${b}`)}
        )
        VALUES(
            ${Object.values(AirplaneItemFields)
                .map<any>((a) => `'${airplane[a]}'`)
                .reduce((a, b) => `${a}, ${b}`)}
        );
    `);

export const addAirlineItemToTable = (client: Client, airline: IAirlineItem): Promise<any> => {
    const a = `
        INSERT INTO ${AIRLINE_TABLE_NAME} (
            ${Object.values<string>(AirlineItemFields).reduce((a, b) => `${a}, ${b}`)}
        )
        VALUES(
            ${Object.values(AirlineItemFields)
                .map<any>((a) => `'${airline[a]}'`)
                .reduce((a, b) => `${a}, ${b}`)}
        );
    `;

    return client.query(a);
};

export const connectToDB = () => {
    const client = new Client();
    console.log(`⚡️[db]: try to connect to db`);

    return client
        .connect()
        .then(() => {
            console.log(`⚡️[db]: connection to db end succesfully`);

            console.log(`⚡️[db]: try to create AirplaneTable `);

            return createAirplaneTable(client).then(() => {
                console.log(`⚡️[db]: AirplaneTable creation end succesfully`);
            });
        })
        .then(() => {
            console.log(`⚡️[db]: try to create AirlineTable`);

            return createAirlineTable(client).then(() => {
                console.log(`⚡️[db]: AirlineTable creation end succesfully`);
            });
        })
        .then(() => client);
};

export const getCurrentAirline = ({ flight, departure, arrival, live }: IResponseDataItem): IAirlineItem => ({
    [AirlineItemFields.FlightNumber]: flight.number || 'unknown',
    [AirlineItemFields.Updated]: new Date(live?.updated || 0).getTime(),

    [AirlineItemFields.DepartureIata]: departure.iata,
    [AirlineItemFields.DepartureIcao]: departure.icao,
    [AirlineItemFields.ArrivalIata]: arrival.iata,
    [AirlineItemFields.ArrivalIcao]: arrival.icao,

    [AirlineItemFields.DepartureScheduled]: new Date(departure.scheduled).getTime(),
    [AirlineItemFields.DepartureActual]: new Date(departure.actual || 0).getTime(),
    [AirlineItemFields.ArrivalScheduled]: new Date(arrival.scheduled).getTime(),
    [AirlineItemFields.ArrivalActual]: new Date(arrival.actual || 0).getTime(),
});

export const getCurrAirplane = ({ flight, live, flight_status }: IResponseDataItem): IAirplaneItem => ({
    [AirplaneItemFields.FlightNumber]: flight.number || 'unknown',
    [AirplaneItemFields.Updated]: new Date(live?.updated || 0).getTime(),

    [AirplaneItemFields.Latitude]: live?.latitude || 0,
    [AirplaneItemFields.Longitude]: live?.longitude || 0,
    [AirplaneItemFields.Altitude]: live?.altitude || 0,
    [AirplaneItemFields.Direction]: live?.direction || 0,
    [AirplaneItemFields.SpeedHorizontal]: live?.speed_horizontal || 0,
    [AirplaneItemFields.SpeedVertical]: live?.speed_vertical || 0,

    [AirplaneItemFields.IsGround]: live?.is_ground || false,
    [AirplaneItemFields.FlightStatus]: flight_status as FlightStatus,
});
