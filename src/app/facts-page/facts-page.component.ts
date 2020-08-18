import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-facts-page",
  templateUrl: "./facts-page.component.html",
  styleUrls: ["./facts-page.component.css"],
})
export class FactsPageComponent implements OnInit {
  facts = [];
  constructor() {}

  ngOnInit() {
    this.facts = [
      "Dr Pepper was invented in Texas in 1885.",
      "The first frozen margarita machine was invented in Dallas.",
      "Bugs Bunny’s catchphrase “What’s Up, Doc?” originated in Dallas.",
      "The Six Flags Over Texas theme park is named for the six countries that have ruled over Texas.",
      "Texas uses its own power grid, separate from the rest of the United States.",
      "The Texas flag’s designer is unknown.",
      "The colors used on the Texas flag are the exact same as those used on the United States flag.",
      "The deadliest natural disaster in United States history occurred in Texas.",
      "The largest known bat colony in North America is located in Texas.",
      "The fastest road in the United States is located in Austin.",
      "The Texas State Capitol building is the largest state capitol in the nation.",
      "Texas is larger than any country in Europe.",
      "King Ranch, located in Kingsville, is larger than the state of Rhode Island.",
      "Texas has three of the top 10 most populous cities in the U.S.",
      "Amarillo is considered the “Helium Capital of the World.”",
      "A time capsule in Texas contains a passbook to a bank account expected to be worth $1 quadrillion by the time it opens in 2968.",
      "Everyone in the town of DISH, Texas, received free basic television and DVRs for ten years from DISH Network in exchange for renaming their town to DISH from Clark.",
    ];
  }
}
