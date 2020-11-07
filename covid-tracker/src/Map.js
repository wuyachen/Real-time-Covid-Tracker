import React, {useState,useEffect} from 'react';
import "./Map.css"
import { FormControl,MenuItem,Select } from "@material-ui/core";

function Map(){
    const [country, setCountry] = useState([
    ]);
    const [Items,setItems] = useState("World");
    useEffect(() => {
      const getData = async () => {
        await fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => {
          const results = data.map((x) =>({
            name:x.country,
            value:x.countryInfo.iso2
          }
          ))
          setCountry(results);
        })
      }
      getData();
    }, [])
  
    const ChangeCountry = async(event) =>{
      const Temp = event.target.value;
      setItems(Temp);
    }
  return (
    <div>
      <FormControl className = "app_header">
      <Select variant = "filled" onChange={ChangeCountry} value={Items} >
      <MenuItem value = "world">World</MenuItem>
        {
          country.map((x) =>(
            <MenuItem value = {x.value}>{x.name}</MenuItem>
          ))
        }
      </Select>
      </FormControl>
    
    </div>
  );}
export default Map