import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Store } from '@ngrx/store';
import { getspinnerstate } from '../../shared/store/Global/app.selector';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.css'
})
export class LoadingSpinnerComponent implements OnInit {

  isloaded = false;
  constructor(private store: Store) {

  }
  ngOnInit(): void {
    this.store.select(getspinnerstate).subscribe(res => {
      this.isloaded = res;
    });
  }

}
