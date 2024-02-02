import { createReducer, on } from "@ngrx/store";
import { addBlog, addBlogSuccess, deleteblog, loadBlogSuccess, loadBlogfail, loadblog, updateBlogSuccess, updateblog } from "./blog.action";
import { BlogState } from "./blog.state";
import { BlogModel } from "../../blog.interface";




export const _blogReducer = createReducer(BlogState, 
    on(loadblog, (state)=> {
    return{
        ...state,
        // IsLoaded:false
    };
    }),
    on(loadBlogSuccess, (state, action) => {
        return {
            ...state,
            blogList:[...action.bloglist],
            Errormesage:'',
            // IsLoaded:false
        }
    }),
    on(loadBlogfail, (state, action) => {
        return {
            ...state,
            blogList:[],
            Errormesage:action.ErrorText,
            // IsLoaded:false
        }
    }),
    // on(addBlog, (state, action) => {
    //     const _blog = {...action.bloginput}
    //     _blog.id = state.blogList.length+1;
    //     return {
    //         ...state,
    //         blogList:[...state.blogList, _blog]
    //     }
    // }),
    on(addBlogSuccess, (state, action) => {
        const _blog = {...action.bloginput}
        return {
            ...state,
            blogList:[...state.blogList, _blog],
            // IsLoaded:false
        }
    }),
    // on(updateblog, (state, action) => {
    //     const _blog = {...action.bloginput}
    //     const updatedblog = state.blogList.map(blog => {
    //         return _blog.id === blog.id?_blog:blog;
    //     })
    //     return {
    //         ...state,
    //         blogList:updatedblog
    //     }
    // }),
    on(updateBlogSuccess,(state,action)=>{
        const _blog={...action.bloginput};
        const updatedblog=state.blogList.map(blog=>{
          return _blog.id===blog.id?_blog:blog;
        });
        return{
            ...state,
            bloglist:updatedblog,
            // IsLoaded:false
        }
    }),
    on(deleteblog, (state, action) => {
        const updatedblog = state.blogList.filter((data:BlogModel) => {
            return data.id !== action.id
        });
        return {
            ...state,
            blogList:updatedblog,
            // IsLoaded:false
        }
    })

)

export function blogReducer(state:any, action:any) {
    return _blogReducer(state, action);
}