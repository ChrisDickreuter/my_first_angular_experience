import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Housinglocation } from "../housinglocation";

@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [],
  template: `
    <section class="lsiting">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
    </section>
  `,
  styleUrl: "./housing-location.component.scss",
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation;
}
