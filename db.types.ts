export enum FlightStatus {
    Scheduled = 'scheduled',
    Active = 'active',
    Landed = 'landed',
    Cancelled = 'cancelled',
    Incident = 'incident',
    Diverted = 'diverted',
}

export enum AirplaneItemFields {
    FlightNumber = 'number',
    Updated = 'updated',

    Latitude = 'latitude',
    Longitude = 'longitude',
    Altitude = 'altitude',
    Direction = 'direction',
    SpeedHorizontal = 'speed_horizontal',
    SpeedVertical = 'speed_vertical',

    IsGround = 'is_ground',
    FlightStatus = 'flight_status',
}

export interface IAirplaneItem {
    [AirplaneItemFields.FlightNumber]: string;
    [AirplaneItemFields.Updated]: number;

    [AirplaneItemFields.Latitude]: number;
    [AirplaneItemFields.Longitude]: number;
    [AirplaneItemFields.Altitude]: number;
    [AirplaneItemFields.Direction]: number;
    [AirplaneItemFields.SpeedHorizontal]: number;
    [AirplaneItemFields.SpeedVertical]: number;

    [AirplaneItemFields.IsGround]: boolean;
    [AirplaneItemFields.FlightStatus]: FlightStatus;
}

export enum AirlineItemFields {
    FlightNumber = 'number',
    Updated = 'updated',

    DepartureIata = 'departure_iata',
    DepartureIcao = 'departure_icao',
    ArrivalIata = 'arrival_iata',
    ArrivalIcao = 'arrival_icao',

    DepartureScheduled = 'departure_scheduled',
    DepartureActual = 'departure_actual',
    ArrivalScheduled = 'arrival_scheduled',
    ArrivalActual = 'arrival_actual',
}

export interface IAirlineItem {
    [AirlineItemFields.FlightNumber]: string;
    [AirlineItemFields.Updated]: number;

    [AirlineItemFields.DepartureIata]: string;
    [AirlineItemFields.DepartureIcao]: string;
    [AirlineItemFields.ArrivalIata]: string;
    [AirlineItemFields.ArrivalIcao]: string;

    [AirlineItemFields.DepartureScheduled]: number;
    [AirlineItemFields.DepartureActual]: number;
    [AirlineItemFields.ArrivalScheduled]: number;
    [AirlineItemFields.ArrivalActual]: number;
}
