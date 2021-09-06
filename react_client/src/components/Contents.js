import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class ContentsList extends Component {
  constructor(props){
	  super(props)
	  this.state = {
		 contents : [{
			 id : "",
			 title : "",
			 date : "",
			 thumbs : "",
	  	}],
	  }
  }
  thumbsUp = (id) => {
	  let newArr = [...this.state.contents]
	  newArr.map(data =>{
		  if(data._id === id) {
			data.thumbs = data.thumbs + 1;
		  }
	  });
	  this.setState({newArr});
  }
  // TODO2 - thumbsUp DB update part 
  /*  
  componentWillUnmount(){
	  
  } */
  componentDidMount() {
	fetch('/contents')
      .then(res => res.json())
	  .then(res => {
		res.map((data) => {
			if (this.state.contents[0].id === ""){
				this.setState({ contents : [data] } )
			}else {
				this.setState({
					contents : [...this.state.contents ,data]
				})
			}
		});
	  })
  };
  
	render(){
		
		return(
			<div className="contents">
			<p>{this.state.contents.title}</p>
			{this.state.contents.map(content =>
          		<div key={content._id}>
            		<h3>
						<Link to =  {"/view/"+content._id } key={content._id} >
							{content.title} 
						</Link>
						
						<p onClick={this.thumbsUp.bind(this,content._id)}>
						 👍{content.thumbs}
						</p>
					</h3>
					{content.date}에 작성
					<hr/>
          		</div>
        	)}
			</div>
		)
		
	}
}
export default ContentsList;