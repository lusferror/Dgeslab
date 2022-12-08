import React, { Component } from 'react'
import Chart from 'react-google-charts'
const scatterData = [
    ['Year', 'Sales', 'Expenses'],
    ['2013',  1000,      400],
    ['2014',  1170,      460],
    ['2015',  660,       1120],
    ['2016',  1030,      540]
  ]
const scatterOptions = {
    title: 'Company Performance',
    hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0}
}
class ScatterChart extends Component {
  render() {
    return (
      <div>
        <h2>Grafico de Prueba</h2>
        <Chart
          width={'700px'}
          height={'420px'}
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={scatterData}
          options={scatterOptions}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    )
  }
}
export default ScatterChart