import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterbuttonComponent } from "./component/counter/counterbutton/counterbutton.component";
import { CounterdisplayComponent } from "./component/counter/counterdisplay/counterdisplay.component";
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/Counter/counter.reducer';
import { CustomcounterComponent } from "./component/counter/customcounter/customcounter.component";
import { MenuheaderComponent } from "./component/menuheader/menuheader.component";
import { LoadingSpinnerComponent } from "./component/loading-spinner/loading-spinner.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CounterbuttonComponent, CounterdisplayComponent, CustomcounterComponent, MenuheaderComponent, LoadingSpinnerComponent]
})
export class AppComponent {
  title = 'NgrxTutorial';
}
