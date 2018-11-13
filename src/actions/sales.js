import axios from 'axios';
const url = 'https://stackline-suvajit.herokuapp.com';
import moment from 'moment';
import { timeParse } from "d3-time-format";

export const fetchAllSalesData = () => {
  return (dispatch) => {
    return axios({
    method: 'get',
    url: `${url}/data/`
  }).then((response) => {
    prepareGraphData(response.data[0]);
    dispatch(saveAllSalesData(response.data[0]));
  }
);
};
}

export const prepareGraphData = (data) => {
    const sales = data.sales;
    let dateToCheck = sales[0].weekEnding;

    var check = moment(dateToCheck, 'YYYY/MM/DD');

    let month = check.format('M');

    let monthlySalesData = [];
    monthlySalesData = [{month, monthName:check.format('MMMM'), sales: sales[0].retailSales}];

    let eachDate;
    for(let i=1; i<sales.length;i++){
      eachDate = moment(sales[i].weekEnding);
      if(check.isSame(eachDate, 'month')){
          monthlySalesData[monthlySalesData.length-1].sales += sales[i].retailSales;

      } else {
           month = eachDate.format('M');

          monthlySalesData.push({month, monthName:eachDate.format('MMMM'), sales: sales[i].retailSales})
          check = moment(eachDate, 'YYYY/MM/DD');
      }
    }
}



export const saveAllSalesData = (data) => {
  let parseDate = timeParse("%Y-%m-%d");
  let salesData = [];
  for(let week of data.sales){
    salesData.push({
      date: parseDate(week.weekEnding),
      retailSales : week.retailSales,
      wholesaleSales: week.wholesaleSales,
      unitsSold: week.unitsSold,
      retailerMargin: week.retailerMargin
    });
  }
  return {
    type: 'SAVE_ALL_SALES_DATA',
    data: salesData
  }
  };
