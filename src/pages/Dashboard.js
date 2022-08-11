import axios from 'axios';
import { useEffect, useState } from 'react';
import Charts from '../components/Charts';
import Header from '../components/Header';

const Dashboard = () => {
  // data nama dan id 3 digit dari fetch awal
  const [dataMakerId, setDataMakerId] = useState([]);
  // data id yang udah di reduce
  const [allCarId, setAllCarId] = useState([]);
  const [count, setCount] = useState([]);
  // const [carId, setCarId] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BrandName = ['TOYOTA', 'DAIHATSU', 'HONDA', 'BMW', 'MITSUBISHI', 'NISSAN', 'HYUNDAI', 'KIA', 'TESLA', 'MINI'];
  //`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeid/${carId}?format=json`

  useEffect(() => {
    fetchMakerId();
  }, []);

  /*   useEffect(() => {
    fetchCarCount();
  }, [allCarId]); */
  useEffect(() => {
    fetchCarCount();
  }, [allCarId]);

  //fetch semua data maker id
  const fetchMakerId = async () => {
    let baseURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json';
    setLoading(true);
    try {
      setLoading(false);
      const result = await axios.get(baseURL);
      setDataMakerId(result.data.Results);

      const semuaCar = result.data.Results.filter(
        (item) =>
          item.Make_Name === BrandName[0] ||
          item.Make_Name === BrandName[1] ||
          item.Make_Name === BrandName[2] ||
          item.Make_Name === BrandName[3] ||
          item.Make_Name === BrandName[4] ||
          item.Make_Name === BrandName[5] ||
          item.Make_Name === BrandName[6] ||
          item.Make_Name === BrandName[7] ||
          item.Make_Name === BrandName[8] ||
          item.Make_Name === BrandName[9]
      ).reduce((acc, curr) => {
        let final = acc.concat(curr.Make_ID);
        return final;
      }, []);
      console.table({ semuaCar });
      setAllCarId(semuaCar);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
    console.log(allCarId, 'allCarId === data id yang udah di reduce');
  };

  /*   const fetchCarCount = async () => {
    setLoading(true);
    let baseURL1 = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${allCarId[0]}?format=json`;
    let baseURL2 = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${allCarId[1]}?format=json`;
    let baseURL3 = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${allCarId[2]}?format=json`;
    let baseURL4 = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${allCarId[3]}?format=json`;
    let baseURL5 = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${allCarId[4]}?format=json`;
    let baseURL6 = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${allCarId[5]}?format=json`;
    let baseURL7 = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${allCarId[6]}?format=json`;
    let baseURL8 = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${allCarId[7]}?format=json`;
    let baseURL9 = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${allCarId[8]}?format=json`;
    let baseURL10 = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${allCarId[9]}?format=json`;
    try {
      const result1 = await axios.get(baseURL1);
      const result2 = await axios.get(baseURL2);
      const result3 = await axios.get(baseURL3);
      const result4 = await axios.get(baseURL4);
      const result5 = await axios.get(baseURL5);
      const result6 = await axios.get(baseURL6);
      const result7 = await axios.get(baseURL7);
      const result8 = await axios.get(baseURL8);
      const result9 = await axios.get(baseURL9);
      const result10 = await axios.get(baseURL10);
      const requestCount = [result1.data.Count, result2.data.Count, result3.data.Count, result4.data.Count, result5.data.Count, result6.data.Count, result7.data.Count, result8.data.Count, result9.data.Count, result10.data.Count];
      setCount(requestCount);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }; */

  const fetchCarCount = async () => {
    let countModel = [];

    for (let i = 0; i < allCarId.length; i++) {
      //inputting all data into axios param
      const baseURL = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeid/${allCarId[i]}?format=json`;
      // setLoading(true);
      try {
        setLoading(false);
        const result = await axios.get(baseURL);
        countModel = countModel.concat(result.data.Count);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    setCount(countModel);
  };
  console.log(count, 'WKWKWKWKWK Ini Data Dari fetching pake data ID dan resultnya COUNT DATA MODEL');

  console.log(allCarId, 'Merupakan Data nomor idMobil aja : 123,123,123');

  return (
    <>
      <Header dataMakerId={dataMakerId} loading={loading} error={error} BrandName={BrandName} />
      <Charts dataMakerId={dataMakerId} />
      <div className="">
        {allCarId.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <div className="">
        {count.length !== 0 && !loading ? (
          count.map((item, index) => {
            return <p key={index}>{item} MASUK</p>;
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Dashboard;
