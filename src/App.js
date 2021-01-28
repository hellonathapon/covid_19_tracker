import React from 'react';
import './App.scss';
import { Header, Summary, LineChart } from './components'

function App() {
  let [todayData, setTodayData] = React.useState(null);
  let [label, setLabel] = React.useState([]);

  const fetchApi = async () => {
    const url = `https://covid19.th-stat.com/api/open/`
    try{
      const apiData = await fetch(`${url}today`);
      const jsonData = await apiData.json();
      setTodayData(jsonData);
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
      <LineChart />
    </div>
  );
}

export default App;
