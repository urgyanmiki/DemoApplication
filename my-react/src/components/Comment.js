import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {deleteComment} from '../actions/commentActions'

class Comment extends Component{
    handleDeleteClick=()=>{
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/home');
    }
    
    render(){
        console.log(this.props)
        const post = this.props.post ? (
            
            <div className="card" >                   
                    <div className="card-body" >
                    <h5 className="card-title">{this.props.post.title}</h5>                    
                    <p className="card-text">{this.props.post.body}</p>
                    <button className="btn-primary">Edit</button>
                    <button className="btn-warning" onClick={this.handleDeleteClick}>Delete</button>                      
                    </div>                  
                </div>

        ):(
            <div className="center">Loading comment </div>
        )

        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) =>{
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post=>post.id===id)
    }
}

const mapDispatchToProps = (dispatch) =>{
return{
    deletePost: (id)=>{ dispatch(dispatch(deleteComment(id)))
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)