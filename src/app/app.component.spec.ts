import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { Location } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { By } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { ChartsComponent } from "./components/charts/charts.component";
import { BenchmarkCalculatorComponent } from "./components/benchmark-calculator/benchmark-calculator.component";
import { FaqComponent } from "./components/faq/faq.component";
import { RepCalculatorComponent } from "./components/rep-calculator/rep-calculator.component";

describe("AppComponent", () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let location: Location;
  let router: Router;

  //Sub-component Elements
  let welcome: DebugElement;
  let repCalc: DebugElement;
  let benchCalc: DebugElement;
  let charts: DebugElement;
  let faq: DebugElement;

  //Nav-link Elements
  let oneLink: DebugElement;
  let benchLink: DebugElement;
  let chartsLink: DebugElement;
  let faqLink: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          { path: "", component: WelcomeComponent },
          { path: "1rm", component: RepCalculatorComponent },
          { path: "benchmark", component: BenchmarkCalculatorComponent },
          { path: "faq", component: FaqComponent },
          { path: "charts", component: ChartsComponent }
        ])
      ],

      declarations: [
        AppComponent,
        BenchmarkCalculatorComponent,
        ChartsComponent,
        WelcomeComponent,
        FaqComponent,
        RepCalculatorComponent
      ]
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    router.initialNavigation();
    fixture.detectChanges();
  }));

  it("should create the app", () => {
    expect(app).toBeTruthy();
  });

  it('navigate to "" renders Welcome component', async(() => {
    router.navigate([""]);
    fixture.whenStable().then(() => {
      welcome = fixture.debugElement.query(By.css("#welcome-menu"));
      repCalc = fixture.debugElement.query(By.css("#bestForm"));
      benchCalc = fixture.debugElement.query(By.css("#benchmark-calculator"));
      charts = fixture.debugElement.query(By.css("#charts-menu"));
      faq = fixture.debugElement.query(By.css("#faq-menu"));

      expect(location.path()).toBe("/");
      expect(welcome).toBeTruthy();
      expect(repCalc).toBeFalsy();
      expect(benchCalc).toBeFalsy();
      expect(charts).toBeFalsy();
      expect(faq).toBeFalsy();
    });
  }));

  it('navigate to "/1rm" renders rep-calculator component', async(() => {
    router.navigate(["1rm"]);
    fixture.whenStable().then(() => {
      welcome = fixture.debugElement.query(By.css("#welcome-menu"));
      repCalc = fixture.debugElement.query(By.css("#bestForm"));
      benchCalc = fixture.debugElement.query(By.css("#benchmark-calculator"));
      charts = fixture.debugElement.query(By.css("#charts-menu"));
      faq = fixture.debugElement.query(By.css("#faq-menu"));

      expect(location.path()).toBe("/1rm");
      expect(welcome).toBeFalsy();
      expect(repCalc).toBeTruthy();
      expect(benchCalc).toBeFalsy();
      expect(charts).toBeFalsy();
      expect(faq).toBeFalsy();
    });
  }));

  it('navigate to "/benchmark" renders benchmark-calculator component', async(() => {
    router.navigate(["benchmark"]);
    fixture.whenStable().then(() => {
      welcome = fixture.debugElement.query(By.css("#welcome-menu"));
      repCalc = fixture.debugElement.query(By.css("#bestForm"));
      benchCalc = fixture.debugElement.query(By.css("#benchmark-calculator"));
      charts = fixture.debugElement.query(By.css("#charts-menu"));
      faq = fixture.debugElement.query(By.css("#faq-menu"));

      expect(location.path()).toBe("/benchmark");
      expect(welcome).toBeFalsy();
      expect(repCalc).toBeFalsy();
      expect(benchCalc).toBeTruthy();
      expect(charts).toBeFalsy();
      expect(faq).toBeFalsy();
    });
  }));

  it('navigate to "/charts" renders charts component', async(() => {
    router.navigate(["charts"]);
    fixture.whenStable().then(() => {
      welcome = fixture.debugElement.query(By.css("#welcome-menu"));
      repCalc = fixture.debugElement.query(By.css("#bestForm"));
      benchCalc = fixture.debugElement.query(By.css("#benchmark-calculator"));
      charts = fixture.debugElement.query(By.css("#charts-menu"));
      faq = fixture.debugElement.query(By.css("#faq-menu"));

      expect(location.path()).toBe("/charts");
      expect(welcome).toBeFalsy();
      expect(repCalc).toBeFalsy();
      expect(benchCalc).toBeFalsy();
      expect(charts).toBeTruthy();
      expect(faq).toBeFalsy();
    });
  }));

  it('navigate to "/faq" renders charts component', async(() => {
    router.navigate(["faq"]);
    fixture.whenStable().then(() => {
      welcome = fixture.debugElement.query(By.css("#welcome-menu"));
      repCalc = fixture.debugElement.query(By.css("#bestForm"));
      benchCalc = fixture.debugElement.query(By.css("#benchmark-calculator"));
      charts = fixture.debugElement.query(By.css("#charts-menu"));
      faq = fixture.debugElement.query(By.css("#faq-menu"));

      expect(location.path()).toBe("/faq");
      expect(welcome).toBeFalsy();
      expect(repCalc).toBeFalsy();
      expect(benchCalc).toBeFalsy();
      expect(charts).toBeFalsy();
      expect(faq).toBeTruthy();
    });
  }));

  it("should have navigation router links", () => {
    oneLink = fixture.debugElement.query(By.css("#one-rep-link"));
    benchLink = fixture.debugElement.query(By.css("#benchmark-link"));
    chartsLink = fixture.debugElement.query(By.css("#charts-link"));
    faqLink = fixture.debugElement.query(By.css("#faq-link"));

    expect(oneLink.properties["href"]).toBe("/1rm");
    expect(benchLink.properties["href"]).toBe("/benchmark");
    expect(chartsLink.properties["href"]).toBe("/charts");
    expect(faqLink.properties["href"]).toBe("/faq");
  });
});
