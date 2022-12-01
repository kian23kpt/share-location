import { Location } from '../models';

export namespace LocationActions {
  export class AddLocation {
    static readonly type = '[Location] Add Location';

    constructor(public newLocation: Location.Model | any) {}
  }
}
