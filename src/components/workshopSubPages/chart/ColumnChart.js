import React, { useEffect } from 'react'
import ApexCharts from 'apexcharts'

const ColumnChart = ({csvData,data}) => {

    useEffect(()=>{
        var columnChart = new ApexCharts(
            document.querySelector("#columnChart"),
            optionsColumn
          );

        columnChart.render();
        
    },[])

    console.log(data)

    var optionsColumn = {
        series: [
          {
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
          },
        ],
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "South Korea",
            "Canada",
            "United Kingdom",
            "Netherlands",
            "Italy",
            "France",
            "Japan",
            "United States",
            "China",
            "Germany",
          ],
        },
      };



  return (
    <div
        id="columnChart"
        style={{
        width: "100%",
        border: "2px solid black",
        marginTop: "2%",
        }}
    ></div>
  )
}

export default ColumnChart