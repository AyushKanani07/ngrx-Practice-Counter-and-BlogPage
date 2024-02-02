import { Component, OnInit } from '@angular/core';
import { BlogModel, Blogs } from '../../shared/blog.interface';
import { Store } from '@ngrx/store';
import { getblog, getbloginfo } from '../../shared/store/Blog/blog.selector';
import { SharedModule } from '../../shared/shared.module';
import { AppStateModel } from '../../shared/store/Global/AppState.model';
import { MatDialog } from '@angular/material/dialog';
import { AddblogComponent } from './addblog/addblog.component';
import { deleteblog, loadblog } from '../../shared/store/Blog/blog.action';
import { loadspinner } from '../../shared/store/Global/app.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  blogList !:BlogModel[];
  bloginfo!:Blogs;

  constructor(private store:Store<AppStateModel>, private dialog:MatDialog, private route:Router) {}

  ngOnInit(): void {
    this.store.dispatch(loadspinner({ isloaded: true }));
    setTimeout(() => {
      this.store.dispatch(loadblog());
      this.store.dispatch(loadspinner({ isloaded: false }));
      
    },900);

    this.store.select(getbloginfo).subscribe(item => {
      // console.log(item);
      // this.blogList = item;
      this.bloginfo = item;
    })
  }

  addBlog() {
    this.OpenPopup(0, 'Add Blog')
  }

  OpenPopup(id:any,title:any,isedit=false) {
    this.dialog.open(AddblogComponent, 
      {
        width:'41%',
        data:{
          id:id,
          title:title,
          isedit:isedit
        }
      })
  }

  editBlog(id:any) {
    // console.log(id);
    // this.OpenPopup(id, 'Edit Blog', true)
    this.route.navigate(['blog/edit/'+id])
  }

  removeBlog(id:any) {
    // console.log(id);
    if(confirm("Are you sure want to remove?")){
      this.store.dispatch(loadspinner({ isloaded: true }));
      setTimeout(() => {
        this.store.dispatch(deleteblog({ id: id }));
        
      }, 2000);
    }
  }

}
