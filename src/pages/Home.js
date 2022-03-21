import React from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import SomeComponent from '../compenents/SomeComponent'

const Home = () => {
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      <Button variant="primary">Save Changes</Button>
      <SomeComponent />
    </div>
  )
}

export default Home
