import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RepCalculatorComponent } from "./components/rep-calculator/rep-calculator.component";
import { BenchmarkCalculatorComponent } from "./components/benchmark-calculator/benchmark-calculator.component";
import { FaqComponent } from "./components/faq/faq.component";
import { ChartsComponent } from "./components/charts/charts.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "1rm", component: RepCalculatorComponent },
  { path: "benchmark", component: BenchmarkCalculatorComponent },
  { path: "faq", component: FaqComponent },
  { path: "charts", component: ChartsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: "enabled" })],

  exports: [RouterModule]
})
export class AppRoutingModule {}
