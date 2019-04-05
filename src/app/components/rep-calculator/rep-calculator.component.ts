import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CalculateOneRepMaxService } from "../../services/calculate-one-rep-max.service";
import { CalculateRepsService } from "../../services/calculate-reps.service";

@Component({
  selector: "app-rep-calculator",
  templateUrl: "./rep-calculator.component.html",
  styleUrls: ["./rep-calculator.component.scss"]
})
export class RepCalculatorComponent implements OnInit {
  minWeight: number = 1; // Minimum weight lifted number for form
  maxWeight: number = 1000; // Maximum weight lifted number for form
  minRep: number = 1; // Minimum reps lifted number for form
  maxRep: number = 30; // Maximum reps lifted number for form

  oneRepMax: number; //Estimated One Rep max
  repRanges: object; //Estimated weights for each rep range based on one-rep max

  showResult: boolean = false; //Show results
  newInput: boolean = true; // Un-submitted user input

  //Form with weight lifted, reps lifted, unit, and formula to use
  bestForm = new FormGroup({
    weightLifted: new FormControl(200, [
      Validators.required,
      Validators.min(this.minWeight),
      Validators.max(this.maxWeight)
    ]),
    unitLifted: new FormControl("lb"),
    repsLifted: new FormControl(5, [Validators.required, Validators.min(this.minRep), Validators.max(this.maxRep)]),
    formula: new FormControl("average")
  });

  constructor(
    private oneRepMaxService: CalculateOneRepMaxService,
    private repRangeService: CalculateRepsService,
    private router: Router
  ) {}

  /** Listen for form changes
   *  Modify input value if user enters invalid value
   *  Run calculation if valid input
   */
  formChange() {
    this.bestForm.valueChanges.subscribe(best => {
      //Weight Lifted less than min
      if (best.weightLifted) {
        if (best.weightLifted < this.minWeight) {
          this.bestForm.controls["weightLifted"].setValue("");
        }

        //Weight Lifted greater than max
        if (best.weightLifted > this.maxWeight) {
          this.bestForm.controls["weightLifted"].setValue(this.maxWeight);
        }
      }

      if (best.repsLifted) {
        //Reps Lifted less than 1
        if (best.repsLifted < this.minRep) {
          this.bestForm.controls["repsLifted"].setValue("");
        }
        //Weight Lifted greater than 30
        else if (best.repsLifted > this.maxRep) {
          this.bestForm.controls["repsLifted"].setValue(this.maxRep);
        }
      }

      this.newInput = true;
    });
  }

  onSubmit() {
    this.calcMax();
  }

  /** Calculate oneRepMax, repRanges and set
   */
  calcMax() {
    //Get form values for passing to service
    const bestWeight = this.bestForm.controls["weightLifted"].value;
    const bestReps = this.bestForm.controls["repsLifted"].value;
    const formula = this.bestForm.controls["formula"].value;

    //Calculate if not 1. Set
    if (bestReps === 1) {
      this.oneRepMax = bestWeight;
    } else {
      this.oneRepMax = this.oneRepMaxService.calculateOneRepMax(bestWeight, bestReps, formula);
    }

    //Rep chart calculation
    this.repRanges = this.repRangeService.calculateReps(this.oneRepMax);

    this.newInput = false;
    this.showResult = true;
  }

  // Navigate to benchmark calculator with one-rep max and unit query
  goCompare() {
    this.router.navigate(["/benchmark"], {
      queryParams: {
        max: this.oneRepMax,
        unit: this.bestForm.controls.unitLifted.value
      }
    });
  }

  ngOnInit() {
    //Set subscriber to form changes
    this.formChange();
    //Force form change to generate result display
    this.bestForm.controls["weightLifted"].setValue(200);
  }
}
