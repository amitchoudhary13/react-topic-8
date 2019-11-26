import React, { Component } from 'react';
import './App.css';

let counter = 0;
class App extends Component {
	constructor(){
		super();
		this.state = {
			number: 5,
			numberArray:[]
		};
	}
	clickHandler = () => {	
		console.log(this.state);
		counter +=1;
		this.setState(prevState =>({numberArray:[...prevState.numberArray,counter]}));
				console.log(this.state);
	}
	
  render() {
    return (
      <div className="App">
		<p className="tableHeader">Mathematical Table</p>
		<button onClick={this.clickHandler}>Generate Table</button>
        <table>
		{this.state.numberArray.map((data,index)=>(
			<tbody key={index}>
				<tr>
					<td>
						{this.state.number}
					</td>
					<td>
						X
					</td>
					<td>
						{data}
					</td>
					<td>
						{5*data}
					</td>
				</tr>
			</tbody>	
			))
		}
				
		</table>
      </div>
    );
  }
}

export default App;
