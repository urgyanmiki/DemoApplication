const initState= {
    posts:[]
}
const rootReducer = (state=initState, action) =>{
    if(action.type === 'DELETE_POST'){
        let newPost = state.posts.filter(post=>{
            return action.id!==post.id
        });
        return{
            ...state,
            posts: newPost
        }
    }else if(action.type ==='FETCH_COMMENTS_SUCCES'){
        return {
            posts: state.payload
        }
        
    }
    return state;
}

export default rootReducer