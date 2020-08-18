import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutPageComponent } from "./about-page/about-page.component";
import { FactsPageComponent } from "./facts-page/facts-page.component";

const routes: Routes = [
  { path: "", redirectTo: "about", pathMatch: "full" },
  { path: "about", component: AboutPageComponent },
  { path: "facts", component: FactsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
