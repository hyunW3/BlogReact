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
	
  // TODO2 - thumbsUp DB update part 
  /*  
  componentWillUnmount(){
	  
  } */
  componentDidMount() {
	fetch('/contents')
      .then(res => res.json())
	  .then(res => {
		res.forEach((data) => {
			// const { stats } = this.state;
			if (this.state.contents[0].id === ""){
				this.setState({ contents : [data] } );
			}else {
				this.setState(prevState => ({
					contents : [...prevState.contents, data]
				}));
			}
		});
	  })
  };
	
  thumbsUp = (id) => {
	const { stats } = this.state;
	const newArr = [...stats.contents]
	stats.contents.forEach((data) =>{
		if(data._id === id) {
			newArr._id += 1;
		}
	});
	this.setState(newArr); // this.setState({newArr});
  }
  
	render(){
		// const { stats } = this.state;
		return(
			<div className="contents" >
			<p>{this.state.contents.title}</p>
			
			{this.state.contents.map((content) => (
          		<div key={content._id}>
            		<h3>
						<Link to =  {`/view/${content._id}` }  >
							{content.title} 
						</Link>
						
						<p onKeyPress={this.thumbsUp.bind(this,content._id)}>
						 👍{content.thumbs}
						</p>
					</h3>
					{content.date}에 작성
					<hr/>
          		</div>
			))};
			</div>
		)
		
	}
}
export default ContentsList;