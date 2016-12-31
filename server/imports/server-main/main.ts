import {LightCollection} from "../../../both/collections/light.collection";
import {Light} from "../../../both/models/light.model";
export class Main {
  start(): void {
    this.initFakeData();
  }

  initFakeData(): void {
    if (LightCollection.find({}).cursor.count() === 0) {
      const data: Light[] = [
        {
          id: 1,
          status: false
        }
      ];
      
      setInterval(function () {
        data.forEach((obj: Light) => {
          LightCollection.insert(obj);
        });
      }, 1000);
    }
  }
}
