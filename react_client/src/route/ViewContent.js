// https://www.sanity.io/guides/build-your-first-blog-using-react
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ViewContent = (props) => {
	const [postData, setPostData] = useState({
		_id : '',
		title : '',
		content : '',
		thumbs : '',
		date : ''
		
	});
	const { id } = useParams();	
	
	useEffect(()=> {
		console.log(id)
		fetch('/contents/view/'+id)
		.then(res => res.json())
		//.then(res => console.log(res.body[0].content)) //  {_id, title, 
		.then((res) => {
			  let data = res.body[0];
			console.log(data);
			  setPostData({_id : data._id,
			  	title : data.title,
				content : data.content,
				thumbs : data.thumbs,
				date : data.date
			  })
			}
		) //  {_id, title,content, thumbs, date, __v})
			
		//.then(res => console.log(postData))
		.catch(err => console.log(err))
		////onClick={() => console.log(this.postData)}>
	},[])
	return (
		<div key={postData._id} > 
			<div> 
				<h2>Title : {postData.title} </h2> 
				<h3>Content : {postData.content} </h3>
				<h4>👍 : {postData.thumbs} </h4>
				<h4>Date : {postData.date} </h4>
			</div>
		</div>
	);
}

export default ViewContent;
// https://www.sanity.io/guides/build-your-first-blog-using-react