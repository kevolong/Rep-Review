import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RepCalculatorComponent } from "./components/rep-calculator/rep-calculator.component";
import { BenchmarkCalculatorComponent } from "./components/benchmark-calculator/benchmark-calculator.component";
import { FaqComponent } from "./components/faq/faq.component";
import { ChartsComponent } from "./components/charts/charts.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

library.add(faQuestionCircle);

@NgModule({
  declarations: [
    AppComponent,
    RepCalculatorComponent,
    BenchmarkCalculatorComponent,
    FaqComponent,
    ChartsComponent,
    WelcomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
