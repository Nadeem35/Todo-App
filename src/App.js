import React, { useState } from 'react';
import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== '')
      setListTodo([...listTodo, inputText]);
  }
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }

  return (
    <>
      <div className="main-container">
        <div className="center-container">
          <h1 className="app-heading"> To-Do App ✔</h1>
          <hr />
          <TodoInput addList={addList} />


          <div class="scrollbar" id="style-4">
            <div class="force-overflow">


              {listTodo.map((listItem, i) => {
                return (
                  <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
                )
              })}


            </div>
          </div>



        </div>
      </div>
    </>
  )
}
export default App