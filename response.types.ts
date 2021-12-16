export interface IResponseDataItem {
    flight_date: string;
    flight_status: string;
    departure: {
        airport: string;
        timezone: string;
        iata: string;
        icao: string;
        terminal: null | string;
        gate: null | string;
        delay: null | number;
        scheduled: string;
        estimated: string;
        actual: null | string;
        estimated_runway: null | string;
        actual_runway: null | string;
    };
    arrival: {
        airport: string;
        timezone: null | string;
        iata: string;
        icao: string;
        terminal: null | string;
        gate: null | string;
        baggage: null | string;
        delay: null | number;
        scheduled: string;
        estimated: string;
        actual: null | string;
        estimated_runway: null | string;
        actual_runway: null | string;
    };
    airline: { name: string; iata: null | string; icao: null | string };
    flight: {
        number: null | string;
        iata: null | string;
        icao: null | string;
        codeshared: null | any;
    };
    aircraft: null | {
        registration: string;
        iata: string;
        icao: string;
        icao24: string;
    };
    live: null | {
        updated: string;
        latitude: number;
        longitude: number;
        altitude: number;
        direction: number;
        speed_horizontal: number;
        speed_vertical: number;
        is_ground: false;
    };
}

export interface IResponse {
    pagination: {
        limit: number;
        offset: number;
        count: number;
        total: number;
    };
    data: IResponseDataItem[];
}
