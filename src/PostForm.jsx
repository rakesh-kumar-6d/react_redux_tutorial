import React, { Component } from 'react';
import {connect} from 'react-redux';
//Won’t it be great if we somehow got access to the dispatch method as a prop. That is what connect() allows you to do.
//connect() returns a function which takes in your current component as an argument and
// returns a new component with dispatch method as it’s prop. The main idea to remember 
//is that connect will ultimately return a new component which has the dispatch method as a prop.
//export default connect()(component-name)
class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message
        }
        this.props.dispatch({
            type:'ADD_POST',
            data});
          this.getTitle.value = '';
          this.getMessage.value = '';
          //Remember that connect() gives you access to dispatch as a prop. Here once we have captured the data from the form 
          //we dispatch the action using this.props.dispatch() passing in the data object with a type of ‘ADD_POST’.
    }
    render() {
        return (
            <div className="postFormBlock">
                <h3>Create Post</h3>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                        placeholder="Enter Post Title" />
                    <br /><br />
                    <textarea required rows="5" ref={(input) => this.getMessage = input} cols="28"
                        placeholder="Enter Post" />
                    <br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}
export default connect()(PostForm);

//Additionally, connect can do more. It can give you access to your state which is living inside your store object.
// To get access to your state, we need to use a special function called mapStateToProps. (go to allpost.jsx)