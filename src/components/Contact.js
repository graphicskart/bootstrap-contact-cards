import React from "react";
import { Col, Row } from "react-bootstrap";

const Contact = props => {
  const { name = "", image = "", jobTitle = "", address = "" } = props;
  return (
    <Col xs={12} sm={6} md={3}>
      <Row className="card">
        <Col xs={12} className="top text-center">
          <Row>
            <Col xs={12}>
              <img src={image} />
            </Col>
            <Col xs={12} className="name">
              <b>{name}</b>
            </Col>
            <Col xs={12}>
              <p className="job-title">{jobTitle}</p>
            </Col>
            <Col xs={12}>
              <div className="description">
                <i className="fas fa-map-marker-alt float-left icon" />
                <p className="job-title float-left">{address}</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} className="bottom">
          <Row>
            <Col xs={12} className="bottom-contents">
              <i className="far fa-envelope" />
              <i className="far fa-comment-alt" />
              <i className="far fa-user-circle" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default Contact;
