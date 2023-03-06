import './App.css';
import { useEffect, useState } from 'react';
import ArList from './Components/ArList/ArList.jsx';
import Header from './Components/Header/Header.jsx';
import { getArDataAsync } from './utils/arData';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});

  const getArData = async () => {
    const data = await getArDataAsync();

    //error handling

    //Error = Yes
    if (data?.error) {
      setError(data);
      setData([]);
    }

    // Error = No
    if (!data?.error) {
      setData(data);
      setError({});
    }
  };

  useEffect(() => {
    getArData();
  }, []);

  return (
    <div className="App">
      <Header />
      <hr></hr>
      {error && Object.keys(error).length > 0 && <h2>Nothing Here</h2>}
      {(!error || Object.keys(error).length === 0) && <ArList data={data} headingText={`Your News for Today`} />}
    </div>
  );

}

export default App;
