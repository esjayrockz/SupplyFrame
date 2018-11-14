import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {

  const perPage = props.perPage;
  const noOfPages = Math.ceil(props.noOfTotalProjects / perPage);
  const pagesArr = [];
  for(let i = 1; i <= noOfPages; i++){
    pagesArr.push(i);
  }

  return (
    <div className="header-container">
      <div className="header-container--pagination">
        <h2><strong>List of Hackaday Projects</strong></h2>
        <div>
          {
            pagesArr.map((pageNo, index) => (
              <button className={'button ' + (index+1 === props.currentPage ? 'button--active':'')} key={index} onClick={() => props.changeCurrentPage(index+1)}>{pageNo}</button>
            ))
          }
        </div>
      </div>
      {
        props.noOfTotalProjects > 0 ? (
          <div>
            <span>Projects per page: &nbsp;&nbsp;</span>
            <select
              className="select"
              value={props.perPage}
              onChange={(e) => {props.onPerPageCountChange(parseInt(e.target.value));}}>
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>
              <option value="15">15</option>
            </select>
          </div>
        ) : ''
       }
    </div>
  );
}

const mapStateToProps = (state) => ({
  noOfTotalProjects: state.projects.data.length
});

export default connect(mapStateToProps)(Header);
