import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler();
    console.log(this.props.deleteClickHandler());
  };
  render() {
    const { contact } = this.props;
    const { showContactInfo } = this.state;
    return (
      <div className="çard card-body mb-3">
        <h4>
          {contact.name}{" "}
          <i
            onClick={this.onShowClick}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-user-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick}
          />
        </h4>
        <div>
          {showContactInfo ? (
            <ul className="list-group">
              <li className="list-group-item">Email : {contact.email}</li>
              <li className="list-group-item">Phone : {contact.phone}</li>
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
