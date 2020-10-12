import React, {useEffect,useState} from 'react';
import './App.css';
import Recipie from './components/Recipie'
import Button from 'react-bootstrap/Button'
import Container from'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

import Header from './components/Header'

function App() {
  const APP_KEY='681d91e572b53d80453b01abf7cfba0d'
  const APP_ID='7d19e996'

  const [recipies,setRecipies]=useState([])
  const [search, setSearch]=useState('')
  const [query,setQuery]=useState('chicken')

  useEffect( ()=>{
     getRecipies()
  },[query])



  const getRecipies= async () =>{
    const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data= await response.json()
    setRecipies(data.hits)
  }
  const handleChange=(e)=>{
    setSearch(e.target.value)
  }
  const getSearch=e=>{
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div>
      <Header/>
      <Container className='justify-content-center'>
        <Form onSubmit={getSearch} className='search-form d-flex' action="">
          <Form.Control
            type="text" 
            className='search-bar'
            value={search}
            onChange={handleChange}
          />
          <Button variant="primary">Search</Button>
        </Form>
        <Container className='justify-content-center row row-cols-lg-3 row-cols-md-2 row-cols-sm-12'>
        {recipies.map(recipie=>(
          <Recipie
            key={recipie.recipe.label}
            title={recipie.recipe.label}
            calories={recipie.recipe.calories}
            image={recipie.recipe.image}
            ingredients={recipie.recipe.ingredients}
          />
        ))}
      </Container>
    </Container>
    </div>
  );
}

export default App;
