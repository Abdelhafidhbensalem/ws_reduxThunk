import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from "./JS/actions/Actions"
import Weather from "./components/Weather"
import { useSelector } from "react-redux"

function App() {
  const dispatch = useDispatch()
  const [inp, setInp] = useState('gafsa')
  const [query, setQuery] = useState('')

  useEffect(() => {
    if(query.length<3){
      dispatch(getWeather("gafsa"))
    }
    else{
      dispatch(getWeather(query))
    }
  }, [query])

  const loading = useSelector(state => state.weatherReducer.loading)
  const handleSubmit=(e)=>{
    e.preventDefault()
    setQuery(inp)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setInp(e.target.value)} />
      </form>
      {loading ? <h1>loading ...</h1> : <Weather />}
    </div>
  );
}

export default App;
