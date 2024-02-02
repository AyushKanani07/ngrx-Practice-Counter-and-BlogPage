import { createAction, props } from "@ngrx/store";
import { BlogModel } from "../../blog.interface";

//Variable declaration
export const load_blog_success = '[blog page] load blog success';
export const load_blog_fail = '[blog page] load blog fail';
export const load_blog = '[blog page] load blog';
export const add_blog_success = '[blog page] add blog success';
export const add_blog = '[blog page] add blog';
export const update_blog='[blog page] update blog';
export const update_blog_success='[blog page] update blog success';
export const delete_blog='[blog page] delete blog';
export const delete_blog_success='[blog page] delete blog success';


//action declaration
export const loadblog = createAction(load_blog);
export const loadBlogSuccess = createAction(load_blog_success, props<{bloglist:BlogModel[]}>());
export const loadBlogfail = createAction(load_blog_fail, props<{ErrorText:string}>());

// export const addblog = createAction('addblog', props<{bloginput:BlogModel}>());
export const addBlog = createAction(add_blog, props<{bloginput:BlogModel}>());
export const addBlogSuccess = createAction(add_blog_success, props<{bloginput:BlogModel}>());

// export const updateblog = createAction('updateblog', props<{bloginput:BlogModel}>());
export const updateblog = createAction(update_blog, props<{bloginput:BlogModel}>());
export const updateBlogSuccess = createAction(update_blog_success, props<{bloginput:BlogModel}>());

// export const deleteblog = createAction('deleteblog', props<{id:number}>());
export const deleteblog = createAction(delete_blog, props<{id:number}>());
export const deleteBlogSuccess = createAction(delete_blog_success, props<{id:number}>());

