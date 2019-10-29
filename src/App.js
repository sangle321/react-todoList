import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import tick from './img/tick.svg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
      {title: "Play Game", isComplete : true},
      {title: "Go Shopping", isComplete: true},
      {title: "Dancing", isComplete: false} 
      ] 
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClick(item){
    return (event) => {
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete : !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    }
  }

  onKeyUp(event){
    if(event.keyCode === 13){
      let text = event.target.value;
      if(!text){
        return;
      }

      text = text.trim();
      if(!text){
        return;
      }

      this.setState({
        newItem:'',
        todoItems: [
          {title: text, isComplete: false},
          ...this.state.todoItems
        ],
      });
    }
  }

  onChange(event){
    this.setState({
      newItem: event.target.value
    });
  }

  render(){
    const {todoItems, newItem} = this.state;
    if(todoItems.length){
      return (
        <div className="App">
          <div className="Header">
            <img src={tick} width={32} height={32}/>
            <input 
              type="text"
              width={100}
              value={newItem}
              onChange={this.onChange}
              placeholder="Add a new item" 
              onKeyUp={this.onKeyUp}
            />
          </div>
          { todoItems.length && todoItems.map((item, index) => (
              <TodoItem  
                key={index}
                item={item}
                onClick={this.onItemClick(item)} />
            ))
          } 
        </div>
      );
    }else {
      return (
        <div className="App">Nothing here</div>
      );
    }
  }
}

export default App;
