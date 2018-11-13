import React from 'react';
import { connect } from 'react-redux';
import Sale from './Sale';

export const SalesTable = (props) => (

    <div className="content-container">
      <div className="list-header">
        <div className="show-for-desktop">Week Ending</div>
        <div className="show-for-desktop">Retail Sales</div>
        <div className="show-for-desktop">Wholesale Sales</div>
        <div className="show-for-desktop">Units Sold</div>
        <div className="show-for-desktop">Retailer Margin</div>
      </div>
      <div className="list-body">
      {
        (
          props.sales.map((sale, index)=>(
            <Sale
              key = {index}
              {...sale}
            />
          ))
        )
      }
     </div>
    </div>
);

const mapStateToProps = (state) => ({
  sales: state.sales.data
});

export default connect(mapStateToProps)(SalesTable);
