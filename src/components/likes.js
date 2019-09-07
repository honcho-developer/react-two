import React,  {Component} from 'react';

class Likes extends Component {
    state = {
        likes: 10,
        name: "Honcho"
    }
    // Hello = () => {
    //     alert('Hello World')  
    // }
    increaseLike = ()=> {
        this.setState ( (prevState, prevprops) =>{
            return{
                likes: prevState.likes +1
            }
        })
    }
  
    render ( ){
        return(
            <div>
                <h1>This is my likes App</h1>
                <h3>likes: {this.state.likes}</h3>
                <h3>name: {this.state.name}</h3>
                <button onClick = {this.increaseLike} >Like</button>
            </div>
        )
    }
}

export default Likes;