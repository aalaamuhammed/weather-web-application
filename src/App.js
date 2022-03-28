import './App.css';
import React, { useEffect,useState } from 'react';
import axios from 'axios';
import instance from './axiosConfig';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
/* Background */
function App() {
  // unit represents the measure unit 
  const [weaterData, setWeaterData] = useState({currently:{temprature:71},daily:{maxTemprature:50,minTemprature:80}});
  const [unit, setUnit] = useState('c');
  const fetchData = async () => {
    const testURL = 'https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/31.0409,%2031.3785';
    const myInit = {
      method: 'Get',
      mode: 'no-cors',
    };
    const myRequest = new Request(testURL, myInit);
    console.log('my', myRequest);
    const response = await fetch(myRequest)
    console.log('response', response);
  }
  useEffect(() => {
  fetchData()
  }, []);
  return (
    <div id="backgroundImage">
      <Header weaterData={weaterData} setWeaterData={setWeaterData} unit={unit} setUnit={setUnit}/>
      <Content weaterData={weaterData} />
      {/* <Footer/> */}
      </div>);
}

export default App;
