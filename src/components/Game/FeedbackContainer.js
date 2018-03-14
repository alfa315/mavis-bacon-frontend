import React from 'react'

const FeedbackContainer = (props) => (
	props.rightOrWrong === 'true'
		? <div className="good">NICE WORK</div>
		: props.rightOrWrong === 'false'
		? <div className="bad">WRONG</div> 
		: <div></div>
)

export default FeedbackContainer
