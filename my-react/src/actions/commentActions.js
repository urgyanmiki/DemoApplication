

const deleteComment = (id) =>{
    return{
        type: 'DELETE_POST',
        id: id
    }
}


const fetchCommentSucces = () =>{
    return{
        type: 'FETCH_COMMENTS_SUCCES'
    }
}


const fetchCommentFailure = () =>{
    return{
        type: 'FETCH_COMMENTS_FAILURE'
    }
}
