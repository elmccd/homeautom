import { MongoObservable } from 'meteor-rxjs';
import {Light} from "../models/light.model";

export const LightCollection = new MongoObservable.Collection<Light>('light-collection');