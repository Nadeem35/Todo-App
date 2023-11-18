import React from 'react'

function TodoList(props) {
    return (
        <>
            <ul typeof='1'>
                <li className="list-item">
                    {props.item}
                    <span className='icons'>

                        <i className="fa-regular fa-trash-can icon-delete"
                            onClick={e => {
                                props.deleteItem(props.index)
                            }} ></i>
                            
                    </span>
                </li>
            </ul>
        </>
    )
}
export default TodoList