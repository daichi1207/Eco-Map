import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import MediaQuery from 'react-responsive'
import { BsPinMap } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import './style/Selector.css';

const Selector: React.FC = () => {
  return (
    <>
      <MediaQuery query="(min-width: 768px)">
        <Container className="mt-3">
          <Row>
            <Col xs={1} style={{ padding: '0.5rem' }} ><IconContext.Provider value={{ size: '2.0rem' }} ><BsPinMap /></IconContext.Provider></Col>
            <Col xs={5} ><h1 className="title">Eco Map</h1></Col>
            <Col>
              <Link to="/Map" style={{ textDecoration: 'none' }}>Map</Link>
            </Col>
            <Col>
              <Link to="/Quiz" style={{ textDecoration: 'none' }}  >Quiz</Link>
            </Col>
            <Col className="index">
              <Link to="/Learn" style={{ textDecoration: 'none' }}>Learn</Link>
            </Col>
          </Row>
        </Container>
      </MediaQuery>
      <MediaQuery query="(max-width: 767px)">
        <Container className="mt-3">
          <Row>
            <Col xs={1} style={{ padding: '0.2rem' }} ><IconContext.Provider value={{ size: '1.5rem' }} ><BsPinMap /></IconContext.Provider></Col>
            <Col xs={5} ><h1 className="title">Eco Map</h1></Col>
            <Col>
              <Link to="/Map" style={{ textDecoration: 'none' }}>Map</Link>
            </Col>
            <Col>
              <Link to="/Quiz" style={{ textDecoration: 'none' }}  >Quiz</Link>
            </Col>
            <Col className="index">
              <Link to="/Learn" style={{ textDecoration: 'none' }}>Learn</Link>
            </Col>
          </Row>
        </Container>
      </MediaQuery>
    </>
  )
}

export default Selector