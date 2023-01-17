import Icons from './components/icons.jsx';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [serach,setSerach] = useState('buenos aires')
  const [values,setValues] = useState('')
  const [icons,setIcons] = useState('')

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${serach}&lang=es&units=metric&appid=${process.env.REACT_APP_API_KEY}`

    const getData =async() =>{
      await fetch(URL)
      .then (response => {return response.json()})
      .then(data =>{
        if(data.cod >=400){
          setValues(false)
        }else{
          console.log(data.weather[0].main);
          setIcons(data.weather[0].main)
          setValues(data)
        }
        
        
      })
      .catch(error =>{
        console.log(error);
      })
    }

    const handleSearch = (e) =>{
      if(e.key === 'Enter'){
        setSerach(e.target.value)
      }
    }

    useEffect (() =>{
      getData()
    },[serach])

  return (
    <>
    
    <div className="container">
      <h2>React Weather App</h2>
      <div className='row'>
        <input
        onKeyDown={handleSearch}
        type = 'text'
        autoFocus
        />
      </div>
    </div>

    <div className='card'>
      { (values) ? (
        <div className='cardContainer'> 
        <h1 className='cityName'> {values.name}</h1>
        <p className='temp'> {values.main.temp.toFixed(0)}&deg;</p>
        <img className='icon' src={Icons(icons)} alt="icon-weather"/>
        <div className='footerCard'>
          <p className='tempMaxMin'>{values.main.temp_min.toFixed(0)}&deg; | {values.main.temp_min.toFixed(0)}&deg; </p>
        </div>
        </div>) : 
        (
          <h1></h1>
        )
      }

    </div>
        </>
  );
}

export default App;
