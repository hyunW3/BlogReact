import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WriteContent = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const postContent = () => {
		let databody = {
			"title" : title,
			"content" : content,
			"thumbs" : 0
		}
		fetch('/contents', {
			method: 'POST',
			body: JSON.stringify(databody),
			headers: {
				'Content-Type':'application/json'
			},
		})
		
	}
	return(
		<div>
			<h2>WriteContent</h2>
			<form >
				<input type="title" style={{'width':'80%'}}
					value = {title}
					onChange={({ target : {value}}) => setTitle(value)}
					placeholder="이곳에 제목을 입력하세요"/>
				<br/>
				<input type="content" style={{'width':'80%','height':'450px'}}
					value = {content}
					onChange={({ target : {value}} ) => setContent(value)}
					placeholder="이곳에 내용을 입력하세요"/>
				<div style={{'margin':'10px'}}>
					<Link to='/'>
						<button type="BACK" > BACK </button>
						<button type="submit" onClick={postContent}
							> POST </button>
					</Link>
				</div>
			</form>
		</div>
	);
}
export default WriteContent;