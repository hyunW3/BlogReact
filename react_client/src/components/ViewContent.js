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
	const viewStyle = {margin_bottom : '0px'};
	const dataStyle = {margin : '0px'};
	useEffect(()=> {
		console.log(id)
		fetch('/contents/view/'+id)
		.then(res => res.json())
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
		).catch(err => console.log(err))
	},[])
	return (
		<div key={postData._id} > 
			<div> 
				<div className="viewcontent" >
					<h2 style={viewStyle}>{postData.title}  &nbsp;  👍 : {postData.thumbs} </h2>
				</div>
				<h4 style={dataStyle}>Date : {postData.date} </h4>
				<hr/>
				<h3>{postData.content} </h3>
				
			</div>
		</div>
	);
}

export default ViewContent;
// https://www.sanity.io/guides/build-your-first-blog-using-react