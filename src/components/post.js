import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions'; 

class Posts extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }
    render() {
        const postItems = this.props.Posts.map(post => ( 
        <div key= {post.id}>
        <h3>{post.id}</h3>
        <p>{post.body}</p>
        </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        );
    }
}
const mapStateToprops = state => ({
    posts: state.posts.items
});

export default connect(mapStateToprops, {fetchPosts})(Posts);