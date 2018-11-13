import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

const Sale = ({ date, retailSales, wholesaleSales,unitsSold, retailerMargin  })=> (
    <div className="content-container">
      <div className="list-item" >
        <span className="list-item">{moment(date).format('MMMM Do, YYYY')}</span>
        <span className="list-item">{numeral(retailSales).format('$0,0.00')}</span>
        <span className="list-item">{numeral(wholesaleSales).format('$0,0.00')}</span>
        <span className="list-item">{unitsSold}</span>
        <span className="list-item">{numeral(retailerMargin).format('$0,0.00')}</span>
      </div>
    </div>
);

export default Sale;
