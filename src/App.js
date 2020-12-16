import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

const App = () => {
  const APP_ID = '950656da';
  const APP_KEY = 'ccae85de608af5d12a9feffa9deb484f';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();
    console.log('we are fetching data');
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <Form className="align-item-center" onSubmit={getSearch} style={{background: "green", paddingTop: "10px", justifyContent: "center"}}>
        <Form.Row className="align-items-center justify-content-center">
          <Col xs="auto">
            <Form.Control
              className="mb-2 text-center"
              id="inlineFormInput"
              value={search}
              onChange={updateSearch}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2 text-center">Submit</Button>
          </Col>
        </Form.Row>
      </Form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key = {recipe.recipe.label}
            title = {recipe.recipe.label}
            calories = {recipe.recipe.calories}
            image = {recipe.recipe.image}
            ingrediants = {recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
