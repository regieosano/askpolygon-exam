import NavBar from '../components/navbar/NavBar';
import Ask from '../components/ask/Ask';
import ReceiveAsk from '../components/receive-ask/Receive-Ask';
import History from '../components/history/History';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import env from "react-dotenv";

function Main() {

  useEffect(() => {
		try {
			Axios.request({
				method: 'GET',
				baseURL: `${env.API_URL}?module=account&action=txlist&address=${env.ADDRESS}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${env.API_KEY}`,
			 
			}).then((data) => {
				console.log(data.data.result);
			 })
		} catch (error) {
			  console.log(error);
		}
	})


	return (
		<>
			<NavBar />
			<Ask />
			<ReceiveAsk />
			<History />
		</>
	)
}

export default Main;
