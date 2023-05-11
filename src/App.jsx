import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // numero random para elegir entre los distintos gatos
  const [randomNumber,setRandomNumber] = useState(0)
  const [cat, setCat] = useState({ name: "", image_link: "", location: "" })
  useEffect(() => {
    axios
      .get("https://api.api-ninjas.com/v1/cats?family_friendly=3", {
        //elegi la api de gatos, la api de animales no contenia imagenes
        headers: { "X-Api-Key": "aosj+9R/oabBCA/uR2h6qg==xt3KCbTHoRsfvO9H" },
        //header necesario para acceder a api ninja
      })
      .then((res) => {
        setCat(res.data[randomNumber]);
      })
      .catch((error) => console.log(error));
  }, [randomNumber]);

  return (
    <div className='parent-div'>
      <p className='animal-text'>
        {cat.name + " "}
        is from {cat.origin}
      </p>
      <img src={cat.image_link} className='animal-img' alt='random-animal' />
      <button className='refresh-button' onClick={
        () => setRandomNumber(Math.floor(Math.random() * 8 / 1))
        // al hacer click en el botton selecciona un numero random, maximo 8
      }>
        Refresh
      </button>
    </div>
  );
}

export default App;
