import React from 'react';
import './App.scss';
import { Header, Summary, LineChart } from './components'

function App() {
  let [todayData, setTodayData] = React.useState(null);
  let [labels, setLabels] = React.useState([]);
  let [cases, setCases] = React.useState([]);
  let [recovered, setRecovered] = React.useState([]);
  let [deaths, setDeaths] = React.useState([]);

  const fetchApi = async () => {
    const url = `https://covid19.th-stat.com/api/open/`
    try{
      const apiTodayData = await fetch(`${url}today`);
      const jsonTodayData = await apiTodayData.json();
      setTodayData(jsonTodayData);
      const apiTimelineData = await fetch(`${url}timeline`);
      const jsonTimelineData = await apiTimelineData.json();
      const sliced10 = jsonTimelineData.Data.slice(Math.max(jsonTimelineData.Data.length - 30, 1));
      console.log(sliced10)
      let dataLabels = [];
      let dataCases = [];
      let dataRecovered = [];
      let dataDeaths = [];
      sliced10.forEach(item => {
        dataLabels.push(item.Date)
        dataCases.push(item.NewConfirmed)
        dataRecovered.push(item.NewRecovered)
        dataDeaths.push(item.NewDeaths)
      });
      setLabels(dataLabels);
      setCases(dataCases);
      setRecovered(dataRecovered)
      setDeaths(dataDeaths);
    }catch(err) {
      
      console.error(err)
    }
  }

  React.useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="App">
      <Header />
      <Summary todayData={todayData} />
      <LineChart labels={labels} cases={cases} recovered={recovered} deaths={deaths} />
    </div>
  );
}

export default App;
