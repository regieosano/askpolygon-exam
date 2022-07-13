import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Receive-Ask.css';
import env from "react-dotenv";

function ReceiveAsk() {
	return (
		<>
		  <Row className="receive-ask receive-background-color">
				<Col>
				  <div>
				     <div className="receive-ask-title">Receive ASK</div>
						 <div>ERC-20</div>
						 <div>{env.ADDRESS}</div>
					</div>
				 
				</Col>
				<Col>
				  
				</Col>
			</Row>
		</>
	)
}

export default ReceiveAsk;