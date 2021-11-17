import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      { id: 1, name: "Scott", phone: "0303-456", address: { city: "New Delhi" } },
      { id: 2, name: "Jones", phone: null, address: { city: "Madrid" } },
      { id: 3, name: "Allen", phone: "8819-453", address: { city: "London" } },
      { id: 4, name: "James", phone: null, address: { city: "New York" } },
      { id: 5, name: "John", phone: "2309-915", address: { city: "Buenos Aires" } },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}

          <span className="badge badge-secondary m-2">{this.state.customersCount}</span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <tr>
            <th>#</th>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  //Executes when the user clicks on Refresh button
  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender(phone) {
    return phone ? phone : <div className="bg-warning p-2 text-center">No Phone</div>;
  }

  getCustomerRow = () => {
    return this.state.customers.map((cust) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
}
