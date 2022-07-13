import React from 'react'
import './History.css';
import Table from 'react-bootstrap/Table';

function History({dataHistory}) {

 
	return (
		<>
		  <div className="history">
		    <div className="history-header">History</div>
        <Table borderless hover size="sm">
          <thead>
            <tr>
              <th>Status</th>
              <th>Amount (ASK)</th>
              <th>Date</th>
			   		  <th>From Address</th>
				    	<th>To Address</th>
				  	  <th>Transaction ID</th>
            </tr>
          </thead>
         <tbody>
           <tr>
             <td>Mark</td>
             <td>Otto</td>
             <td>@mdo</td>
           </tr>
           <tr>
             <td>Jacob</td>
             <td>Thornton</td>
             <td>@fat</td>
           </tr>
           <tr>
             <td>@twitter</td>
           </tr>
         </tbody>
        </Table> 	
			</div>
			
		</>
	)
}

export default History;
