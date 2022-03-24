import React from 'react'
import DetailModal from '../compenents/News/DetailModal'
import SomeComponent from '../compenents/SomeComponent'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'

const NewsDetail = () => {
  return (
    <>
      <div>NewsDetail-這頁不需要了 因為Newlist用光箱就好</div>
      <div>somecomponent放這裡</div>

      <div>
        <div className="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
        <Button variant="primary">Save Changes</Button>
        <SomeComponent />
      </div>
    </>
  )
}

export default NewsDetail
