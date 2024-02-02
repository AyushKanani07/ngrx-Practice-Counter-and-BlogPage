import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { counterModel } from '../../../shared/counter.interface';
import { Observable, Subscription } from 'rxjs';
import { SharedModule } from '../../../shared/shared.module';
import { getcounter } from '../../../shared/store/Counter/counter.selector';
import { AppStateModel } from '../../../shared/store/Global/AppState.model';

@Component({
  selector: 'app-counterdisplay',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css'
})
export class CounterdisplayComponent implements OnInit, OnDestroy {

  counterDisplay:number | undefined;
  countersubscribe!:Subscription;
  counter$ !:Observable<counterModel>

  constructor(private store:Store<AppStateModel>) {}

  ngOnInit(): void {
    this.countersubscribe = this.store.select(getcounter).subscribe(data => {
      console.log(data)
      this.counterDisplay = data;
      console.log('counter display')
    });

    // this.counter$ = this.store.select('counter')
  }

  ngOnDestroy(): void {
    if(this.countersubscribe){
      this.countersubscribe.unsubscribe();
    }
  }

}
