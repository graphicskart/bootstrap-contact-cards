import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Contact } from "../components";

const contacts = [
  {
    image: require("../assets/images/user1.jpg"),
    name: "Vanessa Norton",
    jobTitle: "User Experience Designer",
    address: "111 8th Avenue New York, NY 10011"
  },
  {
    image: require("../assets/images/user2.jpg"),
    name: "Vanessa Norton",
    jobTitle: "User Experience Designer",
    address: "111 8th Avenue New York, NY 10011"
  },
  {
    image: require("../assets/images/user3.jpg"),
    name: "Vanessa Norton",
    jobTitle: "User Experience Designer",
    address: "111 8th Avenue New York, NY 10011"
  },
  {
    image: require("../assets/images/user4.jpg"),
    name: "Vanessa Norton",
    jobTitle: "User Experience Designer",
    address: "111 8th Avenue New York, NY 10011"
  }
];
export default class Contacts extends Component {
  render() {
    return (
      <Col xs={12}>
        <Row>
          {contacts.map((contact, key) => (
            <Contact key={key} {...contact} />
          ))}
        </Row>
      </Col>
    );
  }
}
