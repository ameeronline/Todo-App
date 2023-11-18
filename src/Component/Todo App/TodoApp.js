import React, { Component } from 'react'
import "./TodoApp.css";

export default class TodoApp extends Component {

    state={
        input:"",
        items:[]
    }

    handleChange=(event)=>{
        this.setState({
            input:event.target.value,
            
        })
    }
    storeItems=(event)=>{
        event.preventDefault();
        const {input} = this.state;
        const allItems = this.state.items

        allItems.push(input);
        
        this.setState({
            items:allItems,
            input:""
        })
    }
    deleteItem=(index)=>{
        console.log(index);
        const allItems = this.state.items;
        allItems.splice(index, 1);
        this.setState({
            items: allItems
        })
    }

    render() {
        const { input, items } = this.state;

        return (
            <div className='todo-container'>

                <form className='input-section' onSubmit={this.storeItems}>
                    <h1>Todo App.</h1>
                    <input type="text" value={input} onChange={this.handleChange} placeholder='Enter items...' />
                </form>

                <ul>
                   {items.map((data, index)=>(
                        <li key={index}>{data} <i onClick={ ()=> this.deleteItem(index)} className="fa-solid fa-trash-can"></i></li>
                   ))}

                </ul>
            </div>
        )
    }
}
