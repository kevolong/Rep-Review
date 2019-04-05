import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { ReactiveFormsModule } from "@angular/forms";

import { ChartsComponent } from "./charts.component";

describe("ChartsComponent", () => {
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;

  // Form Elements
  let genderMaleEl: DebugElement;
  let genderFemaleEl: DebugElement;
  let liftEl: DebugElement;

  //Display Elements
  let chartEl: DebugElement;
  let chartCiteEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsComponent],
      imports: [ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
    liftEl = fixture.debugElement.query(By.css("#lift-select"));
    genderMaleEl = fixture.debugElement.query(By.css("#male"));
    genderFemaleEl = fixture.debugElement.query(By.css("#female"));
    chartEl = fixture.debugElement.query(By.css("#chart-display"));
    chartCiteEl = fixture.debugElement.query(By.css("#chart-data-cite"));
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
    expect(genderMaleEl.nativeElement.checked).toBeTruthy();
    expect(genderFemaleEl.nativeElement.checked).toBeFalsy();
    expect(liftEl.nativeElement.value).toBe("all");
    expect(chartEl).toBeTruthy();
    expect(chartCiteEl).toBeTruthy();
  });

  it("gender change switches gender chart", () => {
    let oldChart = [...component.charts];
    component.chartsForm.controls["gender"].setValue("female");
    fixture.detectChanges();
    let newChart = [...component.charts];
    expect(genderMaleEl.nativeElement.checked).toBeFalsy();
    expect(genderFemaleEl.nativeElement.checked).toBeTruthy();
    expect(oldChart === newChart).toBeFalsy();
    expect(chartEl).toBeTruthy();
    expect(chartCiteEl).toBeTruthy();
  });

  it("lift change switches lift chart", () => {
    //Switch to Press
    let oldChart = [...component.charts];
    component.chartsForm.controls["lift"].setValue("press");
    fixture.detectChanges();
    let newChart = [...component.charts];
    expect(liftEl.nativeElement.value).toBe("press");
    expect(oldChart === newChart).toBeFalsy();
    expect(newChart[0]["lift"]).toBe("Overhead Press");
    expect(chartEl).toBeTruthy();
    expect(chartCiteEl).toBeTruthy();

    //Switch to Bench
    oldChart = [...component.charts];
    component.chartsForm.controls["lift"].setValue("bench");
    fixture.detectChanges();
    newChart = [...component.charts];
    expect(liftEl.nativeElement.value).toBe("bench");
    expect(oldChart === newChart).toBeFalsy();
    expect(newChart[0]["lift"]).toBe("Bench Press");
    expect(chartEl).toBeTruthy();
    expect(chartCiteEl).toBeTruthy();

    //Switch to Clean
    oldChart = [...component.charts];
    component.chartsForm.controls["lift"].setValue("clean");
    fixture.detectChanges();
    newChart = [...component.charts];
    expect(liftEl.nativeElement.value).toBe("clean");
    expect(oldChart === newChart).toBeFalsy();
    expect(newChart[0]["lift"]).toBe("Power Clean");
    expect(chartEl).toBeTruthy();
    expect(chartCiteEl).toBeTruthy();

    //Switch to Deadlift
    oldChart = [...component.charts];
    component.chartsForm.controls["lift"].setValue("deadlift");
    fixture.detectChanges();
    newChart = [...component.charts];
    expect(liftEl.nativeElement.value).toBe("deadlift");
    expect(oldChart === newChart).toBeFalsy();
    expect(newChart[0]["lift"]).toBe("Deadlift");
    expect(chartEl).toBeTruthy();
    expect(chartCiteEl).toBeTruthy();

    //Switch to Squat
    oldChart = [...component.charts];
    component.chartsForm.controls["lift"].setValue("squat");
    fixture.detectChanges();
    newChart = [...component.charts];
    expect(liftEl.nativeElement.value).toBe("squat");
    expect(oldChart === newChart).toBeFalsy();
    expect(newChart[0]["lift"]).toBe("Squat");
    expect(chartEl).toBeTruthy();
    expect(chartCiteEl).toBeTruthy();

    //Switch to All
    oldChart = [...component.charts];
    component.chartsForm.controls["lift"].setValue("all");
    fixture.detectChanges();
    newChart = [...component.charts];
    expect(liftEl.nativeElement.value).toBe("all");
    expect(oldChart === newChart).toBeFalsy();
    expect(newChart[0]["lift"]).toBe("Squat");
    expect(newChart[1]["lift"]).toBe("Deadlift");
    expect(newChart[2]["lift"]).toBe("Bench Press");
    expect(newChart[3]["lift"]).toBe("Overhead Press");
    expect(newChart[4]["lift"]).toBe("Power Clean");
    expect(chartEl).toBeTruthy();
    expect(chartCiteEl).toBeTruthy();
  });
});
