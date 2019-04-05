import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CalculateBenchmarkService } from "../../services/calculate-benchmark.service";
import categoryData from "../../data/categoryData";

@Component({
  selector: "app-benchmark-calculator",
  templateUrl: "./benchmark-calculator.component.html",
  styleUrls: ["./benchmark-calculator.component.scss"]
})
export class BenchmarkCalculatorComponent implements OnInit {
  minWeight: number = 1; // Minimum one-rep-max number for form
  maxWeight: number = 1000; // Maximum one-rep-max number for form
  minBodyweight: number = 1; // Minimum one-rep-max number for form
  maxBodyweight: number = 500; // Maximum one-rep-max number for form

  benchmarks: object; // Benchmark 1RM to display
  categories: object;

  showResult: boolean = false; //Show results
  newInput: boolean = true; // Un-submitted user input

  //Form with one-rep max, unit, lift, gender, and experience category
  benchmarkForm = new FormGroup({
    oneRepMax: new FormControl(200, [
      Validators.required,
      Validators.min(this.minWeight),
      Validators.max(this.maxWeight)
    ]),
    unit: new FormControl("lb"),
    bodyweight: new FormControl("", [
      Validators.required,
      Validators.min(this.minBodyweight),
      Validators.max(this.maxBodyweight)
    ]),
    lift: new FormControl("squat"),
    gender: new FormControl("male")
  });

  constructor(private benchmarkService: CalculateBenchmarkService, private route: ActivatedRoute) {}

  /** Listen for form changes
   *  Modify input value if user enters invalid value
   *  Run calculation if valid input
   */
  formChange() {
    this.benchmarkForm.valueChanges.subscribe(benchmark => {
      //Weight Lifted less than min
      if (benchmark.oneRepMax) {
        if (benchmark.oneRepMax < this.minWeight) {
          this.benchmarkForm.controls["oneRepMax"].setValue("");
        }

        //Weight Lifted greater than max
        if (benchmark.oneRepMax > this.maxWeight) {
          this.benchmarkForm.controls["oneRepMax"].setValue(this.maxWeight);
        }
      }

      //Bodyweight less than min
      if (benchmark.bodyweight) {
        if (benchmark.bodyweight < this.minBodyweight) {
          this.benchmarkForm.controls["bodyweight"].setValue("");
        }

        //Bodyweight greater than max
        if (benchmark.bodyweight > this.maxBodyweight) {
          this.benchmarkForm.controls["bodyweight"].setValue(this.maxBodyweight);
        }
      }

      this.newInput = true;
    });
  }

  onSubmit() {
    this.calcBenchmark();
  }

  //Calculate benchmarks and set
  calcBenchmark() {
    //Get form values for passing to service
    const oneRepMax = this.benchmarkForm.controls["oneRepMax"].value;
    const unit = this.benchmarkForm.controls["unit"].value;
    const bodyweight = this.benchmarkForm.controls["bodyweight"].value;
    const lift = this.benchmarkForm.controls["lift"].value;
    const gender = this.benchmarkForm.controls["gender"].value;

    //Calculate
    this.benchmarks = this.benchmarkService.calculateBenchmark(oneRepMax, unit, bodyweight, lift, gender);

    //Show result
    this.newInput = false;
    this.showResult = true;
  }

  ngOnInit() {
    //Set subscriber to form changes
    this.formChange();

    this.categories = [...categoryData];

    this.route.queryParams.subscribe(params => {
      if (params.max) {
        this.benchmarkForm.controls["oneRepMax"].setValue(params.max);
      } else this.benchmarkForm.controls["oneRepMax"].setValue(200);

      if (params.unit) {
        this.benchmarkForm.controls["unit"].setValue(params.unit);
      }
    });
  }
}
