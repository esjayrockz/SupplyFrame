import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Project from './Project';
import Header from './Header';
import { fetchCurrentPageUsers } from '../actions/users';

export class Dashboard extends React.Component {
  state = {
    currentPage: 1,
    perPage: 12
  };

  changeCurrentPage = (index) => {
    this.setState(() => ({currentPage: index}));
  };

  onPerPageCountChange = (perPage) => {
    this.setState(() => ({perPage}));
    if((perPage * (this.state.currentPage - 1)) >= this.props.projects.length){
      this.setState(()=>({currentPage:1}));
    }
  };

  fetchCurrentPageUsers = () => {
    const currentPage = this.state.currentPage;
    const perPage = this.state.perPage;
    this.props.fetchCurrentPageUsers(currentPage, perPage);
  }

  componentDidMount = () => {
    this.fetchCurrentPageUsers();
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.currentPage !== this.state.currentPage || prevState.perPage !== this.state.perPage){
      this.fetchCurrentPageUsers();
    }
  }

  render(){
    const currentPage = this.state.currentPage;
    const perPage = this.state.perPage;
    const currentPageProjects = [];
    const start = (currentPage - 1) * perPage;
    const end = (perPage * currentPage) < this.props.projects.length ? (perPage * currentPage) : this.props.projects.length;
    for(let i = start; i < end; i++){
      currentPageProjects.push(this.props.projects[i]);
    }
    const users = this.props.users ? this.props.users:[];
    return (
      <div>
        <Header
          currentPage={currentPage}
          changeCurrentPage={this.changeCurrentPage}
          perPage={this.state.perPage}
          onPerPageCountChange={this.onPerPageCountChange}
        />
        <div className="content-container">
          <div className="box-layout">
           {
            end === 0 ? 'No projects to show. Please try later.' : (
              currentPageProjects.map((project, index) => (
              <Project
                 key={index}
                 project={project}
                 users={users[index]}
              />
              ))
            )
             }
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentPageUsers: (currentPage, perPage) => dispatch(fetchCurrentPageUsers(currentPage, perPage))
});

const mapStateToProps = (state) => ({
  projects: state.projects.data,
  users: state.users.data
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
