import React, { Component } from 'react'

export class History extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             history: []
        }
    }
    
    render() {
        return (
            <div className="history">
                <h3>History</h3>
                {this.props.paymentsArray.filter((amount) => amount.changedAmount <= 0).map((element) => {
                    return(
                        <div className="specHistory" key={element.id}>
                            <li>{element.name} has completed their loan with {element.lender}!</li>
                        </div>
                        
                    )
                })}
            </div>
        )
    }
}

export default History
