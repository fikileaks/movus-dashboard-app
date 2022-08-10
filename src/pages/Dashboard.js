import axios from 'axios';
import { useEffect, useState } from 'react';
import Charts from '../components/Charts';
import Header from '../components/Header';

const Dashboard = () => {
  const [dataMakerId, setDataMakerId] = useState([]);
  const [allCarId, setAllCarId] = useState([]);
  const [carId, setCarId] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Brand Looping
  // const [brand, setBrand] = useState([]);
  const BrandName = ['TOYOTA', 'DAIHATSU', 'HONDA', 'BMW', 'MITSUBISHI', 'NISSAN', 'HYUNDAI', 'KIA', 'TESLA', 'MINI'];
  //`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeid/${carId}?format=json`

  useEffect(() => {
    fetchMakerId();
  }, []);

  useEffect(() => {
    fetchCarCount();
  }, []);

  const fetchMakerId = async () => {
    let baseURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json';
    setLoading(true);
    try {
      setLoading(false);
      const result = await axios.get(baseURL);
      setDataMakerId(result.data.Results);
      carAllId();
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  // adding flying parameter in carId
  function carAllId() {
    //   console.log(allCarId);
    setAllCarId(
      dataMakerId.map(({ Make_ID }) => {
        for (let i = 0; i < BrandName.length; i++) {
          if (Make_ID === BrandName[i]) {
            return Make_ID;
          }
        }
        return Make_ID;
      })
    );
    console.log(allCarId, 'allCarId');
  }

  const fetchCarCount = async () => {
    // let baseURL = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeid/${carId}?format=json`;
    let baseURL = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeid/474?format=json`;
    setLoading(true);
    try {
      const result = await axios.get(baseURL);
      console.log(result.data.Count);
      setCarId(result.data.Count);

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Header dataMakerId={dataMakerId} loading={loading} error={error} BrandName={BrandName} />
      <Charts dataMakerId={dataMakerId} />
      <div className="">{carId}</div>
    </>
  );
};

export default Dashboard;
