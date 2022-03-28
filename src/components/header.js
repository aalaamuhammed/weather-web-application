function Header({weaterData,setWeaterData,unit,setUnit}) {
 console.log(weaterData);
  const FtoC=()=>{
    let data = weaterData
    if (unit ==='f'){
      setUnit('c')
      data.currently.temprature=Math.floor( weaterData.currently.temprature*(9/5-32))
      data.daily.maxTemprature= Math.floor(weaterData.daily.maxTemprature*(9/5-32))
      data.daily.minTemprature= Math.floor(weaterData.daily.minTemprature*(9/5-32))   
    }
  }
  const CtoF =()=>{
    let data = weaterData
    if(unit==='c'){
    setUnit('f')
    // 9/5+32
    data.currently.temprature= Math.floor(weaterData.currently.temprature*(5/9+32))
    data.daily.maxTemprature= Math.floor(weaterData.daily.maxTemprature*(5/9+32))
    data.daily.minTemprature= Math.floor(weaterData.daily.minTemprature*(5/9+32))
    setWeaterData(data)
  }
}
  return (
  <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'85%',alignItems:'center'}} className='mx-5 text-white'>
    <h3> INSTAWEATHER</h3>
    <div>
      <span  onClick={FtoC} className="FCstyle" data-bs-toggle="popover" > C</span>
      <span   onClick={CtoF} className="FCstyle" data-bs-toggle="popover">F</span>
    </div>
  </div>);
} 

export default Header;