export namespace Location {
  export interface Model {
    name: string;
    type: Type;
    latLng: { lat: number; lng: number };
    logo: string;
  }

  export interface State {
    locations: Location.Model[];
  }

  export enum Type {
    Home = 1,
    Work = 2,
  }
}
