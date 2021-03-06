import React from 'react';
import { Modal } from 'react-bootstrap';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { AnimatedPageWrapper } from '../../utils/animation/AnimatedPageWrapper';

class ModalData extends React.Component{

  constructor(props) {
    super(props);
    debugger
    this.state = {
      props: props
    }
    console.log(props);
  }

  handleButton () {
    debugger
    console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhh')
    console.log(this.state.props)
    this.props.closingmodal()
    this.props.toggleLayer()
  }

  render(){
    const backdropStyle = {
      backgroundColor: 'grey',
      opacity: 0.1
    };
    return(
      <div>
        <Modal show={this.props.visible} onHide={() => this.props.closingmodal()} backdropStyle={backdropStyle}>
        <Modal.Header closeButton>toggleLayer
          <Modal.Title>
            <Grid>
              <Row>
                <Col md={9}>
                  <Row>
                      <Col md={1}><span className="glyphicon glyphicon-barcode"></span></Col>
                      <Col md={8}>
                        <div className="productname"><h4>{this.props.data.productname}</h4></div>
                        <div className="modalData-descriptionshort">{this.props.data.productdescriptionshort}</div>
                        <div className="modalData-sincedate">{this.props.data.sincedate}</div>
                      </Col>
                  </Row>
                </Col>
              </Row>
            </Grid>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid>
            <Row>
              <Col md={8}>
                <Row>
                  <Col md={2}><div><img src={this.props.data.imageurl} alt="image" className="img-rounded modal-image"></img></div></Col>
                  <Col md={6}>
                    <div className="productname"><h4>Summary</h4></div>
                    <div>{this.props.data.summary}</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
          <div className="productname"><h4>Description</h4></div>
          <div>{this.props.data.description}</div>
        </Modal.Body>
        <Modal.Footer>
          <table>
            <tr>
              <td className="discoverybutton">
                <Link to={`/client-dashboard/product-discovery-checklist/aaa`}>
                  <Button className="btn btn-primary pull-left" type="submit" onClick={this.handleButton.bind(this)}><span className="glyphicon glyphicon-search"></span> Discovery </Button>
                </Link>
              </td>
              <td>
                <div className="btn-group" >
                  <Button className="btn btn-default"><span className="glyphicon glyphicon-edit"></span>  Edit</Button>
                  <Button className="btn btn-default"><span className="glyphicon glyphicon-trash"></span> Delete</Button>
                </div>
              </td>
            </tr>
          </table>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

// ModalData = AnimatedPageWrapper(ModalData);

export default ModalData;
