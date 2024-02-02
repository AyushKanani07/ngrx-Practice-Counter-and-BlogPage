import { Component } from '@angular/core';
import { Store} from '@ngrx/store';
import { changechannelname, decrement, increment, reset } from '../../../shared/store/Counter/counter.action';
import { counterModel } from '../../../shared/counter.interface';
import { SharedModule } from '../../../shared/shared.module';
import { AppStateModel } from '../../../shared/store/Global/AppState.model';

@Component({
  selector: 'app-counterbutton',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.css'
})
export class CounterbuttonComponent {

  // name!: string;

  constructor(private store:Store<AppStateModel>) {}

  OnIncrement(){
    this.store.dispatch(increment())
  }
  OnDecrement(){
    this.store.dispatch(decrement())
  }
  OnReset(){
    this.store.dispatch(reset())
  }
  OnRename(){
    this.store.dispatch(changechannelname({value: 'Coding is Fun'}))
  }

}
