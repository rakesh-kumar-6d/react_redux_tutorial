const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return state.concat([action.data]);
        //If the value is ‘ADD_POST’ we are returning a new array containing action.data.
        case 'DELETE_POST':
            return state.filter((post) => post.id !== action.id);
        case 'EDIT_POST':
            return state.map((post) => post.id === action.id ? { ...post, editing: !post.editing } : post);
        // If there is a match then return a new object but change the value of editing to true if it was false or vice-versa.
        // If there is no match then just return the object as it is.
        case 'UPDATE':
            return state.map((post) => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        title: action.data.newTitle,
                        message: action.data.newMessage,
                        editing: !post.editing
                    }
                } else return post;
            })
        default:
            return state;
        // The default value for the state here is an empty array.
        //One other thing to note is that a reducer must always have the default clause inside the switch statement. 
        //In the default clause we simply return the state. 
        //This is done so that in case none of the action.type value matches any of the cases we simply return the state.
    }
}
export default postReducer;

//Actions are nothing but plain Javascript objects with a type property.
// This type property describes the event that is taking place in the application.
// This event can be anything from incrementing a counter to adding items in an array. 
//These actions help us track the different events that are happening in our application.
//{
//  type: 'EVENT_NAME'
// }
// An action can have any number of properties but it must have a type property. So an action can include data like so
// {
//   type:'ADD_ITEM',
//   name: 'Redux'
// }
//In this example the event name is ‘ADD_ITEM’ and the data is the name property with a value of ‘Redux’. 