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
             createMode: false,
             id: null,
             changedAmount: 0
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

    newToggleEdit = () => {
        this.setState({editMode: !this.state.editMode})
    }

    toggleEdit = (id, changedAmount) => {
        this.setState({
            editMode: !this.state.editMode,
            createMode: false,
            id,
            changedAmount
        })
    }
    
    toggleCreate = () => {
        this.setState({
            createMode: !this.state.createMode,
            editMode: false
        })
    }
    
    handleEdit = () => {
        let newAmount = this.state.changedAmount - this.state.editAmount
        this.props.editItem(this.state.id, newAmount)
        this.toggleEdit()
        this.setState({
            editAmount: '',
            
        })
    }
    
    handleCreate = () => {
        this.props.createItem(this.state.name, this.state.lender, this.state.amount)
        this.setState({
            name: '',
            lender: '',
            amount: ''
        })
        this.toggleCreate()
    }

    //Rendering of the elements


    render() {


        if(this.state.createMode === true && this.state.editMode === false){
            return(
                <div className="createMode">
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
                <br />
                <br />
                <button onClick={this.toggleCreate}>Cancel</button>
                <button onClick={this.handleCreate} id="clickMe">Create</button>
                </div>
            )
        }else if(this.state.editMode === true && this.state.createMode === false){
            return (
                <div className="editMode">
                <p>
                     How much did you pay to the lender?
                <br />
                <br />
                    <input 
                        value={this.state.editAmount} 
                        placeholder='Enter an amount' 
                        onChange={(e) => this.handleEditChange(e.target.value)}
                    />

                    <button onClick={this.newToggleEdit}>Cancel</button>
                    <button onClick={this.handleEdit} id="clickMe">Save</button>

                </p>
            </div>
            )
        }else{
            return(
                <div className="activePayments">
                    <div className="newLoan">
                        <h2>Loans</h2>
                        <div>
                            <h2>Create a new loan</h2>
                            <button id="createModeBtn" onClick={this.toggleCreate}>+</button>
                        </div>
                    </div>
                    {this.props.paymentsArray.filter((person) => person.changedAmount > 0).map((element) => {
                        return(
                            <div className="stylePayments">
                                <p>
                                    <u>{element.name}</u> owes <u>{element.lender}</u> ${element.changedAmount}
                                </p>
                                <div className="buttonDiv">
                                    <button onClick={() => this.toggleEdit(element.id, element.changedAmount)}>Make a payment</button>
                                    <button onClick={() => this.props.deleteItem(element.id)}>Delete</button>
                                </div>
                                    
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
}

export default Payments