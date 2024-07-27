export interface IMedia {
    lt: number;
    lg: number;
    s: string;
    acc: number;
}

export interface Point {
    type: string;
    coordinates: number[];
}

export interface IMediaRes {
    location: Point
    image: string;
    accuracy: number;
}