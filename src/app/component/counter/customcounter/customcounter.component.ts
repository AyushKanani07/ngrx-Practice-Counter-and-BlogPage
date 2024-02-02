import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Store } from '@ngrx/store';
import { customIncrement } from '../../../shared/store/Counter/counter.action';
import { counterModel } from '../../../shared/counter.interface';
import { Subscription } from 'rxjs';
import { getchannel } from '../../../shared/store/Counter/counter.selector';
import { AppStateModel } from '../../../shared/store/Global/AppState.model';

@Component({
  selector: 'app-customcounter',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './customcounter.component.html',
  styleUrl: './customcounter.component.css'
})
export class CustomcounterComponent implements OnInit, OnDestroy {

  counterInput!: number;
  actionType = 'add';
  channelname = '';
  countersubscribe!:Subscription;

  constructor(private store:Store<AppStateModel>) {}

  ngOnInit(): void {
    this.countersubscribe = this.store.select(getchannel).subscribe(data => {
      console.log(data)
      this.channelname = data;
      console.log('custom counter');
    });
  }

  OnIncrement(){
    this.store.dispatch(customIncrement({value: +this.counterInput, action: this.actionType}))
  };

  ngOnDestroy(): void {
    if(this.countersubscribe){
      this.countersubscribe.unsubscribe();
    }
  }


}
