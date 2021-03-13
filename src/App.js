import React, { Component } from 'react';
import TransactionForm from './component/TransactionForm';
import TransactionList from './component/TransactionList';
// import firebaseConnect from './firebaseConnect';

class App extends Component {
  render() {

    return (
      <section className="container">
        <br/>
        <br/>
        <div className="row">
          <TransactionForm />
          <TransactionList/>
        </div>
      </section>
    );
  }
}

export default App;