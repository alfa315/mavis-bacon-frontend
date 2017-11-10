import React from 'react'

const FeedbackContainer = (props) => (
	props.rightOrWrong === 'true' 
		? <div className="good">NICE WORK</div> 
		: props.rightOrWrong === 'false' 
		? <div className="bad">YOU IDIOT</div> 
		: <div></div>
)

export default FeedbackContainer