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

	const [temperature, setTemperature] = useState(0);

	/*
		Get location
	*/
	const getLocationInfo = async () => {
		const response = await fetch('https://apip.cc/json');
		const locationData = await response.json();

		setLocationInfo(locationData);

		getTemperature(locationData.Latitude, locationData.Longitude);
	}

	const getTemperature = async (lat: string, lon: string) => {
		const response = await fetch(`https://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}.09&product=astro&output=json`);
		const temperatureData = await response.json();

		setTemperature(convertToFahrenheit(temperatureData.dataseries[0].temp2m));
	}


	/*
		Convert celsius to fahrenheit
	*/
	const convertToFahrenheit = (temp: string) => {
		return (parseInt(temp) * 1.8) + 32;
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
		{ locationInfo
			? <>
				<ul>
					<li><b>City</b>: { locationInfo.City }</li>
					<li><b>State</b>: { locationInfo.RegionName } ({ locationInfo.RegionCode })</li>
					<li><b>Zip</b>: { locationInfo.Postal }</li>
					<li><b>Time Zone</b>: { locationInfo.TimeZone }</li>
					<li><b>Lat/Lon</b>: { locationInfo.Latitude }/{ locationInfo.Longitude }</li>
					<li><b>Temperature</b>: { temperature }</li>
				</ul>
			</>
			: <h2>Loading...</h2>
		}
		</>
	);
}