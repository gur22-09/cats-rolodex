import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/CardList/CardList';
import '../src/components/CardList/cardList.css';
import {Search} from './components/Search/Search';


class App extends Component{
  constructor(){
    super();
    this.state={
      cats:[],
      searchFeild:''
    }
  }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(Request=>Request.json())
  .then(request=>this.setState({cats:request}))
}

  
render(){
  const {cats,searchFeild} = this.state;
  const filteredCats = cats.filter(cat=>{
    return cat.name.toLowerCase().includes(searchFeild.toLocaleLowerCase());
  })
  const handleChange = (event)=>{
    return this.setState({searchFeild:event.target.value});
  }
  return (
    <div className="App">
    <h1>Cat Rolodex</h1>
      <Search placeholder='cat name' handleChange={handleChange} />
      <div className='card-list'>
       <CardList cats={filteredCats} />
      </div>
    </div>
    );
  }
}

export default App;
