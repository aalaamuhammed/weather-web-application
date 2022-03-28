function content({ weaterData }) {
  console.log(weaterData);
  return (<div id="contentSection" className="mt-5" style={{ display: "flex" }}>
    <div className="text-white bolder mx-5 " style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '85%', alignItems: 'center' }}>
      <div>
        <h1 className="fw-bold">
          New Cairo
        </h1>
        <p>Friday 20,2020</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <div className="fs-1 fw-bold">
          {weaterData.currently.temprature} &#8451;
        </div>
        <div>
          {weaterData.daily.maxTemprature}&#8451; /  {weaterData.daily.minTemprature}&#8451;
        </div>
        <div className="caption">Cloudy throghout the day</div>
      </div>
    </div>
  </div>);
}

export default content;