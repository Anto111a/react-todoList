import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';

function Main () {
  return (
   <Col md={{ span: 4, offset: 4 }}>
      <Card border="primary" className="text-center" bg="secondary" text="white">
        <Header name="Anton's " />
        <TodoList />
        <Footer />
      </Card>
    </Col>
  );
}

  export default Main;
