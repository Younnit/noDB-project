import React, { Component } from 'react'

export class History extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             history: []
        }
    }


    
    render() {
        const historyList = () => {
            let newList = []
            for(let i = 0; i < this.props.paymentsArray.length; i++){
                if(this.props.paymentsArray[i].changedAmount === 0){
                    newList.push(this.props.paymentsArray[i])
                }
            }
            this.setState({
                history: [...this.state.history, newList]
            })
        }
        return (
            <div className="history">
                <p>{historyList}</p>
            </div>
        )
    }
}

export default History
