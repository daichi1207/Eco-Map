import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Link } from 'react-router-dom'
import './style/Selector.css'

const Selector: React.FC = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col xs={7} ><h1 className="title">Eco Map</h1></Col>
        <Col className={'index ${selected}'}>Quiz</Col>
        {/* selectされるとそれに関連したものが表示されるようにする */}
        {/* 一旦selectされたとして進める */}
        <Col className="index">
          <Link to="LearnHome" style={{ textDecoration: 'none' }}>Learn</Link>
        </Col>

      </Row>
    </Container>
  )
}

export default Selector
