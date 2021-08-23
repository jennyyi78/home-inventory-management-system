import React, { Component } from 'react';
import axios from 'axios';
import NavigationBar from './NavigationBar'
import ItemForm from './ItemForm'
import ItemCard from './ItemCard'
import ItemDetail from './ItemDetail'
import ItemUpdateForm from './ItemUpdateForm'
import ItemDelete from './ItemDelete'
import Button from 'react-bootstrap/Button';


class Inventory extends Component {

    constructor(props) {
        super(props)

        this.getItems = this.getItems.bind(this)
        this.handleShowItemForm = this.handleShowItemForm.bind(this);
        this.handleShowItemDetail = this.handleShowItemDetail.bind(this);
        this.handleShowItemUpdateForm = this.handleShowItemUpdateForm.bind(this);
        this.handleShowItemDelete = this.handleShowItemDelete.bind(this)
        this.setCurrentItem = this.setCurrentItem.bind(this)
    
        this.state = {
            items: [],
            showItemForm: false,
            showItemDetail: false,
            showItemUpdateForm: false,
            showItemDelete: false,
            currentItem: '',
        }
    
    }

     componentDidMount() {
      this.getItems();
    }

    getItems() {
        axios.get('http://localhost:9000/api/item/list', { withCredentials: true }).then((res) => {
            console.log(res.data)
            this.setState({ items: res.data })
        })
    }

    handleShowItemForm() {
        this.setState({showItemForm: !this.state.showItemForm})
    }

    handleShowItemDetail() {
        this.setState({showItemDetail: !this.state.showItemDetail})
    }

    handleShowItemUpdateForm() {
        this.setState({showItemUpdateForm: !this.state.showItemUpdateForm})
    }

    handleShowItemDelete() {
        this.setState({showItemDelete: !this.state.showItemDelete})
    }

    setCurrentItem(item) {
        this.setState({currentItem: item})
    }


    render() {
        const {items, showItemForm, showItemDetail, showItemUpdateForm, showItemDelete, currentItem} = this.state
        return (
            <div>
            <NavigationBar/>
            <ItemForm show={showItemForm} handleShowItemForm={this.handleShowItemForm} getItems={this.getItems}/>
            <ItemUpdateForm test="test" getItems={this.getItems} show={showItemUpdateForm} handleShowItemUpdateForm={this.handleShowItemUpdateForm} item={currentItem}/>
            <ItemDetail show={showItemDetail} handleShowItemDetail={this.handleShowItemDetail} handleShowItemDelete={this.handleShowItemDelete} item={currentItem}/>
            <ItemDelete show={showItemDelete} handleShowItemDelete={this.handleShowItemDelete} item={currentItem} getItems={this.getItems} />
            <Button variant="primary" onClick={this.handleShowItemForm}>Add Item</Button>
            <ul>
                {items.map((item) => {
                    return <li onClick={() => {this.handleShowItemDetail(); this.setCurrentItem(item)}}><ItemCard item={item}/></li>
                })}
            </ul>
            </div>
        )
    }

}

export default Inventory;