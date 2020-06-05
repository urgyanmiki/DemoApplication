import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class Home extends Component{
 
render(){
    console.log(this.props)
    const {posts} = this.props;
    const postList = posts.length ? (
        posts.map(post=>{
            return(
                <div className="card" >
                    <Link to={'/'+post.id}>
                    <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    
                    <p className="card-text">{post.body}</p>                 
                    
                    </div>
                    </Link>
                </div>
            )
        })
    ):(
        <div className="center"></div>
    ) 
    return(
        <div className="container">
            <h4 className="center"> Home </h4>
           {postList}
        </div>
    )
}
}

const mapStateToProps = (state) =>{
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)