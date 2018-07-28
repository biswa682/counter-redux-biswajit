import React from 'react';

export default (props) => {
	return(
		<div className="showCounter">
			<h1>Counter : {props.showState}</h1>
			<button onClick={props.increment}>Increment</button>
 			<button onClick={props.decrement}>Decreament</button>
		</div>
		)
}
// export default CounterDisplay;