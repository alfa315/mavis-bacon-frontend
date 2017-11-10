import React from 'react'

const FeedbackContainer = (props) => (
	props.rightOrWrong === 'true' 
		? <div className="nice-work">NICE WORK</div> 
		: props.rightOrWrong === 'false' 
		? <div className="bad-work">YOU IDIOT</div> 
		: <div></div>
)

export default FeedbackContainer