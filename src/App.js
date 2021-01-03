import React, { useState } from 'react'
import './App.css';
import LikeButton from './components/LikeButton'
import DislikeButton from './components/DislikeButton'
import Students from './components/Students';
import ShoppingList from './components/ShoppingList';
import AddItem from './components/AddItem';


function App() {
  // states
  const [ shoppingList, setShoppingList ] = useState([
    {id: 0, title: 'Apples', checked: false},
    {id: 1, title: 'Oranges', checked: false},
    {id: 2, title: 'Strawberrys', checked: false},
    {id: 3, title: 'Pineapples', checked: false}
  ])

  const [showForm, setShowForm] = useState(false)

  const [searchList, setSearchList] = useState([
    {id: 0, title: 'Apples', checked: false},
    {id: 1, title: 'Oranges', checked: false},
    {id: 2, title: 'Strawberrys', checked: false},
    {id: 3, title: 'Pineapples', checked: false}
  ])

  // functions
  const handleCheck = (someId) => {
    //console.log('checked')
    let newItems = shoppingList.map((item) => {
      if(item.id === someId){
        item.checked = !item.checked
      }
      return item
    })
    setShoppingList(newItems)
    setSearchList(newItems)
  }

  const handleDelete = (someId) => {
    console.log('deleted')
    let newItems = shoppingList.filter((item) => {
      return item.id !== someId
    })
    setShoppingList(newItems)
    setSearchList(newItems)
  }

  const handleAdd = (e) => {
    e.preventDefault()
    let newItem = {
      id: shoppingList.length + 1,
      title: e.target.newAddItem.value,
      checked: false
    }
    setShoppingList([...shoppingList, newItem])
    setShowForm(false)
    setSearchList([...searchList, newItem])
  }

  const handleSearch = (e) => {
    let searchText = e.target.value
    let filteredList = shoppingList.filter((item) => {
      return item.title.toLowerCase().includes(searchText.toLowerCase())
    })
    setSearchList(filteredList)
  }

  return (
    <div className="App">
      <h1>Ex. 1</h1>
      <LikeButton />
      <DislikeButton />
      <Students />
      <br />
      <h1>Ex. 2</h1>
      <h2>Shopping List</h2>
      <input onChange={handleSearch} type='text' placeholder='search'></input>
      <ShoppingList 
        items={searchList} 
        checkHandler={handleCheck}
        checkDelete={handleDelete}
      />
      {
        showForm ? (
          <AddItem checkAdd={handleAdd} />
        ) : (
          <button onClick={() => setShowForm(true)} >Show Adding Form</button>
        )
      }
    </div>
  );
}

export default App;
