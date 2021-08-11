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
// TODO2 : after update, db API should be called 
  thumbsUp = (id) => {
	  let newArr = [...this.state.contents]
	  //console.log(newArr)
	  newArr.map(data =>{
		  if(data._id === id) {
			data.thumbs = data.thumbs + 1;
		  }
	  });
	  this.setState({newArr});
  }
  // thumbsUp DB update part(TODO2)  
  /*
  componentWillUnmount(){
	  
  } 
  */
  // 비동기 : https://www.daleseo.com/js-async-async-await/
  componentDidMount() {
    //fetch('/titles')
	fetch('/contents')
      .then(res => res.json()) // promise 문법
	  .then(res => {
		res.map((data) => {
			if (this.state.contents[0].id === ""){
				this.setState({ contents : [data] } )
			}else {
				this.setState({
					contents : [...this.state.contents ,data]
				})
			}
			//console.log(this.state.contents)
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