"use client";

import { useEffect, useState } from "react";

export const ClientLocation = () => {
	const [locationInfo, setLocationInfo] = useState({
		'City': '',
		'Latitude': '',
		'Longitude': '',
		'Postal': '',
		'RegionCode': '',
		'RegionName': '',
		'TimeZone': '',
		'status': '',
	});

	/*
		Get location
	*/
	const getLocationInfo = async () => {
		const response = await fetch('/apip.cc/json');
		const locationData = await response.json();

		setLocationInfo(locationData);
	}


	/*
		Fetch location info on page load
	*/
	useEffect(() => {
		getLocationInfo();
	}, []);


	return (
		<>
		<h1>Client:</h1>
		<ul>
			<li><b>City</b>: { locationInfo.City }</li>
			<li><b>State</b>: { locationInfo.RegionName } ({ locationInfo.RegionCode })</li>
			<li><b>Zip</b>: { locationInfo.Postal }</li>
			<li><b>Time Zone</b>: { locationInfo.TimeZone }</li>
			<li><b>Lat/Lon</b>: { locationInfo.Latitude }/{ locationInfo.Longitude }</li>
		</ul>
		</>
	);
}