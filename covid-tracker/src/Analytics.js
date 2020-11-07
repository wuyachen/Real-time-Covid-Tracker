
import React from 'react';
import Table from "./Table"
import {Card, CardContent, Typography} from "@material-ui/core";


function Analytics({title, cases, total, active, isRed, ...props}){
      return (
          <div className = "stats">
          <Table title= "Coronavirus Cases" total ={1000}/>
          <Table title= "Recovered" total ={2000}/>
          <Table title= "Deaths" total ={1000}/>
      </div>
      )
};

export default Analytics;