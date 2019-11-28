//Additionally, connect can do more. It can give you access to your state which is living inside your store object. 
//To get access to your state, we need to use a special function called mapStateToProps.
// This function does exactly what it is named, map the state from the store object to the props object in your components. 
//==================================================================================
//The argument to mapStateToProps is our application state. To understand this better, 
//imagine whatever you pass inside the mapStateToProps argument is your state. 
//Next question to ask is what is that state is it an array or an object or something else? 
//Well that will depend on what you have defined it in your reducer. 
//=====================================================================================
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';
class AllPost extends Component {
    render() {
        return (
            <div className="allPostFormBlock">
                <h3>All Posts</h3>
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <EditComponent post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
    //Next we return an object with a key posts and the value is the state itself. 
    //The key that we use in mapStateToProps will be available to us as props inside the component.
}
//With that in place let’s add this function as an argument to our connect.
export default connect(mapStateToProps)(AllPost);
