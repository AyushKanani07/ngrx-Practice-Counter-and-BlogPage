import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import path from 'path';
import { CounterComponent } from './component/counter/counter.component';
import { BlogComponent } from './component/blog/blog.component';
import { authGuard } from './Guard/auth.guard';
import { EditblogComponent } from './component/blog/editblog/editblog.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "counter",
        component: CounterComponent,
        canActivate: [authGuard]
    },
    {
        path: "blog",
        component: BlogComponent,
        canActivate: [authGuard]
    },
    {
        path: "blog/edit/:id",
        component: EditblogComponent,
        canActivate: [authGuard]
    }
];
