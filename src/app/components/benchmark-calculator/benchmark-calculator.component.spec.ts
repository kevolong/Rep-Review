import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { Observable, of } from "rxjs";

import { BenchmarkCalculatorComponent } from "./benchmark-calculator.component";
import { CalculateBenchmarkService } from "../../services/calculate-benchmark.service";

describe("BenchmarkCalculatorComponent", () => {
  let component: BenchmarkCalculatorComponent;
  let fixture: ComponentFixture<BenchmarkCalculatorComponent>;
  let benchService: CalculateBenchmarkService;

  //Form elements
  let oneRepMaxEl: DebugElement;
  let unitLbEl: DebugElement;
  let unitKgEl: DebugElement;
  let bodyweightEl: DebugElement;
  let liftEl: DebugElement;
  let genderMaleEl: DebugElement;
  let genderFemaleEl: DebugElement;
  let submitEl: DebugElement;

  //Result elements
  let benchmarkResultEl: DebugElement;
  let benchesEl: DebugElement;
  let categoryEl: DebugElement;
  let untrainedEl: DebugElement;
  let noviceEl: DebugElement;
  let intEl: DebugElement;
  let advancedEl: DebugElement;
  let eliteEl: DebugElement;

  //No query parameters in route
  describe("No Query Parameters", () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [BenchmarkCalculatorComponent],
        imports: [ReactiveFormsModule, RouterTestingModule],
        providers: [
          CalculateBenchmarkService,
          {
            provide: ActivatedRoute,
            useValue: {
              queryParams: of({ max: null, unit: null })
            }
          }
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(BenchmarkCalculatorComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      benchService = TestBed.get(CalculateBenchmarkService);
      fixture.detectChanges();

      oneRepMaxEl = fixture.debugElement.query(By.css("#oneRepMax"));
      unitLbEl = fixture.debugElement.query(By.css("#lb"));
      unitKgEl = fixture.debugElement.query(By.css("#kg"));
      bodyweightEl = fixture.debugElement.query(By.css("#bodyweight"));
      liftEl = fixture.debugElement.query(By.css("#lift-select"));
      genderMaleEl = fixture.debugElement.query(By.css("#male"));
      genderFemaleEl = fixture.debugElement.query(By.css("#female"));
      submitEl = fixture.debugElement.query(By.css("#benchmarkForm-submit"));
    }));

    it("should create", () => {
      expect(component).toBeTruthy();
    });

    it("should create form invalid needing bodyweight", () => {
      fixture.detectChanges();
      expect(oneRepMaxEl.nativeElement.value).toBeGreaterThan(0);
      expect(unitLbEl.nativeElement.checked).toBeTruthy();
      expect(unitKgEl.nativeElement.checked).toBeFalsy();
      expect(bodyweightEl.nativeElement.value).toBe("");
      expect(liftEl.nativeElement.value).toBe("squat");
      expect(genderMaleEl.nativeElement.checked).toBeTruthy();
      expect(genderFemaleEl.nativeElement.checked).toBeFalsy();
      expect(submitEl.nativeElement.disabled).toBeTruthy();
      expect(component.benchmarkForm.valid).toBeFalsy();
    });

    it("invalid 1rm input should disable submit button", () => {
      component.benchmarkForm.controls["bodyweight"].setValue("198");
      component.benchmarkForm.controls["oneRepMax"].setValue("");
      fixture.detectChanges();
      expect(submitEl.nativeElement.disabled).toBeTruthy();
      expect(component.benchmarkForm.valid).toBeFalsy();
    });

    it("invalid bodyweight input should disable submit button", () => {
      component.benchmarkForm.controls["bodyweight"].setValue("");
      component.benchmarkForm.controls["oneRepMax"].setValue("400");
      fixture.detectChanges();
      expect(submitEl.nativeElement.disabled).toBeTruthy();
      expect(component.benchmarkForm.valid).toBeFalsy();
    });

    it("invalid 1rm/bodyweight input should disable submit button", () => {
      component.benchmarkForm.controls["bodyweight"].setValue("");
      component.benchmarkForm.controls["oneRepMax"].setValue("");
      fixture.detectChanges();
      expect(submitEl.nativeElement.disabled).toBeTruthy();
      expect(component.benchmarkForm.valid).toBeFalsy();
    });

    it("unit change shouldn't invalidate form", () => {
      component.benchmarkForm.controls["unit"].setValue("kg");
      component.benchmarkForm.controls["bodyweight"].setValue("198");
      fixture.detectChanges();
      expect(submitEl.nativeElement.disabled).toBeFalsy();
      expect(component.benchmarkForm.valid).toBeTruthy();
    });

    it("lift change shouldn't invalidate form", () => {
      component.benchmarkForm.controls["lift"].setValue("deadlift");
      component.benchmarkForm.controls["bodyweight"].setValue("198");
      fixture.detectChanges();
      expect(submitEl.nativeElement.disabled).toBeFalsy();
      expect(component.benchmarkForm.valid).toBeTruthy();
    });

    it("gender change shouldn't invalidate form", () => {
      component.benchmarkForm.controls["gender"].setValue("female");
      component.benchmarkForm.controls["bodyweight"].setValue("198");
      fixture.detectChanges();
      expect(submitEl.nativeElement.disabled).toBeFalsy();
      expect(component.benchmarkForm.valid).toBeTruthy();
    });

    it("should get benchmark from services", () => {
      spyOn(benchService, "calculateBenchmark").and.returnValue({
        untrained: 200,
        novice: 240,
        intermediate: 280,
        advanced: 360,
        elite: 400
      });
      component.benchmarkForm.controls["oneRepMax"].setValue("350");
      component.benchmarkForm.controls["unit"].setValue("lb");
      component.benchmarkForm.controls["bodyweight"].setValue("201");
      component.benchmarkForm.controls["lift"].setValue("deadlift");

      fixture.detectChanges();
      component.onSubmit();
      fixture.detectChanges();

      benchmarkResultEl = fixture.debugElement.query(By.css("#benchmark-results"));
      benchesEl = fixture.debugElement.query(By.css("#benchmark-result"));
      categoryEl = fixture.debugElement.query(By.css("#category-desc"));
      untrainedEl = fixture.debugElement.query(By.css("#untrained-benchmark"));
      noviceEl = fixture.debugElement.query(By.css("#novice-benchmark"));
      intEl = fixture.debugElement.query(By.css("#intermediate-benchmark"));
      advancedEl = fixture.debugElement.query(By.css("#advanced-benchmark"));
      eliteEl = fixture.debugElement.query(By.css("#elite-benchmark"));

      expect(benchmarkResultEl).toBeTruthy();
      expect(benchesEl).toBeTruthy();
      expect(categoryEl).toBeTruthy();
      expect(untrainedEl.nativeElement.textContent).toBe("200 lb");
      expect(noviceEl.nativeElement.textContent).toBe("240 lb");
      expect(intEl.nativeElement.textContent).toBe("280 lb");
      expect(advancedEl.nativeElement.textContent).toBe("360 lb");
      expect(eliteEl.nativeElement.textContent).toBe("400 lb");
      expect(categoryEl.nativeElement.querySelector("h4").textContent).toBe("Performance Categories");
      expect(benchService.calculateBenchmark).toHaveBeenCalled();
    });

    it("should add subdued class to results after form change", () => {
      spyOn(benchService, "calculateBenchmark").and.returnValue({
        untrained: 200,
        novice: 240,
        intermediate: 280,
        advanced: 360,
        elite: 400
      });
      component.benchmarkForm.controls["oneRepMax"].setValue("350");
      component.benchmarkForm.controls["unit"].setValue("lb");
      component.benchmarkForm.controls["bodyweight"].setValue("201");
      component.benchmarkForm.controls["lift"].setValue("deadlift");

      fixture.detectChanges();
      component.onSubmit();
      fixture.detectChanges();

      component.benchmarkForm.controls["oneRepMax"].setValue("300");
      fixture.detectChanges();

      benchmarkResultEl = fixture.debugElement.query(By.css("#benchmark-results"));

      expect(benchmarkResultEl).toBeTruthy();
      expect(component.newInput).toBe(true);
      expect(benchesEl).toBeTruthy();
      expect(categoryEl).toBeTruthy();
      expect(benchService.calculateBenchmark).toHaveBeenCalled();
    });
  });

  //Query parameters in route
  describe("Query Parameters", () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [BenchmarkCalculatorComponent],
        imports: [ReactiveFormsModule, RouterTestingModule],
        providers: [
          CalculateBenchmarkService,
          {
            provide: ActivatedRoute,
            useValue: {
              queryParams: of({ max: "402", unit: "kg" })
            }
          }
        ]
      });
    }));

    it("should create", () => {
      TestBed.compileComponents();
      fixture = TestBed.createComponent(BenchmarkCalculatorComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      benchService = TestBed.get(CalculateBenchmarkService);
      fixture.detectChanges();

      expect(component).toBeTruthy();
    });

    it("should create form invalid needing bodyweight and set 1rm/unit from query", () => {
      TestBed.compileComponents();
      fixture = TestBed.createComponent(BenchmarkCalculatorComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      benchService = TestBed.get(CalculateBenchmarkService);
      fixture.detectChanges();

      oneRepMaxEl = fixture.debugElement.query(By.css("#oneRepMax"));
      unitLbEl = fixture.debugElement.query(By.css("#lb"));
      unitKgEl = fixture.debugElement.query(By.css("#kg"));
      bodyweightEl = fixture.debugElement.query(By.css("#bodyweight"));
      liftEl = fixture.debugElement.query(By.css("#lift-select"));
      genderMaleEl = fixture.debugElement.query(By.css("#male"));
      genderFemaleEl = fixture.debugElement.query(By.css("#female"));
      submitEl = fixture.debugElement.query(By.css("#benchmarkForm-submit"));

      expect(oneRepMaxEl.nativeElement.value).toBe("402");
      expect(unitLbEl.nativeElement.checked).toBeFalsy();
      expect(unitKgEl.nativeElement.checked).toBeTruthy();
      expect(bodyweightEl.nativeElement.value).toBe("");
      expect(liftEl.nativeElement.value).toBe("squat");
      expect(genderMaleEl.nativeElement.checked).toBeTruthy();
      expect(genderFemaleEl.nativeElement.checked).toBeFalsy();
      expect(submitEl.nativeElement.disabled).toBeTruthy();
      expect(component.benchmarkForm.valid).toBeFalsy();
    });

    it("should get benchmark from services", () => {
      TestBed.overrideProvider(ActivatedRoute, { useValue: { queryParams: of({ max: "387", unit: "kg" }) } });
      fixture = TestBed.createComponent(BenchmarkCalculatorComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      benchService = TestBed.get(CalculateBenchmarkService);
      fixture.detectChanges();

      spyOn(benchService, "calculateBenchmark").and.returnValue({
        untrained: 200,
        novice: 240,
        intermediate: 280,
        advanced: 360,
        elite: 400
      });
      component.benchmarkForm.controls["bodyweight"].setValue("201");
      component.benchmarkForm.controls["gender"].setValue("female");
      component.benchmarkForm.controls["lift"].setValue("deadlift");

      fixture.detectChanges();
      component.onSubmit();
      fixture.detectChanges();

      benchmarkResultEl = fixture.debugElement.query(By.css("#benchmark-results"));
      benchesEl = fixture.debugElement.query(By.css("#benchmark-result"));
      categoryEl = fixture.debugElement.query(By.css("#category-desc"));
      untrainedEl = fixture.debugElement.query(By.css("#untrained-benchmark"));
      noviceEl = fixture.debugElement.query(By.css("#novice-benchmark"));
      intEl = fixture.debugElement.query(By.css("#intermediate-benchmark"));
      advancedEl = fixture.debugElement.query(By.css("#advanced-benchmark"));
      eliteEl = fixture.debugElement.query(By.css("#elite-benchmark"));

      expect(benchmarkResultEl).toBeTruthy();
      expect(benchesEl).toBeTruthy();
      expect(categoryEl).toBeTruthy();
      expect(untrainedEl.nativeElement.textContent).toBe("200 kg");
      expect(noviceEl.nativeElement.textContent).toBe("240 kg");
      expect(intEl.nativeElement.textContent).toBe("280 kg");
      expect(advancedEl.nativeElement.textContent).toBe("360 kg");
      expect(eliteEl.nativeElement.textContent).toBe("400 kg");
      expect(categoryEl.nativeElement.querySelector("h4").textContent).toBe("Performance Categories");
      expect(benchService.calculateBenchmark).toHaveBeenCalled();
    });

    it("should add subdued class to results after form change", () => {
      TestBed.overrideProvider(ActivatedRoute, { useValue: { queryParams: of({ max: "187", unit: "kg" }) } });
      fixture = TestBed.createComponent(BenchmarkCalculatorComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      benchService = TestBed.get(CalculateBenchmarkService);
      fixture.detectChanges();

      spyOn(benchService, "calculateBenchmark").and.returnValue({
        untrained: 200,
        novice: 240,
        intermediate: 280,
        advanced: 360,
        elite: 400
      });
      component.benchmarkForm.controls["bodyweight"].setValue("201");
      component.benchmarkForm.controls["gender"].setValue("female");
      component.benchmarkForm.controls["lift"].setValue("deadlift");

      fixture.detectChanges();
      component.onSubmit();
      fixture.detectChanges();

      component.benchmarkForm.controls["oneRepMax"].setValue("300");
      fixture.detectChanges();

      benchmarkResultEl = fixture.debugElement.query(By.css("#benchmark-results"));

      expect(benchmarkResultEl).toBeTruthy();
      expect(component.newInput).toBe(true);
      expect(benchesEl).toBeTruthy();
      expect(categoryEl).toBeTruthy();
      expect(benchService.calculateBenchmark).toHaveBeenCalled();
    });
  });
});
