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
			if (this.state.contents[0].id === ""){
				this.setState({ contents : [{
			 			id : data._id,
			 			title : data.title,
			 			date : data.date,
			 			thumbs : data.thumbs,
						}] 
					});
			}else {
				this.setState(prevState => ({
					contents : [...prevState.contents, {
			 			id : data._id,
			 			title : data.title,
			 			date : data.date,
			 			thumbs : data.thumbs,
					}]
				}));
			}
		});
	  })
  };
	
  thumbsUp = (id) => {
	const { stats } = this.state;
	const newArr = [...stats.contents]
	stats.contents.forEach((data) =>{
		if(data.id === id) {
			console.log(data.id)
			newArr.id += 1;
		}
	});
	this.setState(newArr); // this.setState({newArr});
  }
  
  render(){
		return(
			<div className="contents" >
			<p>{this.state.contents.title}</p>
			<div className="contentsList">
			{this.state.contents.map((content) => (
          		<div key={content.id}>
            		<h3>
						<Link to =  {`/view/${content.id}` }  >
							{content.title} 
						</Link>
						
						<p onClick={this.thumbsUp}>
						 👍{content.thumbs}
						</p>
					</h3>
					{content.date}에 작성
					<hr/>
          		</div>
			))};
			</div>
			</div>
		)
		
	}
}
export default ContentsList;