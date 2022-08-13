/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import Charts from '../components/Charts';
import Dropdown from '../components/Dropdown';
import Header from '../components/Header';
import History from '../components/History';

const Dashboard = () => {
  const [year, setYear] = useState(1995);
  const [dataMakerId, setDataMakerId] = useState([]);
  const [carList, setCarList] = useState([]);
  const [allCarId, setAllCarId] = useState([]);
  const [count, setCount] = useState([]);
  const [defaultName, setDefaultName] = useState('Overall Data Count');
  const [historyLog, setHistoryLog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const BrandName = ['TOYOTA', 'DAIHATSU', 'HONDA', 'BMW', 'MITSUBISHI', 'NISSAN', 'HYUNDAI', 'KIA', 'TESLA', 'MINI'];

  useEffect(() => {
    fetchMakerId();
  }, []);
  useEffect(() => {
    fetchCarCount();
  }, [allCarId]);

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
      setAllCarId(semuaCar);
      const carName = result.data.Results.filter(
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
        let listname = acc.concat(curr.Make_Name);
        return listname;
      }, []);
      setCarList(carName);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const fetchCarCount = async () => {
    let countModel = [];
    for (let i = 0; i < allCarId.length; i++) {
      const baseURL = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeid/${allCarId[i]}?format=json`;
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

  const fetchYear = async () => {
    let countModel = [];
    for (let i = 0; i < allCarId.length; i++) {
      const baseURL = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${allCarId[i]}/modelyear/${year}?format=json`;
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
    setDefaultName(`Data in Year ${year}`);
    setHistoryLog(
      historyLog.concat({
        year: year,
      })
    );
  };

  const yearLoop = () => {
    let arr = [];
    for (let i = 1995; i < 2030; i++) {
      arr.push(i);
    }
    return arr;
  };

  const handleChange = (e) => {
    setYear(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchYear();
  };

  return (
    <div className="py-1 sm:py-3 md:py-10">
      <Header data-testid="HeaderComponent" dataMakerId={dataMakerId} loading={loading} error={error} BrandName={BrandName} />
      <Charts data-testid="ChartsComponent" dataMakerId={dataMakerId} count={count} carList={carList} year={year} defaultName={defaultName} />
      <Dropdown data-testid="DropdownComponent" year={year} handleChange={handleChange} handleSubmit={handleSubmit} yearLoop={yearLoop} />
      <History data-testid="HistoryComponent" historyLog={historyLog} loading={loading} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Dashboard;
