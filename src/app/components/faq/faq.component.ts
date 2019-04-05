import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import faqData from "../../data/faqData";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"]
})
export class FaqComponent implements OnInit {
  oneRepMaxFaq: object; // FAQ data array for One-Rep-Max
  benchmarkFaq: object; // FAQ data array for Benchmarks
  formulaFaq: object; // FAQ data array for Formulas
  currentTopic: string; // Current FAQ topic to display ("1rm", "benchmark")

  constructor(private route: ActivatedRoute) {}

  //Button click - change current topic
  changeTopic(topic) {
    this.currentTopic = topic;
  }

  ngOnInit() {
    this.oneRepMaxFaq = [...faqData["1RM"]];
    this.benchmarkFaq = [...faqData["Benchmarks"]];
    this.formulaFaq = [...faqData["Formulas"]];

    //Route query to set current topic
    this.route.queryParams.subscribe(params => {
      if (params.cat) {
        if (
          params.cat === "benchmark" ||
          params.cat === "formula" ||
          params.cat === "1rm"
        ) {
          this.currentTopic = params.cat;
        } else this.currentTopic = "1rm";
      } else this.currentTopic = "1rm";
    });
  }
}
