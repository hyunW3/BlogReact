import React, {Component} from 'react';

class Contents_list extends Component {

  state = {users: []} // id, titles, date, thumbs 


  componentDidMount() {
    fetch('/titles')
      .then(res => res.json())
      .then(users => this.setState({users})); // TODO1 : 
  };
	render(){
		return(
			<div className="contents">
        	{this.state.users.map(user =>
          		<div key={user.id}>
            		<h3>
						{user.title} 
						 👍{user.thumbs}
					</h3>
					{user.date}에 작성
					<hr/>
          		</div>
        	)}
			</div>
		)
		
	}
}
export default Contents_list;