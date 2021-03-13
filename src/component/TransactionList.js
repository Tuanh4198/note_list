import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/transactionAction";
import { bindActionCreators } from "redux";

class TransactionList extends Component {
    state = {
        key: ''
    }

    componentDidUpdate(prevProsp) {
        console.log(prevProsp);
    }

    handleEdit = index => {
        this.props.updateTransactionIndex(index);
    };

    handleDelete = index => {
        this.props.deleteTransaction(index);
    };

    handleSearch = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    actionSearch = () => {
        this.props.searchTransaction(this.state.key);
    };

    render() {
        return (
            <div className="col">
                <div className="form-group">
                    <label>Search</label>
                    <input  type="text" className="form-control" name="key" placeholder="Enter your key word..." 
                            onChange={this.handleSearch} />
                    <button type="button" className="btn btn-dark btn-block" onClick={this.actionSearch}>Search</button>
                </div>
                <br/>
                <div className="table-responsive">
                    <table className="table table-dark">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col">Date</th>
                            <th scope="col">...</th>
                            </tr>
                        </thead>
                        <tbody>
                {
                    this.props.list.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{item.notetitle}</td>
                                <td>{item.notecontent}</td>
                                <td>{item.notedate}</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" 
                                            className="btn btn-light btn-sm"
                                            onClick={() => this.handleEdit(index)}>EDIT</button>
                                    {/*  */}
                                    <button type="button" 
                                            className="btn btn-danger btn-sm"
                                            onClick={() => this.handleDelete(index)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators ({
        deleteTransaction: actions.Delete,
        updateTransactionIndex: actions.UpdateIndex,
        searchTransaction: actions.Seaarch
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);