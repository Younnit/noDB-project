import axios from 'axios'
import React, { Component } from 'react'
import Payments from './Payments'

export class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             paymentsArray: []
        }
    }

    componentDidMount(){
        axios.get('/api/payments')
        .then((res) => {
            console.log(res.data)
            this.setState({
                paymentsArray: res.data
            })
        })
        .catch((err) => console.log(err))
    }

    createItem = (name, lender, totalOwed) => {
        axios.post('/api/payments',{name, lender, totalOwed})
        .then((res) => {
            this.setState({
                paymentsArray: res.data
            })
        })
        .catch((err) => console.log(err))
    }

    deleteItem = (id) => {
        axios.delete(`/api/payments/${id}`)
        .then((res) => {
            this.setState({
                paymentsArray: res.data
            })
        })
        .catch((err) => console.log(err))
    }

    editItem = (id, changedAmount) => {
        axios.put(`/api/payments/${id}`, {changedAmount})
        .then((res) => {
            this.setState({
                paymentsArray: res.data
            })
        })
        .catch((err) => console.log(err))
    }


    
    render() {
        return (
            <div>
                <Payments 
                createItem={this.createItem}
                paymentsArray={this.state.paymentsArray}
                deleteItem={this.deleteItem}
                editItem={this.editItem}
                />
            </div>
        )
    }
}

export default Main
