import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/transactionAction";
import { bindActionCreators } from "redux";

class TransactionForm extends Component {
    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if(this.props.currentIndex === -1)
            return {
                notetitle: '',
                notecontent: '',
                notedate: ''
            }
        else 
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProsp) {
        if(prevProsp.currentIndex != this.props.currentIndex || prevProsp.list.length != this.props.list.length)
            this.setState({
                ...this.returnStateObject()
            });
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.props.currentIndex == -1) 
            this.props.insertTransaction(this.state)
        else
            this.props.updateTransaction(this.state)
    };

    render() {
        return (
            <div className="col-4">
                <form   autoComplete="off"
                        onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="notetitle">Title</label>
                        <input  name="notetitle" 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter title" 
                                value={this.state.notetitle}
                                onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="notecontent">Content</label>
                        <textarea   name="notecontent" 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Enter content..." 
                                    value={this.state.notecontent} 
                                    onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="notedate">Date</label>
                        <input  name="notedate" 
                                type="date" 
                                className="form-control" 
                                value={this.state.notedate} 
                                onChange={this.handleInputChange} />
                    </div>
                    <button type="submit" className="btn btn-dark btn-block">Save</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators ({
        insertTransaction: actions.Insert,
        updateTransaction: actions.Update
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);