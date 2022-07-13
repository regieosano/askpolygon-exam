import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function BrandExample() {
  return (
    <>
      <Navbar bg="light">
		   	<Navbar.Brand>
					<div className="block">
             <div className="top-title">Wallets with ASK</div>
             <div className="description">Track and manage your ASK holdings across all of the wallets that you use.</div>
          </div>
	  		 </Navbar.Brand>
      </Navbar>
      
    </>
  );
}

export default BrandExample;