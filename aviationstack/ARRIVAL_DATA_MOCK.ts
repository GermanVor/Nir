import { IResponseDataItem } from '../response.types';

export const ARRIVAL_DATA: IResponseDataItem[] = [
    {
        flight_date: '2021-11-17',
        flight_status: 'scheduled',
        departure: {
            airport: 'Chelyabinsk',
            timezone: 'Asia/Yekaterinburg',
            iata: 'CEK',
            icao: 'USCC',
            terminal: 'A',
            gate: null,
            delay: null,
            scheduled: '2021-11-17T05:05:00+00:00',
            estimated: '2021-11-17T05:05:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: null,
            gate: null,
            baggage: null,
            delay: null,
            scheduled: '2021-11-17T10:15:00+00:00',
            estimated: '2021-11-17T10:15:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'Red Wings', iata: 'WZ', icao: 'RWZ' },
        flight: {
            number: '1279',
            iata: 'WZ1279',
            icao: 'RWZ1279',
            codeshared: null,
        },
        aircraft: null,
        live: null,
    },
    {
        flight_date: '2021-11-17',
        flight_status: 'scheduled',
        departure: {
            airport: 'Tolmachevo',
            timezone: 'Asia/Novosibirsk',
            iata: 'OVB',
            icao: 'UNNT',
            terminal: 'A',
            gate: null,
            delay: 15,
            scheduled: '2021-11-17T05:10:00+00:00',
            estimated: '2021-11-17T05:10:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: null,
            gate: null,
            baggage: null,
            delay: null,
            scheduled: '2021-11-17T08:00:00+00:00',
            estimated: '2021-11-17T08:00:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'S7 Airlines', iata: 'S7', icao: 'SBI' },
        flight: {
            number: '5303',
            iata: 'S75303',
            icao: 'SBI5303',
            codeshared: null,
        },
        aircraft: null,
        live: null,
    },
    {
        flight_date: '2021-11-17',
        flight_status: 'scheduled',
        departure: {
            airport: 'Omsk',
            timezone: 'Asia/Omsk',
            iata: 'OMS',
            icao: 'UNOO',
            terminal: null,
            gate: null,
            delay: null,
            scheduled: '2021-11-17T05:40:00+00:00',
            estimated: '2021-11-17T05:40:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: null,
            gate: null,
            baggage: null,
            delay: null,
            scheduled: '2021-11-17T09:30:00+00:00',
            estimated: '2021-11-17T09:30:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'Red Wings', iata: 'WZ', icao: 'RWZ' },
        flight: {
            number: '1645',
            iata: 'WZ1645',
            icao: 'RWZ1645',
            codeshared: null,
        },
        aircraft: null,
        live: null,
    },
    {
        flight_date: '2021-11-17',
        flight_status: 'scheduled',
        departure: {
            airport: 'Koltsovo International',
            timezone: 'Asia/Yekaterinburg',
            iata: 'SVX',
            icao: 'USSS',
            terminal: null,
            gate: null,
            delay: null,
            scheduled: '2021-11-17T06:00:00+00:00',
            estimated: '2021-11-17T06:00:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: null,
            gate: null,
            baggage: null,
            delay: null,
            scheduled: '2021-11-17T11:00:00+00:00',
            estimated: '2021-11-17T11:00:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'NordStar Airlines', iata: 'Y7', icao: 'TYA' },
        flight: {
            number: '918',
            iata: 'Y7918',
            icao: 'TYA918',
            codeshared: null,
        },
        aircraft: null,
        live: null,
    },
    {
        flight_date: '2021-11-16',
        flight_status: 'scheduled',
        departure: {
            airport: 'Roschino',
            timezone: 'Asia/Yekaterinburg',
            iata: 'TJM',
            icao: 'USTR',
            terminal: null,
            gate: null,
            delay: null,
            scheduled: '2021-11-16T01:35:00+00:00',
            estimated: '2021-11-16T01:35:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: '1',
            gate: null,
            baggage: null,
            delay: null,
            scheduled: '2021-11-16T06:25:00+00:00',
            estimated: '2021-11-16T06:25:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'NordStar Airlines', iata: 'Y7', icao: 'TYA' },
        flight: {
            number: '910',
            iata: 'Y7910',
            icao: 'TYA910',
            codeshared: null,
        },
        aircraft: null,
        live: null,
    },
    {
        flight_date: '2021-11-16',
        flight_status: 'scheduled',
        departure: {
            airport: 'Krasnojarsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'KJA',
            icao: 'UNKL',
            terminal: '1',
            gate: null,
            delay: 52,
            scheduled: '2021-11-16T08:10:00+00:00',
            estimated: '2021-11-16T08:10:00+00:00',
            actual: '2021-11-16T09:02:00+00:00',
            estimated_runway: '2021-11-16T09:02:00+00:00',
            actual_runway: '2021-11-16T09:02:00+00:00',
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: '1',
            gate: null,
            baggage: null,
            delay: 29,
            scheduled: '2021-11-16T10:45:00+00:00',
            estimated: '2021-11-16T10:45:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'NordStar Airlines', iata: 'Y7', icao: 'TYA' },
        flight: {
            number: '207',
            iata: 'Y7207',
            icao: 'TYA207',
            codeshared: null,
        },
        aircraft: null,
        live: null,
    },
    {
        flight_date: '2021-11-16',
        flight_status: 'active',
        departure: {
            airport: 'Domodedovo',
            timezone: 'Europe/Moscow',
            iata: 'DME',
            icao: 'UUDD',
            terminal: null,
            gate: '51',
            delay: null,
            scheduled: '2021-11-16T22:05:00+00:00',
            estimated: '2021-11-16T22:05:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: null,
            gate: null,
            baggage: null,
            delay: null,
            scheduled: '2021-11-17T06:10:00+00:00',
            estimated: '2021-11-17T06:10:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'NordStar Airlines', iata: 'Y7', icao: 'TYA' },
        flight: {
            number: '403',
            iata: 'Y7403',
            icao: 'TYA403',
            codeshared: null,
        },
        aircraft: null,
        live: null,
    },
    {
        flight_date: '2021-11-16',
        flight_status: 'scheduled',
        departure: {
            airport: 'Domodedovo',
            timezone: 'Europe/Moscow',
            iata: 'DME',
            icao: 'UUDD',
            terminal: null,
            gate: null,
            delay: null,
            scheduled: '2021-11-16T23:40:00+00:00',
            estimated: '2021-11-16T23:40:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: null,
            gate: null,
            baggage: null,
            delay: null,
            scheduled: '2021-11-17T07:45:00+00:00',
            estimated: '2021-11-17T07:45:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'NordStar Airlines', iata: 'Y7', icao: 'TYA' },
        flight: {
            number: '105',
            iata: 'Y7105',
            icao: 'TYA105',
            codeshared: null,
        },
        aircraft: null,
        live: null,
    },
    {
        flight_date: '2021-11-16',
        flight_status: 'scheduled',
        departure: {
            airport: 'Domodedovo',
            timezone: 'Europe/Moscow',
            iata: 'DME',
            icao: 'UUDD',
            terminal: null,
            gate: '109',
            delay: 15,
            scheduled: '2021-11-16T23:15:00+00:00',
            estimated: '2021-11-16T23:15:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: null,
            gate: null,
            baggage: null,
            delay: null,
            scheduled: '2021-11-17T07:30:00+00:00',
            estimated: '2021-11-17T07:30:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'S7 Airlines', iata: 'S7', icao: 'SBI' },
        flight: {
            number: '2581',
            iata: 'S72581',
            icao: 'SBI2581',
            codeshared: null,
        },
        aircraft: null,
        live: null,
    },
    {
        flight_date: '2021-11-16',
        flight_status: 'active',
        departure: {
            airport: 'Krasnojarsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'KJA',
            icao: 'UNKL',
            terminal: '1',
            gate: null,
            delay: 23,
            scheduled: '2021-11-16T11:45:00+00:00',
            estimated: '2021-11-16T11:45:00+00:00',
            actual: '2021-11-16T12:07:00+00:00',
            estimated_runway: '2021-11-16T12:07:00+00:00',
            actual_runway: '2021-11-16T12:07:00+00:00',
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: '1',
            gate: null,
            baggage: null,
            delay: null,
            scheduled: '2021-11-16T14:25:00+00:00',
            estimated: '2021-11-16T14:25:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'NordStar Airlines', iata: 'Y7', icao: 'TYA' },
        flight: {
            number: '217',
            iata: 'Y7217',
            icao: 'TYA217',
            codeshared: null,
        },
        aircraft: null,
        live: null,
    },
    {
        flight_date: '2021-11-16',
        flight_status: 'scheduled',
        departure: {
            airport: 'Kazan',
            timezone: 'Europe/Moscow',
            iata: 'KZN',
            icao: 'UWKD',
            terminal: '1',
            gate: null,
            delay: null,
            scheduled: '2021-11-16T02:20:00+00:00',
            estimated: '2021-11-16T02:20:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: '1',
            gate: null,
            baggage: null,
            delay: null,
            scheduled: '2021-11-16T10:00:00+00:00',
            estimated: '2021-11-16T10:00:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'Red Wings', iata: 'WZ', icao: 'RWZ' },
        flight: {
            number: '1647',
            iata: 'WZ1647',
            icao: 'RWZ1647',
            codeshared: null,
        },
        aircraft: null,
        live: null,
    },
    {
        flight_date: '2021-11-16',
        flight_status: 'active',
        departure: {
            airport: 'Tolmachevo',
            timezone: 'Asia/Novosibirsk',
            iata: 'OVB',
            icao: 'UNNT',
            terminal: 'A',
            gate: '6',
            delay: 25,
            scheduled: '2021-11-16T05:10:00+00:00',
            estimated: '2021-11-16T05:10:00+00:00',
            actual: '2021-11-16T05:34:00+00:00',
            estimated_runway: '2021-11-16T05:34:00+00:00',
            actual_runway: '2021-11-16T05:34:00+00:00',
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: '1',
            gate: null,
            baggage: null,
            delay: null,
            scheduled: '2021-11-16T08:00:00+00:00',
            estimated: '2021-11-16T08:00:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'S7 Airlines', iata: 'S7', icao: 'SBI' },
        flight: {
            number: '5303',
            iata: 'S75303',
            icao: 'SBI5303',
            codeshared: null,
        },
        aircraft: null,
        live: null,
    },
    {
        flight_date: '2021-11-15',
        flight_status: 'active',
        departure: {
            airport: 'Domodedovo',
            timezone: 'Europe/Moscow',
            iata: 'DME',
            icao: 'UUDD',
            terminal: null,
            gate: '109',
            delay: 16,
            scheduled: '2021-11-15T23:15:00+00:00',
            estimated: '2021-11-15T23:15:00+00:00',
            actual: '2021-11-15T23:31:00+00:00',
            estimated_runway: '2021-11-15T23:31:00+00:00',
            actual_runway: '2021-11-15T23:31:00+00:00',
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: '1',
            gate: null,
            baggage: null,
            delay: null,
            scheduled: '2021-11-16T07:30:00+00:00',
            estimated: '2021-11-16T07:30:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'S7 Airlines', iata: 'S7', icao: 'SBI' },
        flight: {
            number: '2581',
            iata: 'S72581',
            icao: 'SBI2581',
            codeshared: null,
        },
        aircraft: {
            registration: 'VP-BLD',
            iata: 'B738',
            icao: 'B738',
            icao24: '42433D',
        },
        live: {
            updated: '2021-11-15T23:16:04+00:00',
            latitude: 66.98,
            longitude: 67.9,
            altitude: 11277.6,
            direction: 53,
            speed_horizontal: 818.584,
            speed_vertical: 0,
            is_ground: false,
        },
    },
    {
        flight_date: '2021-11-15',
        flight_status: 'active',
        departure: {
            airport: 'Domodedovo',
            timezone: 'Europe/Moscow',
            iata: 'DME',
            icao: 'UUDD',
            terminal: null,
            gate: '27',
            delay: 14,
            scheduled: '2021-11-15T22:05:00+00:00',
            estimated: '2021-11-15T22:05:00+00:00',
            actual: '2021-11-15T22:19:00+00:00',
            estimated_runway: '2021-11-15T22:19:00+00:00',
            actual_runway: '2021-11-15T22:19:00+00:00',
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: '1',
            gate: null,
            baggage: null,
            delay: 15,
            scheduled: '2021-11-16T06:10:00+00:00',
            estimated: '2021-11-16T06:10:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'NordStar Airlines', iata: 'Y7', icao: 'TYA' },
        flight: {
            number: '401',
            iata: 'Y7401',
            icao: 'TYA401',
            codeshared: null,
        },
        aircraft: {
            registration: 'VQ-BAA',
            iata: 'B738',
            icao: 'B738',
            icao24: '4243E1',
        },
        live: {
            updated: '2021-11-15T23:00:59+00:00',
            latitude: 69.29,
            longitude: 83.39,
            altitude: 7200.9,
            direction: 81,
            speed_horizontal: 677.832,
            speed_vertical: 0,
            is_ground: false,
        },
    },
    {
        flight_date: '2021-11-15',
        flight_status: 'scheduled',
        departure: {
            airport: 'Dikson',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'DKS',
            icao: 'UODD',
            terminal: null,
            gate: null,
            delay: null,
            scheduled: '2021-11-15T13:05:00+00:00',
            estimated: '2021-11-15T13:05:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: null,
            gate: null,
            baggage: null,
            delay: null,
            scheduled: '2021-11-15T14:45:00+00:00',
            estimated: '2021-11-15T14:45:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'KrasAvia', iata: 'KI', icao: 'SSJ' },
        flight: { number: '62', iata: 'KI62', icao: 'SSJ62', codeshared: null },
        aircraft: null,
        live: null,
    },
    {
        flight_date: '2021-11-15',
        flight_status: 'scheduled',
        departure: {
            airport: 'Krasnojarsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'KJA',
            icao: 'UNKL',
            terminal: '1',
            gate: null,
            delay: 48,
            scheduled: '2021-11-15T07:50:00+00:00',
            estimated: '2021-11-15T07:50:00+00:00',
            actual: '2021-11-15T08:37:00+00:00',
            estimated_runway: '2021-11-15T08:37:00+00:00',
            actual_runway: '2021-11-15T08:37:00+00:00',
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: '1',
            gate: null,
            baggage: null,
            delay: 26,
            scheduled: '2021-11-15T10:20:00+00:00',
            estimated: '2021-11-15T10:20:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'NordStar Airlines', iata: 'Y7', icao: 'TYA' },
        flight: {
            number: '207',
            iata: 'Y7207',
            icao: 'TYA207',
            codeshared: null,
        },
        aircraft: {
            registration: 'VQ-BNG',
            iata: 'B738',
            icao: 'B738',
            icao24: '4245F5',
        },
        live: {
            updated: '2021-11-15T03:01:10+00:00',
            latitude: 65.72,
            longitude: 88.79,
            altitude: 10363.2,
            direction: 352,
            speed_horizontal: 842.66,
            speed_vertical: 0,
            is_ground: false,
        },
    },
    {
        flight_date: '2021-11-15',
        flight_status: 'active',
        departure: {
            airport: 'Bolshoye Savino',
            timezone: 'Asia/Yekaterinburg',
            iata: 'PEE',
            icao: 'USPP',
            terminal: null,
            gate: null,
            delay: null,
            scheduled: '2021-11-15T04:50:00+00:00',
            estimated: '2021-11-15T04:50:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: '1',
            gate: null,
            baggage: null,
            delay: null,
            scheduled: '2021-11-15T10:00:00+00:00',
            estimated: '2021-11-15T10:00:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'Red Wings', iata: 'WZ', icao: 'RWZ' },
        flight: {
            number: '1485',
            iata: 'WZ1485',
            icao: 'RWZ1485',
            codeshared: null,
        },
        aircraft: null,
        live: null,
    },
    {
        flight_date: '2021-11-15',
        flight_status: 'scheduled',
        departure: {
            airport: 'Barnaul',
            timezone: 'Asia/Omsk',
            iata: 'BAX',
            icao: 'UNBB',
            terminal: null,
            gate: null,
            delay: null,
            scheduled: '2021-11-15T03:50:00+00:00',
            estimated: '2021-11-15T03:50:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: '1',
            gate: null,
            baggage: null,
            delay: null,
            scheduled: '2021-11-15T06:55:00+00:00',
            estimated: '2021-11-15T06:55:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'NordStar Airlines', iata: 'Y7', icao: 'TYA' },
        flight: {
            number: '930',
            iata: 'Y7930',
            icao: 'TYA930',
            codeshared: null,
        },
        aircraft: null,
        live: null,
    },
    {
        flight_date: '2021-11-15',
        flight_status: 'scheduled',
        departure: {
            airport: 'Krasnojarsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'KJA',
            icao: 'UNKL',
            terminal: '1',
            gate: null,
            delay: null,
            scheduled: '2021-11-15T10:25:00+00:00',
            estimated: '2021-11-15T10:25:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: '1',
            gate: null,
            baggage: null,
            delay: null,
            scheduled: '2021-11-15T13:00:00+00:00',
            estimated: '2021-11-15T13:00:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'NordStar Airlines', iata: 'Y7', icao: 'TYA' },
        flight: {
            number: '217',
            iata: 'Y7217',
            icao: 'TYA217',
            codeshared: null,
        },
        aircraft: null,
        live: null,
    },
    {
        flight_date: '2021-11-15',
        flight_status: 'scheduled',
        departure: {
            airport: 'Hatanga',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'HTG',
            icao: 'UOHH',
            terminal: null,
            gate: null,
            delay: null,
            scheduled: '2021-11-15T07:25:00+00:00',
            estimated: '2021-11-15T07:25:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: '1',
            gate: null,
            baggage: null,
            delay: null,
            scheduled: '2021-11-15T09:25:00+00:00',
            estimated: '2021-11-15T09:25:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'KrasAvia', iata: 'KI', icao: 'SSJ' },
        flight: { number: '65', iata: 'KI65', icao: 'SSJ65', codeshared: null },
        aircraft: null,
        live: null,
    },
    {
        flight_date: '2021-11-15',
        flight_status: 'active',
        departure: {
            airport: 'Tolmachevo',
            timezone: 'Asia/Novosibirsk',
            iata: 'OVB',
            icao: 'UNNT',
            terminal: 'A',
            gate: '3',
            delay: 22,
            scheduled: '2021-11-15T05:10:00+00:00',
            estimated: '2021-11-15T05:10:00+00:00',
            actual: '2021-11-15T05:31:00+00:00',
            estimated_runway: '2021-11-15T05:31:00+00:00',
            actual_runway: '2021-11-15T05:31:00+00:00',
        },
        arrival: {
            airport: 'Norilsk',
            timezone: 'Asia/Krasnoyarsk',
            iata: 'NSK',
            icao: 'UOOO',
            terminal: '1',
            gate: null,
            baggage: null,
            delay: null,
            scheduled: '2021-11-15T08:00:00+00:00',
            estimated: '2021-11-15T08:00:00+00:00',
            actual: null,
            estimated_runway: null,
            actual_runway: null,
        },
        airline: { name: 'S7 Airlines', iata: 'S7', icao: 'SBI' },
        flight: {
            number: '5303',
            iata: 'S75303',
            icao: 'SBI5303',
            codeshared: null,
        },
        aircraft: null,
        live: null,
    },
];
