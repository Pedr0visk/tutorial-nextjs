import React, { useState } from 'react'
import {default as RChart } from "react-apexcharts";
import PropTypes from 'prop-types'


const Chart = ({ type, options, series }) => {
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <RChart
            options={options}
            series={series}
            type={type}
          />
        </div>
      </div>
    </div>
  )
}

Chart.propTypes = {
  type: PropTypes.string.isRequired,
  options: PropTypes.instanceOf(Object).isRequired,
  series: PropTypes.instanceOf(Array).isRequired
}

export default Chart
