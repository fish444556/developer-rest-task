import React from 'react';
import { Modal } from 'react-bootstrap';

class ModalData extends React.Component {
	render() {
		return (
			<div>
				<Modal
					show={this.props.show}
					onHide={() => this.props.closeModal()}
				>
					<Modal.Header closeButton>
						<Modal.Title>hhhhhhhhhhh</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{this.props.data.productname}
						<h4>bbbbbbbbbbbbbbbbbbb</h4>
					</Modal.Body>
					<Modal.Footer>
						<h4>fffffffffff</h4>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}


export default ModalData;