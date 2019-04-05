import { Injectable } from "@angular/core";
import benchmarksMenData from "../data/benchmarksMenData";
import benchmarksWomenData from "../data/benchmarksWomenData";
import categoryData from "../data/categoryData";

@Injectable({
  providedIn: "root"
})

export class CalculateBenchmarkService {
  constructor() {}

  /**
   * Calculate benchmark comparison based on one-rep-max, unit, lift, gender, and experience cateogry
   * @param weight: number - weight lifted
   * @param unit: string - lb or kg
   * @param bodyweight: number - bodyweight
   * @param lift:  string - lift
   * @param gender:  string - male or female
   *
   * return benchmarkMaxes = {untrained: 0, novice: 0, intermediate: 0, advanced: 0, elite: 0}
   */

  calculateBenchmark(
    weight: number,
    unit: string,
    bodyweight: number,
    lift: string,
    gender: string
  ) {
    //Set benchmark Data
    const BODYWEIGHTS_REF =
      gender === "male"
        ? [...benchmarksMenData.bodyweights]
        : [...benchmarksWomenData.bodyweights];
    const MIN_BODYWEIGHT = BODYWEIGHTS_REF[0];
    const MAX_BODYWEIGHT = BODYWEIGHTS_REF[BODYWEIGHTS_REF.length - 1];
    const BENCHMARKS =
      gender === "male"
        ? { ...benchmarksMenData.lifts }
        : { ...benchmarksWomenData.lifts };
    const CATEGORIES = categoryData.map(category => category.category);

    //Set weight and bodyweight in pounds for calculation
    const ONE_REP_MAX = unit === "lb" ? weight : Math.floor(weight * 2.205);
    const BODYWEIGHT =
      unit === "lb" ? bodyweight : Math.floor(bodyweight * 2.205);

    //Benchmark 1RMs for each category to return
    let benchmarkMaxes = {
      untrained: 0,
      novice: 0,
      intermediate: 0,
      advanced: 0,
      elite: 0
    };

    //Less than or same as lowest bodyweight reference. Retrieve weights. No calculation necessary.
    if (BODYWEIGHT <= MIN_BODYWEIGHT) {
      CATEGORIES.forEach(category => {
        benchmarkMaxes[category] = getBenchmark(MIN_BODYWEIGHT, category);
      });
      return benchmarkMaxes;
    }
    //Greater than or equal highest bodyweight reference. Retrieve weights. No calculation necessary.
    else if (BODYWEIGHT >= MAX_BODYWEIGHT) {
      CATEGORIES.forEach(category => {
        benchmarkMaxes[category] = getBenchmark(MAX_BODYWEIGHT, category);
      });
      return benchmarkMaxes;
    }
    //Within Range
    else {
      //Find low/high bodyweight
      for (let i = 0; i < BODYWEIGHTS_REF.length; i++) {
        //Bodyweight same as benchmark bodyweight. Retrieve weight. No calculation necessary.
        if (BODYWEIGHT === BODYWEIGHTS_REF[i]) {
          CATEGORIES.forEach(category => {
            benchmarkMaxes[category] = getBenchmark(BODYWEIGHT, category);
          });
          return benchmarkMaxes;
        }
        //In between benchmark bodyweights. Run calculation.
        else if (
          BODYWEIGHT >= BODYWEIGHTS_REF[i] &&
          BODYWEIGHT < BODYWEIGHTS_REF[i + 1]
        ) {
          //Low and high reference bodweights and benchmark
          CATEGORIES.forEach(category => {
            const LOW_BW = BODYWEIGHTS_REF[i];
            const HIGH_BW = BODYWEIGHTS_REF[i + 1];
            const LOW_BM = BENCHMARKS[lift][LOW_BW][category];
            const HIGH_BM = BENCHMARKS[lift][HIGH_BW][category];
            benchmarkMaxes[category] = calcBenchmark(
              LOW_BW,
              HIGH_BW,
              LOW_BM,
              HIGH_BM
            );
          });

          return benchmarkMaxes;
        }
      }
    }

    //Get benchmark 1rm for a category if bodyweight same as a reference bodyweight
    function getBenchmark(bodyweight, category) {
      let benchmark = BENCHMARKS[lift][bodyweight][category];
      if (unit === "kg") {
        benchmark = Math.floor(benchmark / 2.205);
      }
      return benchmark;
    }

    //Calculate benchmark 1rm based on lower and higher bodyweight benchmarks
    function calcBenchmark(
      lowBodyweight,
      highBodyweight,
      lowBenchmark,
      highBenchmark
    ) {
      //Get ratio from fraction of bodyweight difference from benchmark bodyweights
      const BODYWEIGHT_REF_DIF = highBodyweight - lowBodyweight;
      const BODYWEIGHT_DIF = BODYWEIGHT_REF_DIF - (highBodyweight - BODYWEIGHT);
      const RATIO = BODYWEIGHT_DIF / BODYWEIGHT_REF_DIF;

      //Calculate benchmark 1rm from fraction of benchmark differences times ratio
      const BENCHMARK_REF_DIF = highBenchmark - lowBenchmark;
      let benchmark = BENCHMARK_REF_DIF * RATIO + lowBenchmark;
      if (unit === "kg") {
        benchmark = benchmark / 2.205;
      }
      return Math.floor(benchmark);
    }
  }
}
