import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Ask.css';

function Ask() {
  return (
		<>
		  <Row>
        <Col sm={4}>
			    <div className="ask background-color1">
		         <div className="ask-title">ASK</div>
             <div className="total-balance">Total Balance ?</div>
			      <div className="total-balance-value">4533422</div>
			    </div>
	    	</Col>
        <Col sm={8}>
			    <div className="ask background-color2">
		        <div className="welcome-title">Welcome to ASK Wallet Page.</div>
            <div className="wallet-address">Please Enter a Wallet Address</div>
				    <div className="input-wallet-address ">Input</div>
			    </div>
	    	</Col>
      </Row>
      
		</>
   
  );
}

export default Ask;
