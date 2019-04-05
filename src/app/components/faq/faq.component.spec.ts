import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { Observable, of } from "rxjs";

import { FaqComponent } from "./faq.component";

describe("FaqComponent", () => {
  let component: FaqComponent;
  let fixture: ComponentFixture<FaqComponent>;

  //menu buttons
  let oneRepButtonEl: DebugElement;
  let benchmarkButtonEl: DebugElement;
  let formulaButtonEl: DebugElement;

  //faq display sections
  let oneRepSectionEl: DebugElement;
  let benchmarkSectionEl: DebugElement;
  let formulaSectionEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FaqComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ cat: "1rm" })
          }
        }
      ]
    });
  }));

  it("should create", () => {
    TestBed.compileComponents();
    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it("clicking menu buttons should change faq topic", () => {
    TestBed.compileComponents();
    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();

    oneRepButtonEl = fixture.debugElement.query(By.css("#faq-select-1rm"));
    benchmarkButtonEl = fixture.debugElement.query(By.css("#faq-select-benchmark"));
    formulaButtonEl = fixture.debugElement.query(By.css("#faq-select-formulas"));

    //Benchmark Button
    benchmarkButtonEl.triggerEventHandler("click", null);
    fixture.detectChanges();
    benchmarkSectionEl = fixture.debugElement.query(By.css("#faq-benchmark"));
    expect(benchmarkSectionEl).toBeTruthy();
    expect(benchmarkSectionEl.nativeElement.querySelector("h2").textContent).toBe("Benchmarks");

    //1RM Button
    oneRepButtonEl.triggerEventHandler("click", null);
    fixture.detectChanges();
    oneRepSectionEl = fixture.debugElement.query(By.css("#faq-1rm"));
    expect(oneRepSectionEl).toBeTruthy();
    expect(oneRepSectionEl.nativeElement.querySelector("h2").textContent).toBe("One-Rep Max");

    //Formula Button
    formulaButtonEl.triggerEventHandler("click", null);
    fixture.detectChanges();
    formulaSectionEl = fixture.debugElement.query(By.css("#faq-formula"));
    expect(formulaSectionEl).toBeTruthy();
    expect(formulaSectionEl.nativeElement.querySelector("h2").textContent).toBe("Formulas");
  });

  it("should route to benchmark if query parameter set", async(() => {
    TestBed.overrideProvider(ActivatedRoute, { useValue: { queryParams: of({ cat: "benchmark" }) } });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();

    benchmarkSectionEl = fixture.debugElement.query(By.css("#faq-benchmark"));
    expect(benchmarkSectionEl).toBeTruthy();
    expect(benchmarkSectionEl.nativeElement.querySelector("h2").textContent).toBe("Benchmarks");
  }));

  it("should route to formula if query parameter set", async(() => {
    TestBed.overrideProvider(ActivatedRoute, { useValue: { queryParams: of({ cat: "formula" }) } });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();

    formulaSectionEl = fixture.debugElement.query(By.css("#faq-formula"));
    expect(formulaSectionEl).toBeTruthy();
    expect(formulaSectionEl.nativeElement.querySelector("h2").textContent).toBe("Formulas");
  }));

  it("should route to 1rm if query parameter set", async(() => {
    TestBed.overrideProvider(ActivatedRoute, { useValue: { queryParams: of({ cat: "1rm" }) } });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();

    oneRepSectionEl = fixture.debugElement.query(By.css("#faq-1rm"));
    expect(oneRepSectionEl).toBeTruthy();
    expect(oneRepSectionEl.nativeElement.querySelector("h2").textContent).toBe("One-Rep Max");
  }));
});
