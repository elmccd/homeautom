import { Injectable } from '@angular/core';
import { ObservableCursor } from 'meteor-rxjs';
import { Light } from "../../../../both/models/light.model";
import { LightCollection } from "../../../../both/collections/light.collection";

@Injectable()
export class DemoDataService {
  private data : ObservableCursor<Light>;

  constructor() {
    this.data = LightCollection.find({});
  }

  public getData() : ObservableCursor<Light> {
    return this.data;
  }
}
