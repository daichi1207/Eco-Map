import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Accordion from 'react-bootstrap/Accordion';
import './style/Learn.css'

const Goal1: React.FC = () => {

  return (
    <>
      <h1 className="my-5" style={{ textAlign: 'center' }}>SDGs Indicators</h1>
      <Container>
        <h4>01: End poverty in all its forms everywhere</h4>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>1.1  By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.25 a day</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>1.1.1 Proportion of population living below the international poverty line by sex, age, employment status and geographical location (urban/rural)</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>1.2 By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>1.2.1 Proportion of population living below the national poverty line, by sex and age</li>
                <li>1.2.2 Proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  )
}

export default Goal1
