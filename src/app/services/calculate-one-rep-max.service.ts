import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CalculateOneRepMaxService {
  constructor() {}

  /**
   * Calculate One-Rep Max based on weight lifted, reps lifted, and formula
   * @param weight: number - weight lifted
   * @param reps: number - reps lifted
   * @param formula:  string - one-rep calculation formula
   *
   * return oneRepMax: number
   */
  calculateOneRepMax(weight: number, reps: number, formula: string) {
    let oneRepMax: number;
    //Calculate oneRepMaxes for all formulas
    const brzyckiMax = Math.floor(weight * (36 / (37 - reps)));
    const epleyMax = Math.floor(weight * (1 + reps / 30));
    const baechleMax = Math.floor(weight * (1 + 0.033 * reps));
    const landerMax = Math.floor((100 * weight) / (101.3 - 2.67123 * reps));
    const oconnerMax = Math.floor(weight * (1 + reps / 40));
    const lombardiMax = Math.floor(weight * Math.pow(reps, 0.1));
    const mayhewMax = Math.floor(
      (100 * weight) / (52.2 + 41.9 * Math.exp(-0.055 * reps))
    );
    const wathenMax = Math.floor(
      (100 * weight) / (48.8 + 53.8 * Math.exp(-0.075 * reps))
    );
    const avgMax = Math.floor(
      (brzyckiMax +
        epleyMax +
        baechleMax +
        landerMax +
        oconnerMax +
        lombardiMax +
        mayhewMax +
        wathenMax) /
        8
    );

    //Set oneRapMax based on formula
    switch (formula) {
      case "brzycki":
        oneRepMax = brzyckiMax;
        break;
      case "epley":
        oneRepMax = epleyMax;
        break;
      case "baechle":
        oneRepMax = baechleMax;
        break;
      case "lander":
        oneRepMax = landerMax;
        break;
      case "oconner":
        oneRepMax = oconnerMax;
        break;
      case "lombardi":
        oneRepMax = lombardiMax;
        break;
      case "mayhew":
        oneRepMax = mayhewMax;
        break;
      case "wathen":
        oneRepMax = wathenMax;
        break;
      case "average":
        oneRepMax = avgMax;
        break;
    }

    return oneRepMax;
  }
}
