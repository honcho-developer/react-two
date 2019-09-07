import React,  {Component} from 'react';
import Header from './Header';
import Todoitems from './Todoitems';
class Todo extends Component {
    render (){
        const todoItems = ["Eat", " Drink", " Walk"," Trips", " Code"," Sleep"]
        return (
            <div>
                
                <Header title="My Todo App"/>
                
                {/* <Todoitems /> */}
                {
                    todoItems.map(item => <Todoitems indivisualitem={item}/>  )
                }
                <h1>Welcome to my Todo app</h1>
            </div>
        )
    }
};



export default Todo;