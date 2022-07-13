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
					{
						dataHistory.map((data, index) => {
							return (
								<tr key={index}>
								  <td>None</td>
							  	<td>{data.value}</td>
							  	<td>{data.timeStamp}</td>
									<td>{data.from}</td>
									<td>{data.to}</td>
									<td>{data.transactionIndex}</td>
							  </tr>
							)
						})
					}
               
         </tbody>
        </Table> 	
			</div>
			
		</>
	)
}

export default History;
