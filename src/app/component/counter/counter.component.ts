import { Component } from '@angular/core';
import { CounterbuttonComponent } from "./counterbutton/counterbutton.component";
import { CounterdisplayComponent } from "./counterdisplay/counterdisplay.component";
import { CustomcounterComponent } from "./customcounter/customcounter.component";

@Component({
    selector: 'app-counter',
    standalone: true,
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css',
    imports: [CounterbuttonComponent, CounterdisplayComponent, CustomcounterComponent]
})
export class CounterComponent {

}
