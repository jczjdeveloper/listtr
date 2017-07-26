import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {storeGuests} from '../../Actions/Event'
import RenderGuests from './RenderGuests'
import './AddGuest.css'
class AddGuest extends React.Component {
  constructor(props) {
    super(props);

    this.guestslist = [];
    this.state = {
    name: "",
    email: "",
    contact:"",

};
  }

//saves user's input into local state before sending to "actons" together
  onChange = (e) => {
    let state = this.state;

    if(e.target.name == "name") {
      state.name = e.target.value;
    }

    if(e.target.name == "email") {
      state.email = e.target.value;
    }

    if(e.target.name == "contact") {
      state.contact = e.target.value;
    }

    this.setState(state);
    console.log(state)
  }

  onClick = (e) => {
    this.guestslist.push(this.state)
    console.log(this.guestslist)
    console.log(this.props.events)

  }
  render() {
    return (
      <div className="container">
      <Link to="/createevent">
        <div className="back-button">
          <button className="btn btn-default" >Back</button>
        </div></Link>
        <div className="add-guest-header">
        <h1>Add Guest</h1>
        <hr/>
        </div>
        <section className="row create">
          <div className="col-md-2 title">
            <div className="form-group">
              <input type="text"
                     name="name"
                     placeholder="Name"
                     className="form-control"
                     onChange={this.onChange}
                     value={this.state.name}/>
            </div>
          </div>
          <div className="col-md-2 price">
            <div className="form-group">
              <input name="email"
                     placeholder="Email"
                     className="form-control"
                     onChange={this.onChange}
                     value={this.state.email}/>
            </div>
          </div>
          <div className="col-md-2 title">
            <div className="form-group">
              <input name="contact"
                     placeholder="Contact"
                     className="form-control"
                     onChange={this.onChange}
                     value={this.state.contact}/>
            </div>
          </div>

          <div className="col-md-2 PopulateGuests">
            <button type="button"
                    className="btn btn-success"
                    onClick={this.onClick}>Add Guest</button>
          </div>

        </section>
      </div>
    );
  }
}



//export default PopulateGuests;
const mapStateToProps = (state) => {
  return {
    guests: state.guests,
    events: state.events
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    storeGuests: (guests) => {dispatch(storeGuests(guests))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGuest);//to include guest population
