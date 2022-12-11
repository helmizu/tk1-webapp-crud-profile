import { useState } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FormProfile from './components/FormProfile'
import DataView from './components/DataView';

function App() {
  const [data, setData] = useState<any[]>([]);
  const onSubmit = (val: any) => {
    setData(prevData => ([...prevData, val]))
  }
  return (
    <Container fluid>
    <h3>Form Profile</h3>
    <Row className='mb-3'>
      <Col md={4}>
        <FormProfile onSubmit={onSubmit} />
      </Col>
      <div className='py-3'>
        <DataView data={data} />
      </div>
    </Row>
    </Container>
  )
}

export default App
