import React, {Component} from 'react';
import { connect } from 'react-redux';
import CounterDisplay from './CounterDisplay';

class CounterComponent extends Component{
	render(){
		return(
			<div>
				<CounterDisplay showState={this.props.state} increment={()=> this.props.change("ADD")}  decrement={()=> this.props.change("SUB")}/>
			</div>
		)
	}
}


const mapStateToProps= (state) =>{
	return{
		state: state
	}
}
const mapDispatchToProps = (dispatch) =>{
	return{
		change: (type) =>{
			dispatch({
				type: type,
				payload: 1
			})
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

// : () =>{
// 			dispatch({
// 				type: "ADD",
// 				payload: 1
// 			})
// 		}
// 		decrement: () =>{
// 			dispatch({
// 				type: "SUB",
// 				payload: 1
// 			})
// 		}