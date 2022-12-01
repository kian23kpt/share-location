import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { LocationActions } from '../actions';
import { Location } from '../models';

@State<Location.State>({
  name: 'location',
  defaults: {
    locations: [],
  },
})
@Injectable()
export class LocationState {
  constructor() {}

  @Selector()
  static locations(state: Location.State): Location.Model[] {
    return state.locations;
  }

  @Action(LocationActions.AddLocation, { cancelUncompleted: true })
  addLocation(
    { patchState, getState }: StateContext<Location.State>,
    { newLocation }: LocationActions.AddLocation
  ) {
    const stateLocations = getState().locations;
    stateLocations.push(newLocation);

    patchState({
      locations: stateLocations,
    });
  }
}
