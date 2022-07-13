import NavBar from '../components/navbar/NavBar';
import Ask from '../components/ask/Ask';
import ReceiveAsk from '../components/receive-ask/Receive-Ask';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import env from "react-dotenv";

function Main() {

  useEffect(() => {
		try {
			Axios.request({
				method: 'GET',
				baseURL: `${env.API_URL}?module=account&action=txlist&address=0xaA3717090CDDc9B227e49d0D84A28aC0a996e6Ff&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=E2R8FK55WG87J5PIFM7KS6FJK812IH1SQY`,
			
		 
			}).then((data) => {
				console.log(data);
			 })
		} catch (error) {
			
		}
	})


	return (
		<>
			<NavBar />
			<Ask />
			<ReceiveAsk />
		</>
	)
}

export default Main;
