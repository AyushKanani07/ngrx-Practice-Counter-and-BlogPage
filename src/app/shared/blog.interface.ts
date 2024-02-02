
export interface BlogModel {
    id:number,
    title:string,
    description:string;
}

export interface Blogs {
    blogList:BlogModel[],
    Errormesage:string,
    // IsLoaded:boolean
}
