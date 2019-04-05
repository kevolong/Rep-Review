import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import benchmarksMenData from "../../data/benchmarksMenData";
import benchmarksWomenData from "../../data/benchmarksWomenData";

@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.scss"]
})
export class ChartsComponent implements OnInit {
  benchmarksMen: object; //Men benchmark data in lb
  benchmarksWomen: object; // Women benchmark data in lb
  charts: Array<object> = []; // Charts array for display

  chartsForm = new FormGroup({
    lift: new FormControl("all"),
    unit: new FormControl("lb"),
    gender: new FormControl("male")
  });

  constructor() {}

  /** Listen for form changes
   *  Update charts array for display
   */
  formChange() {
    this.chartsForm.valueChanges.subscribe(charts => {
      //Set gender dataset to use
      const BENCHMARKS = charts.gender === "male" ? { ...benchmarksMenData.lifts } : { ...benchmarksWomenData.lifts };
      const BODYWEIGHTS_REF =
        charts.gender === "male" ? [...benchmarksMenData.bodyweights] : [...benchmarksWomenData.bodyweights];
      const LIFTS = ["squat", "deadlift", "bench", "press", "clean"];
      const LIFTS_DISPLAY_NAMES = {
        squat: "Squat",
        deadlift: "Deadlift",
        bench: "Bench Press",
        press: "Overhead Press",
        clean: "Power Clean"
      };
      const UNIT = charts.unit;

      this.charts = [];

      //all lifts
      if (charts.lift === "all") {
        //Push chart object for each lift
        LIFTS.forEach(lift => {
          let liftChart = []; //Chart for each lift

          //Data for each bodyweight
          BODYWEIGHTS_REF.forEach(bodyweight => {
            liftChart.push({
              bodyweight: this.convertValue(bodyweight, UNIT),
              untrained: this.convertValue(BENCHMARKS[lift][bodyweight].untrained, UNIT),
              novice: this.convertValue(BENCHMARKS[lift][bodyweight].novice, UNIT),
              intermediate: this.convertValue(BENCHMARKS[lift][bodyweight].intermediate, UNIT),
              advanced: this.convertValue(BENCHMARKS[lift][bodyweight].advanced, UNIT),
              elite: this.convertValue(BENCHMARKS[lift][bodyweight].elite, UNIT)
            });
          });

          //Push for display
          this.charts.push({
            lift: LIFTS_DISPLAY_NAMES[lift],
            chart: liftChart
          });
        });
      }

      //One lift
      else {
        let liftChart = []; // Chart for whole lift
        let lift = charts.lift;

        //Data for each bodyweight
        BODYWEIGHTS_REF.forEach(bodyweight => {
          liftChart.push({
            bodyweight: this.convertValue(bodyweight, UNIT),
            untrained: this.convertValue(BENCHMARKS[lift][bodyweight].untrained, UNIT),
            novice: this.convertValue(BENCHMARKS[lift][bodyweight].novice, UNIT),
            intermediate: this.convertValue(BENCHMARKS[lift][bodyweight].intermediate, UNIT),
            advanced: this.convertValue(BENCHMARKS[lift][bodyweight].advanced, UNIT),
            elite: this.convertValue(BENCHMARKS[lift][bodyweight].elite, UNIT)
          });
        });

        //Push for display
        this.charts.push({
          lift: LIFTS_DISPLAY_NAMES[lift],
          chart: liftChart
        });
      }
    });
  }

  //Convert to kg if necessary
  convertValue(number, unit) {
    if (unit === "lb") {
      return number;
    }
    //kg
    else {
      return Math.floor(number / 2.205);
    }
  }

  ngOnInit() {
    this.benchmarksMen = { ...benchmarksMenData.lifts };
    this.benchmarksWomen = { ...benchmarksWomenData.lifts };

    //Set subscriber to form changes
    this.formChange();
    this.chartsForm.controls["gender"].setValue("male");
  }
}
