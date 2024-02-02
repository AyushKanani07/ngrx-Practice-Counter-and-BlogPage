import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../master.service";
import { addBlog, addBlogSuccess, deleteBlogSuccess, deleteblog, loadBlogSuccess, loadBlogfail, load_blog, updateBlogSuccess, updateblog } from "./blog.action";
import { EMPTY, catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { BlogModel } from "../../blog.interface";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EmptyAction, ShowAlert, loadspinner } from "../Global/app.action";

@Injectable()

export class BlogEffects{

    constructor(private action$:Actions, private service:MasterService, private _snakbar:MatSnackBar) {}

    _lodblog = createEffect(() =>
        this.action$
            .pipe(
                ofType(load_blog),
                exhaustMap((action) => {
                    return this.service.getAllBlogs().pipe(
                        map((data) => {
                            return loadBlogSuccess({bloglist:data});
                        }),
                        catchError((error) => of(loadBlogfail({ErrorText:error.message}), loadspinner({isloaded:false})))
                    )
                })
            )
    );

    _AddBlog = createEffect(() =>
    this.action$.pipe(
        ofType(addBlog),
        switchMap(action => 
            this.service.CreateBlog(action.bloginput).pipe(
                switchMap(data => of(
                    addBlogSuccess({bloginput:data as BlogModel}),
                    loadspinner({isloaded:false}),
                    ShowAlert({ message: 'Created successfully.', actionresult: 'pass' })
                )),
                catchError((error) => of(ShowAlert({message: 'Failed to create blog', actionresult: 'fail'}), loadspinner({isloaded:false})))
            )
        )
    ));

    _UpdateBlog = createEffect(() =>
    this.action$.pipe(
        ofType(updateblog),
        switchMap(action =>
            this.service.UpdateBlog(action.bloginput).pipe(
                switchMap(res => of(
                    updateBlogSuccess({ bloginput: action.bloginput }),
                    loadspinner({isloaded:false}),
                    // ShowAlert({ message: 'Updated successfully.'})
                    ShowAlert({ message: 'Updated successfully.', actionresult: 'pass' })
                )),
                catchError((_error) => of(ShowAlert({ message: 'Update Failed - Due to' + _error.message, actionresult: 'fail' }),loadspinner({isloaded:false})))
                // catchError((error) => of(ShowAlert({message: 'Update Failed - Due to' + error.message, actionresult: 'fail'})))
            )
        )
    )
);

_DeleteBlog = createEffect(() =>
    this.action$.pipe(
        ofType(deleteblog),
        switchMap(action =>
            this.service.DeleteBlog(action.id).pipe(
                switchMap(res => of(
                    deleteBlogSuccess({ id: action.id }),
                    loadspinner({isloaded:false}),
                    // ShowAlert({ message: 'Removed successfully.' })
                    ShowAlert({ message: 'Removed successfully.', actionresult: 'pass' })
                )),
                catchError((_error) => of(ShowAlert({ message: 'Failed to remove.', actionresult: 'fail' }),loadspinner({isloaded:false})))
                // catchError((_error) => of(ShowAlert({ message: 'Failed to remove.', actionresult: 'fail' })))
            )
        )
    )
);

}