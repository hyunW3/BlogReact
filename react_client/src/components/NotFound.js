import React from 'react';
import { Redirect } from 'react-router-dom';
class NotFound extends React.Component {
	state = {shouldRedirect : false}
	componentDidMount(){
		setTimeout( () => this.setState({shouldRedirect : true})
			,2000);
	}
	render() {
		if (this.state.shouldRedirect){
			console.log("NotFound");
			return <Redirect to={'/'} />
		}
		return(
			<div>
				<h2>404 Page Not Found</h2>
			</div>
		);
		
	}
}
export default NotFound;