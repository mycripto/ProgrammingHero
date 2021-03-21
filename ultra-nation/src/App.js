// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const url = "https://restcountries.eu/rest/v2/all";
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  // const [name] = countries
  return (
    <div className="App">
      <h1>Countries loded: {countries.length}</h1>
    </div>
  );
}

export default App;
