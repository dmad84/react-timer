import React, { useState, useEffect } from 'react';
import {
	Card, CardText, CardBody,
	CardTitle, Button
} from 'reactstrap';

const Timer = () => {
	const [time, setTime] = useState(0);
	const [startTimer, setStartTimer] = useState(false);

	useEffect(() => {
		let interval = null;
		if (startTimer) {
			interval = setInterval(() => {
				setTime(seconds => seconds + 1);
			}, 1000);
			return () => clearInterval(interval);
		}
		return () => clearInterval(interval);
	  }, [startTimer]);

	  const toggle = () => {
		setStartTimer(!startTimer);
	  }
	
	  const Clear = () => {
		setTime(0);
		setStartTimer(false);
	  }
	  
	return (
		<Card className="mt-4">
			<CardBody>
				<CardTitle>Timer</CardTitle>
				<CardText><h2 className="h1">{time}{startTimer && 's'}</h2></CardText>
				<Button onClick={toggle} color="primary">{startTimer ? "Stop": 'Start'}</Button>{' '}
				<Button onClick={Clear} color="secondary">Clear</Button>{' '}
			</CardBody>
		</Card>
	)
};

export default Timer;