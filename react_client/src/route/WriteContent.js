import React from 'react';


const WriteContent = () => {
	return(
		<div>
			<h2>WriteContent</h2>
			<div >
				<input type="text" style={{'width':'80%'}}
					placeholder="이곳에 제목을 입력하세요"/>
				<br/>
				<input type="text" style={{'width':'80%','height':'450px'}}
					placeholder="이곳에 내용을 입력하세요"/>
				<div style={{}}>
					<button type="reset" >RESET</button>
					<button type="submit"> POST </button>
					
				</div>
			</div>
		</div>
	)
}
export default WriteContent;