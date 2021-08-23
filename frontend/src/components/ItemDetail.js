import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ItemUpdateForm from './ItemUpdateForm'

class ItemDetail extends Component {

    constructor(props) {
        super(props)
    
        this.handleShowItemDetail = this.handleShowItemDetail.bind(this);
        this.handleShowItemUpdateForm = this.handleShowItemUpdateForm.bind(this);
        this.handleShowItemDelete = this.handleShowItemDelete.bind(this);

        this.state = {
            showItemUpdateForm: false,
        }

    
    }


    handleShowItemDetail(e) {
        this.props.handleShowItemDetail(e)
    }

    handleShowItemUpdateForm(e) {
        this.setState({showItemUpdateForm: !this.state.showItemUpdateForm})
    }

    handleShowItemDelete(e) {
        this.props.handleShowItemDelete(e)
    }


    render() {
        const {showItemUpdateForm} = this.state;
        return (
            <>
            <ItemUpdateForm show={showItemUpdateForm} handleShowItemUpdateForm={this.handleShowItemUpdateForm} item={this.props.item}></ItemUpdateForm>
    <Modal show={this.props.show} onHide={this.handleShowItemDetail} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul>
                <li>{this.props.item.location}</li>
                <li>{this.props.item.quantity}</li>
                <li>{this.props.item.url}</li>
                <li>{this.props.item.notes}</li>
            </ul>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={this.handleShowItemUpdateForm}>Edit</Button>{' '}
        <Button variant="primary" onClick={this.handleShowItemDelete}>Delete</Button>{' '}
        </Modal.Footer>
      </Modal>
            </>
        );
    }
}

export default ItemDetail;