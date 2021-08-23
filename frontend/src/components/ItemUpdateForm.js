import React, { Component } from "react";
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

class ItemUpdateForm extends Component {

    constructor(props) {
        super(props)
    
        this.handleShowItemUpdateForm = this.handleShowItemUpdateForm.bind(this);
        this.getItems = this.getItems.bind(this)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeURL = this.onChangeURL.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: this.props.item.name,
            quantity: this.props.item.quantity,
            location: this.props.item.location,
            url: this.props.item.url,
            notes: this.props.item.notes,
        }

    
    }


    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
  
    onChangeQuantity(e) {
        this.setState({ quantity: e.target.value })
    }

    onChangeLocation(e) {
        this.setState({ location: e.target.value })
    }

    onChangeURL(e) {
        this.setState({ url: e.target.value })
    }
  
    onChangeNotes(e) {
        this.setState({ notes: e.target.value })
    }


    handleShowItemUpdateForm(e) {
        this.props.handleShowItemUpdateForm(e)
    }

    getItems(e) {
        this.props.getItems(e)
        console.log("works")
    }

    onSubmit(e) {
        e.preventDefault()

        const item = {
            name: this.state.name,
            quantity: this.state.quantity,
            location: this.state.location,
            url: this.state.url,
            notes: this.state.notes,
            _id: this.props.item._id
        };
      
      
        axios.post('http://localhost:9000/api/item/update', item, {withCredentials: true})
            .then((res) => {
                console.log(res.data)
            })


         
        this.setState({ 
            name: '',
            quantity: '',
            location: '',
            url: '',
            notes: '',
        })
    }

    

    render() {
        const {name, quantity, location, url, notes} = this.state;
  
        return (
            <>
    <Modal show={this.props.show} onHide={this.handleShowItemUpdateForm} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={this.onSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName" value={name} onChange={this.onChangeName}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Enter name" defaultValue={this.props.item.name}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridQuantity" value={quantity} onChange={this.onChangeQuantity}>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control placeholder="Enter quantity" defaultValue={this.props.item.quantity}/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridLocation" value={location} onChange={this.onChangeLocation}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control placeholder="Ex: Amazon, Walmart, etc" defaultValue={this.props.item.location}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridUrl" value={url} onChange={this.onChangeURL}>
                    <Form.Label>Link to Item</Form.Label>
                    <Form.Control placeholder="Enter URL" defaultValue={this.props.item.url}/>
                </Form.Group>

                <FloatingLabel controlId="formNotes" label="Notes" className="mb-3" value={notes} onChange={this.onChangeNotes}>
    <Form.Control as="textarea" placeholder="Leave notes here" defaultValue={this.props.item.notes}/>
  </FloatingLabel>

                <Button variant="primary" type="submit" onClick={this.handleShowItemUpdateForm}>
                    Submit
                </Button>
            </Form>
        </Modal.Body>
      </Modal>
            </>
        );
    }
}

export default ItemUpdateForm;