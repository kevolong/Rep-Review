import { Injectable } from "@angular/core";
import repChartData from "../data/repData";

@Injectable({
  providedIn: "root"
})
export class CalculateRepsService {
  constructor() {}
  /**
   * Calculate weights for rep ranges based on % of one-rep max
   * @param oneRepMax: number - one rep max
   *
   * return repChart: array - object of rep number, low and high weight estimates, low and high percentages
   * {  rep: number,
   *    weightLow: number
   *    weightHigh: number,
   *    percentLow: number,
   *    percentHigh: number
   * }
   */
  calculateReps(oneRepMax: number) {
    let repChart = [];

    //Array of rep keys sorted to maintain numerical order
    let repKeys = [];
    for (var rep in repChartData) {
      repKeys.push(Number(rep));
    }
    repKeys.sort((a, b) => a - b);

    //Push rep data to repChart for each rep
    for (let i = 0; i < repKeys.length; i++) {
      let rep = repKeys[i];
      repChart.push({
        rep: rep,
        weightLow: Math.floor(oneRepMax * (repChartData[rep].low / 100)),
        weightHigh: Math.floor(oneRepMax * (repChartData[rep].high / 100)),
        percentLow: repChartData[rep].low,
        percentHigh: repChartData[rep].high
      });
    }

    return repChart;
  }
}
