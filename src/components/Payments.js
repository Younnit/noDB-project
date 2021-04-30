import React, { Component } from 'react'

export class Payments extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             lender: '',
             amount: '',
             editMode: false,
             editAmount: '',
             createMode: false
        }
    }

    //Handler functions for all the changes

    handleNameChange = (val) => {
        this.setState({
            name: val
        })
    }
    handleLenderChange = (val) => {
        this.setState({
            lender: val
        })
    }
    handleAmountChange = (val) => {
        this.setState({
            amount: val
        })
    }

    handleEditChange = (val) => {
        this.setState({
            editAmount: val
        })
    }

    handleCreate = () => {
        this.props.createItem(this.state.name, this.state.lender, this.state.amount)
        this.setState({
            name: '',
            lender: '',
            amount: ''
        })
    }

    toggleEdit = () => {
        this.setState({
            editMode: !this.state.editMode,
            createMode: false
        })
    }

    handleEdit = () => {
        this.props.editItem(this.props.paymentsArray.id, this.state.editAmount)
        this.toggleEdit()
        this.setState({
            editAmount: '',
            
        })
    }
    

    //Rendering of the elements


    render() {
        
        return this.state.editMode === true && this.state.createMode === false ? (
            <div>
                <p>
                    How much did you pay {this.props.paymentsArray.lender}?

                    <input 
                        value={this.state.editAmount} 
                        placeholder='Enter an amount' 
                        onChange={(e) => this.handleEditChange(e.target.value)}
                    />

                    <button onClick={this.toggleEdit}>Go Back</button>
                    <button onClick={this.handleEdit}>Save</button>

                </p>
            </div>
            ) : (
            <div>
                <div>
                    <input 
                value={this.state.name} 
                placeholder='Enter your name.' 
                onChange={(e) => this.handleNameChange(e.target.value)}
                />

                <input 
                value={this.state.lender} 
                placeholder='Enter your lender.'
                onChange={(e) => this.handleLenderChange(e.target.value)}
                />

                <input 
                value={this.state.amount} 
                placeholder='Enter the amount you owe.' 
                onChange={(e) => this.handleAmountChange(e.target.value)}
                />

                <button onClick={this.handleCreate}>Create</button>
                </div>

                <div>
                    {this.props.paymentsArray.map((element) => {
                        return(
                            <p>
                                {element.name} owes {element.lender} ${element.totalOwed}. 
                                <button onClick={this.toggleEdit}>Edit</button>
                                <button onClick={() => this.props.deleteItem(element.id)}>Delete</button>
                            </p>
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default Payments
