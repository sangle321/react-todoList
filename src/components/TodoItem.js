import React, {Component} from 'react'
import "./TodoItem.css"
import classNames from 'classnames'
import checkImg from '../img/check.svg'
import checkDone from '../img/check-complete.svg'

class TodoItem extends Component {
    render(){

        const {item, onClick} = this.props;

        let url = checkImg;
        if(item.isComplete){
            url = checkDone;
        }

        return (
            <div className={classNames('TodoItem',{
                'TodoItem-Complete': item.isComplete
            })}>
                <img onClick= {onClick} src={url} width={32} height={32}/>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default TodoItem;