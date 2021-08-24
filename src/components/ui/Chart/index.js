import React, { useState } from 'react'
import {default as RChart } from "react-apexcharts";


const Chart = () => {
  const [options, seOptions] = useState({
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: ['Ago', 'Set', 'Out', 'Nov', 'Dec', "Jan"]
    }
  })

  const [series, setSeries] = useState([
    {
      name: "pageviews",
      data: [30, 40, 45, 50, 49, 56]
    }
  ])

  return (
    <div className="app">
      <div className="mixed-chart">
        <RChart
          options={options}
          series={series}
          type="area"
          width="300"
        />
      </div>
    </div>
  )
}

export default Chart
