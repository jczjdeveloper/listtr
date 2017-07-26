import React, {PropTypes} from 'react';
import uuid from 'uuid'
export default class CreateGuestRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid.v4(),
      name: "",
      email: "",
      contact:"",
    };
  }
  onChange = (e) => {


    switch (e.target.name) {
      case 'name':
        this.setState({
          name: e.target.value
        })
        break;
      case 'email':
        this.setState({
          email: e.target.value
        })
        break;
      case 'contact':
        this.setState({
          contact: e.target.value
        })
        break;
      default:

    }

  }

  onClick = (e) => {
    this.props.updateGuests(this.state)
    this.setState({
      id: uuid.v4(),
      name: "",
      email: "",
      contact:""
    })

  }
  render() {
    return (
      <section className="row create">
        <div className="col-md-2 title">
          <div className="form-group">
            <input type="text"
                   name="name"
                   placeholder="Name"
                   className="form-control"
                   onChange={this.onChange}
                   defaultValue={this.state.name}
                   value={this.state.name}/>
          </div>
        </div>
        <div className="col-md-2 price">
          <div className="form-group">
            <input name="email"
                   placeholder="Email"
                   className="form-control"
                   onChange={this.onChange}
                   defaultValue={this.state.email}
                   value={this.state.email}/>
          </div>
        </div>
        <div className="col-md-2 title">
          <div className="form-group">
            <input name="contact"
                   placeholder="Contact"
                   className="form-control"
                   onChange={this.onChange}
                   defaultValue={this.state.contact}
                   value={this.state.contact}/>
          </div>
        </div>

        <div className="col-md-2 PopulateGuests">
          <button type="button"
                  className="btn btn-success"
                  onClick={this.onClick}>Add Guest</button>
        </div>

      </section>
    );
  }
}

CreateGuestRow.propTypes = {
};