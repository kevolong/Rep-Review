import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { By } from "@angular/platform-browser";

import { WelcomeComponent } from "./welcome.component";

describe("WelcomeComponent", () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  //Welcome links
  let oneLink: DebugElement;
  let benchLink: DebugElement;
  let chartsLink: DebugElement;
  let faqLink: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    oneLink = fixture.debugElement.query(By.css("#one-rep-welcome-link"));
    benchLink = fixture.debugElement.query(By.css("#benchmark-welcome-link"));
    chartsLink = fixture.debugElement.query(By.css("#charts-welcome-link"));
    faqLink = fixture.debugElement.query(By.css("#faq-welcome-link"));
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have navigation router links", () => {
    expect(oneLink.properties["href"]).toBe("/1rm");
    expect(benchLink.properties["href"]).toBe("/benchmark");
    expect(chartsLink.properties["href"]).toBe("/charts");
    expect(faqLink.properties["href"]).toBe("/faq");
  });
});
