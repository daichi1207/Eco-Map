import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './style/Learn.css'
import Accordion from './Accordion'
import { useParams } from 'react-router-dom'

const Goal: React.FC = () => {

  const targets = {
    "1": "01: No Poverty",
    "2": "02: Zero Hunger",
    "3": "03: Good Health and Good Being",
    "4": "04: Quality Education",
    "5": "05: Gender Equality",
    "6": "06: Clean Water and Sanitation",
    "7": "07: Affordable and Clean Energy",
    "8": "08: Decent Work and Economic Growth",
    "9": "09: Industry, Innovation and Infrastructure",
    "10": "10: Reduced Inequalities",
    "11": "11: Susutainable Cities and Communities",
    "12": "12: Responsible Consumption and Production",
    "13": "13: Climate Action",
    "14": "14: Life Below Water",
    "15": "15: Life On Land",
    "16": "16: Peace, Justice and Strong Institutions",
    "17": "17: PartnerShips for the Goals",
  }

  let { id } = useParams();

  return (
    <>
      <h1 className="my-5" style={{ textAlign: 'center' }}>SDGs Indicators</h1>
      <Container className="mb-5">
        <h2>{targets[id as keyof typeof targets]}</h2>
        <Accordion />
      </Container>
    </>
  )
}

export default Goal