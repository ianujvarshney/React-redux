import './App.css';
import React from 'react';

export default class App extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    await fetch('http://dummy.restapiexample.com/api/v1/employees').then(response => response.json()).then(result => {
      this.setState({
        data: result
      }); console.log("data=>", this.state.data);
    }
    );
  }

  render() {
    const { test } = this.state;
    return (
      <div className="App">
        <div className='section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-5'>
                <ul>
                  {test && test.map(datas => {
                    return (
                      <li>{datas}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

