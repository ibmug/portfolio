import React from "react";



  // Setting the component's initial state
  let state = {
    mail: "",
    username: ""
  };

  function handleInputChange (event) {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  function handleFormSubmit(event) {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      mail: "",
      username: ""
    });
  };




function SignForm() {
  return (
    <div className="signForm">
        <form>
            <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
    </div>
  );
}

export default SignForm;

