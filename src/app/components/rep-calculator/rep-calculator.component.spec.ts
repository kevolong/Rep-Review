import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { ReactiveFormsModule } from "@angular/forms";

import { RepCalculatorComponent } from "./rep-calculator.component";
import { CalculateOneRepMaxService } from "../../services/calculate-one-rep-max.service";
import { CalculateRepsService } from "../../services/calculate-reps.service";

describe("RepCalculatorComponent", () => {
  let component: RepCalculatorComponent;
  let fixture: ComponentFixture<RepCalculatorComponent>;
  let maxService: CalculateOneRepMaxService;
  let repsService: CalculateRepsService;

  //Form elements
  let weightLiftedEl: DebugElement;
  let unitLbEl: DebugElement;
  let unitKgEl: DebugElement;
  let repsLiftedEl: DebugElement;
  let formulaEl: DebugElement;
  let submitEl: DebugElement;

  //Result elements
  let maxResultEl: DebugElement;
  let oneRepResultEl: DebugElement;
  let rangeResultEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepCalculatorComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [CalculateOneRepMaxService, CalculateRepsService]
    }).compileComponents();

    fixture = TestBed.createComponent(RepCalculatorComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    maxService = TestBed.get(CalculateOneRepMaxService);
    repsService = TestBed.get(CalculateRepsService);
    fixture.detectChanges();

    weightLiftedEl = fixture.debugElement.query(By.css("#weightLifted"));
    unitLbEl = fixture.debugElement.query(By.css("#lb"));
    unitKgEl = fixture.debugElement.query(By.css("#kg"));
    repsLiftedEl = fixture.debugElement.query(By.css("#repsLifted"));
    formulaEl = fixture.debugElement.query(By.css("#formula-select"));
    submitEl = fixture.debugElement.query(By.css("#bestForm-submit"));
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should create form valid and ready", () => {
    fixture.detectChanges();
    expect(weightLiftedEl.nativeElement.value).toBe("200");
    expect(unitLbEl.nativeElement.checked).toBeTruthy();
    expect(unitKgEl.nativeElement.checked).toBeFalsy();
    expect(repsLiftedEl.nativeElement.value).toBe("5");
    expect(formulaEl.nativeElement.value).toBe("average");
    expect(submitEl.nativeElement.disabled).toBeFalsy();
  });

  it("invalid weight input should disable submit button", () => {
    component.bestForm.controls["weightLifted"].setValue("");
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
    expect(component.bestForm.valid).toBeFalsy();
  });

  it("invalid reps input should disable submit button", () => {
    component.bestForm.controls["repsLifted"].setValue("");
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
    expect(component.bestForm.valid).toBeFalsy();
  });

  it("invalid weight/reps input should disable submit button", () => {
    component.bestForm.controls["weightLifted"].setValue("");
    component.bestForm.controls["repsLifted"].setValue("");
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
    expect(component.bestForm.valid).toBeFalsy();
  });

  it("unit change shouldn't invalidate form", () => {
    component.bestForm.controls["unitLifted"].setValue("kg");
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeFalsy();
    expect(component.bestForm.valid).toBeTruthy();
  });

  it("formula change shouldn't invalidate form", () => {
    component.bestForm.controls["formula"].setValue("epley");
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeFalsy();
    expect(component.bestForm.valid).toBeTruthy();
  });

  it("should get one-rep max and rep ranges from services", () => {
    spyOn(maxService, "calculateOneRepMax").and.returnValue(340);
    spyOn(repsService, "calculateReps").and.returnValue([
      {
        rep: 2,
        weightLow: 330,
        weightHigh: 338,
        percentLow: 93,
        percentHigh: 97
      }
    ]);
    component.bestForm.controls["weightLifted"].setValue("304");
    component.bestForm.controls["repsLifted"].setValue("6");
    component.bestForm.controls["formula"].setValue("brzycki");

    fixture.detectChanges();
    component.onSubmit();
    fixture.detectChanges();

    maxResultEl = fixture.debugElement.query(By.css("#one-rep-max-results"));
    oneRepResultEl = fixture.debugElement.query(By.css("#one-rep-result"));
    rangeResultEl = fixture.debugElement.query(By.css("#rep-range-result"));
    expect(maxResultEl).toBeTruthy();
    expect(oneRepResultEl).toBeTruthy();
    expect(rangeResultEl).toBeTruthy();
    expect(oneRepResultEl.nativeElement.querySelector("h3").textContent).toBe("Estimated One-Rep Max");
    expect(rangeResultEl.nativeElement.querySelector("h3").textContent).toBe("Estimated Weights for Rep Ranges");
    expect(maxService.calculateOneRepMax).toHaveBeenCalled();
    expect(repsService.calculateReps).toHaveBeenCalled();
  });

  it("should add subdued class to results after form change", () => {
    spyOn(maxService, "calculateOneRepMax").and.returnValue(340);
    spyOn(repsService, "calculateReps").and.returnValue([
      {
        rep: 2,
        weightLow: 330,
        weightHigh: 338,
        percentLow: 93,
        percentHigh: 97
      }
    ]);
    component.bestForm.controls["weightLifted"].setValue("304");
    component.bestForm.controls["repsLifted"].setValue("6");
    component.bestForm.controls["formula"].setValue("brzycki");

    fixture.detectChanges();
    component.onSubmit();
    fixture.detectChanges();

    component.bestForm.controls["weightLifted"].setValue("200");
    fixture.detectChanges();

    maxResultEl = fixture.debugElement.query(By.css("#one-rep-max-results"));
    oneRepResultEl = fixture.debugElement.query(By.css("#one-rep-result"));
    rangeResultEl = fixture.debugElement.query(By.css("#rep-range-result"));
    expect(maxResultEl).toBeTruthy();
    expect(oneRepResultEl).toBeTruthy();
    expect(rangeResultEl).toBeTruthy();
    expect(component.newInput).toBe(true);
    expect(maxService.calculateOneRepMax).toHaveBeenCalled();
    expect(repsService.calculateReps).toHaveBeenCalled();
  });
});
