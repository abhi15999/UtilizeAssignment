import React from "react";
import UserInfo from "./UserDetail";
import Data from "../DummyData.json";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const columns = ["Name", "Email", "Product", "Quantity"];

const cellEditProp = {
  mode: "dbclick",
};
const selectRowProp = {
    mode: 'checkbox'
  };

function OrderPage() {
  return (
    <div className="wrapper row">
      <div className="col-md-2">
        <UserInfo />
      </div>

      <div>
        <BootstrapTable data={Data} pagination cellEdit={cellEditProp} selectRow={ selectRowProp }  >
          <TableHeaderColumn dataField="customer_name" isKey>Name</TableHeaderColumn>
          <TableHeaderColumn dataField="customer_email">Email</TableHeaderColumn>
          <TableHeaderColumn dataField="product">Product</TableHeaderColumn>
          <TableHeaderColumn dataField="quantity">Quantity</TableHeaderColumn>
        </BootstrapTable>
      </div>
    </div>
  );
}

export default OrderPage;
