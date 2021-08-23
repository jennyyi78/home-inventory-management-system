import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

class ItemDelete extends Component {

    constructor(props) {
        super(props)

        this.deleteItem = this.deleteItem.bind(this);
        this.handleShowItemDelete = this.handleShowItemDelete.bind(this)
    }

    handleShowItemDelete(e) {
        this.props.handleShowItemDelete(e);
    }



    deleteItem(item) {
        axios.post('http://localhost:9000/api/item/delete', item, {withCredentials: true})
            .then((res) => {
                console.log(res.data)
            })

            this.props.getItems()


    }

    

    render() {

        return (
            <>
    <Modal show={this.props.show} onHide={this.handleShowItemDelete} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure you want to delete?
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" type="submit" onClick={() => {this.deleteItem(this.props.item); this.handleShowItemDelete()}}>
                    Confirm
                </Button>
        </Modal.Footer>
      </Modal>
            </>
        );
    }
}

export default ItemDelete;