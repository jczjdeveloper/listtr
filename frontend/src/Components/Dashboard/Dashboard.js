import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { getUser, updateUser } from '../../Actions/User';
import { updateNavPath } from '../../Actions/Navigation'

import axios from 'axios';
import MainContent from './MainContent/MainContent';


import './Dashboard.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNav: "Hosting"
    }
  }

// onClick, updateNavPath is fired in the actions to send to reducer, to be exported as props for conditional rendering
onClick = (e) => {
  const state = this.state;
  console.log('clicked: ', state)

  this.setState(
    {currentNav: e.target.id}
  );
  this.props.updateNavPath(this.state);
  console.log('curretNav state: ', this.state.currentNav)
}

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
        <div>
      <nav className="navbar fixed-top navbar-toggleable-sm navbar-inverse bg-primary mb-3">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="flex-row d-flex">
          <a className="navbar-brand mb-1" href="#" title="LISTT">LISTT</a>
          <button type="button" className="hidden-md-up navbar-toggler" data-toggle="offcanvas" title="Toggle responsive left sidebar">
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="navbar-collapse collapse" id="collapsingNavbar">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="" >Hosting <span className="sr-only">Hosting</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="" >Attending</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="" data-toggle="collapse" >Account</a>
            </li>
          </ul>
        </div>

      </nav>
      <div className="container-fluid" id="main">
        <div className="row row-offcanvas row-offcanvas-left">
          <div className="col-md-3 col-lg-2 sidebar-offcanvas" id="sidebar" role="navigation">
            <ul className="nav flex-column pl-1">
              <li className="nav-item" id="HostingNav" onClick={this.onClick}>Hosting</li>
              <li className="nav-item" id="AttendingNav" onClick={this.onClick}>Attending</li>
              <li className="nav-item" id="AccountNav" onClick={this.onClick}>Account</li>
              <li className="nav-item" id="Billing" onClick={this.onClick}>Billing</li>
              <li className="nav-item" id="Logout" onClick={this.onClick}>Logout</li>
            </ul>
          </div>
          {/*/col*/}
          <div className="col-md-9 col-lg-10 main">
            {/*toggle sidebar button
          <p class="hidden-md-up">
              <button type="button" class="btn btn-primary-outline btn-sm" data-toggle="offcanvas"><i class="fa fa-chevron-left"></i> Menu</button>
          </p>*/}
            <MainContent />
          </div>
        </div>
      </div>
      {/*scripts loaded here*/}
    </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
};

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNavPath: (currentNav) => {dispatch(updateNavPath(currentNav))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
