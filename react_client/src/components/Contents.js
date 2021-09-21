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
	
  componentDidMount() {
	fetch('/contents')
      .then(res => res.json())
	  .then(res => {
		res.forEach((data) => {
			const { contents } = this.state;
			if (contents[0].id === ""){
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
	
  // TODO2 - thumbsUp DB update part 
  
  componentWillUnmount(){
	  const { contents } = this.state;
	console.log("is unmount",contents);  
  } 
	
  thumbsUp = (targetId) => {
	const { contents } = this.state;
	const newArr = [];
	contents.forEach((data) =>{
		
		if(data.id === targetId) {
			const { id, title, date, thumbs} = data;
			const newThumbs = thumbs+1;
			newArr.push({ id, title, date,thumbs : newThumbs});
		}else newArr.push(data); 
		
	});
	  
	this.setState({contents : newArr}); 
  }
  
  render(){
	  const { contents } = this.state;
		return(
			<div className="contents" >
			<p>{contents.title}</p>
			<div className="contentsList">
			{contents.map((content) => (
          		<div key={content.id}>
            		<h3>
						<Link to =  {`/view/${content.id}` }  >
							{content.title} 
						</Link>
						
						<p onClick={this.thumbsUp.bind(this,content.id)}>
						 👍{content.thumbs}
						</p>
					</h3>
					{content.date}에 작성
					<hr/>
          		</div>
			))}
			</div>
			</div>
		)
		
	}
}
export default ContentsList;