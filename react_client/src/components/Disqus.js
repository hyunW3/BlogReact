import React, {Component} from 'react';
import {DiscussionEmbed} from 'disqus-react';
class DisqusComment extends Component{
	render(){
		const disqusShortname = "react-blog-4"
    	const disqusConfig = {
			url: "https://react-ohbae-bzomu.run.goorm.io",
      		identifier: "article-id",
      		title: "Title of Your Article"
		}
		return(
			<DiscussionEmbed 
				style={{padding : "20px"}}
    			shortname={disqusShortname}
    			config={disqusConfig  }
			/>
		)
	}
}
export default DisqusComment;