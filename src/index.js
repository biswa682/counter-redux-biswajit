import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import CounterComponent from './CounterComponent'
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
const reducer = (state, action) => {
			switch(action.type){
				case "ADD":
					state = state + action.payload
					break;
				case "SUB":
					state = state - action.payload
					break
				case "DEFAULT":
					state = this.state
					break
				default:	
			}
			return state;
		}
		const store = createStore(reducer, 0);

		// store.dispatch({
		// 	type: "ADD",
		// 	payload: 1
		// })

		// store.dispatch({type: "ADD",payload: 1})
		// const increament = () => {
		// 	store.dispatch({
		// 		type: "ADD",
		// 		payload: 1
		// 	})
		// 	console.log("ok")
		// }
		// console.log(store.getState())



ReactDOM.render(<Provider store={store}><CounterComponent /></Provider>, document.getElementById('root'));
registerServiceWorker();