import { Component, Inject, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { BlogModel } from '../../../shared/blog.interface';
import { Store } from '@ngrx/store';
import { AppStateModel } from '../../../shared/store/Global/AppState.model';
import { addBlog, updateblog } from '../../../shared/store/Blog/blog.action';
import { getblogbyid } from '../../../shared/store/Blog/blog.selector';
import { loadspinner } from '../../../shared/store/Global/app.action';

@Component({
  selector: 'app-addblog',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './addblog.component.html',
  styleUrl: './addblog.component.css'
})
export class AddblogComponent implements OnInit {

  pagetitle='';
  editblogid = 0;
  editdata!:BlogModel;

  constructor(private dialogref: MatDialogRef<AddblogComponent>, 
              private builder: FormBuilder, 
              private store: Store<AppStateModel>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    console.log(this.data);
    this.pagetitle = this.data.title;
    if (this.data.isedit) {
      this.editblogid = this.data.id;
      this.store.select(getblogbyid(this.editblogid)).subscribe(_data => {
        this.editdata = _data;
        this.blogform.setValue({id:this.editdata.id,title:this.editdata.title,description:this.editdata.description});
      });
    }
  }


  closePopup() {
    this.dialogref.close()
  }

  blogform = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required)
  })

  SaveBlogs() {
    if (this.blogform.valid) {
      const _bloginput: BlogModel = {
        id: 0,
        title: this.blogform.value.title as string,
        description: this.blogform.value.description as string
      }

      this.store.dispatch(loadspinner({ isloaded: true }));
      setTimeout(() => {
      if(this.data.isedit){
        _bloginput.id=this.blogform.value.id as number;
        this.store.dispatch(updateblog({bloginput:_bloginput}));
      }
      else{
        this.store.dispatch(addBlog({bloginput:_bloginput}));
      }
      this.closePopup();
    }, 2000);
    } 
  }

}
