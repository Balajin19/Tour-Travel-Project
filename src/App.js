/*import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  // search for the recipe
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
    
  };

  useEffect(() => {
    searchRecipes()
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }

  return (
    <div className="container">
      <h2>Varshi Food recipes</h2>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <div className="recipes">
        
        {recipes ? recipes.map(recipe => (
          <RecipeCard
             key={recipe.idMeal}
             recipe={recipe}
          />
        )) : "No Recipes Found."}
      </div>
    </div>
  );
}

export default App;*/

/*import React, { useState, useEffect } from "react";
function App() {
  const [count, updatecount] = useState(0);
  useEffect(() => {
    alert("HIIIII!!!!!!!!!");
  })
  return (
    <div>

      <p>The button is clicked {count} times</p>
      <button onClick={() => updatecount(count + 1)}>Click</button>
      
    </div>
    
  );
}*/


/*import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = { value: "Welcome", name: "guys" };
  }
  componentWillMount() {
    alert("Learn JS");
  }
  render() {
    return <div>
      <h1>{this.state.value} {this.state.name}</h1>
      <button type="button" onClick={this.updatebtn}>Click</button>
      <button type="button" onClick={this.deletebtn}>Delete Header</button>
    </div>
  }
  updatebtn = () => {
    this.setState({ value: "Love you" });
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ value: "Thankyou" })
    }, 5000);
  }
  componentWillUpdate() {
    alert("Do you want to update?");
  }
  componentDidUpdate() {
    document.getElementById('mydiv').innerHTML = "UPDATED SUCCESSFULL!!!";
  }
  shouldComponentUpdate() {
    return true;
  }
  deletebtn = () => {
    this.setState({ value: false, name: false });
  }
    componentWillUnmount() {
      alert("Deleted");
    }
  }*/


/*class App extends React.Component{
  constructor() {
    super();
    this.state = { name: "" };
  }
  render() {
    return (
      < form onSubmit={this.usersubmit}  >
        <h1>Welcome {this.state.name}</h1>
            <label Forhtml="a">Enter Your Username:</label><input type="text" placeholder="enter ur username" onChange={this.uservalue}/><br></br>
            <button type="submit">Submit</button>
    </form    >
    )
  }
  uservalue = (event) => {
    this.setState({ name: event.target.value });
    }
    usersubmit = (event) => {
        event.preventDefault();
        alert("Check your details:");
        alert("1.Username: " + this.state.name);
        
    }
    
}
export default App;*/
