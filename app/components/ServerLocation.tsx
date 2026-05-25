export const ServerLocation = async () => {
	let response = await fetch('https://apip.cc/json');
	const location = await response.json();

	response = await fetch(`https://www.7timer.info/bin/api.pl?lon=${location.Longitude}&lat=${location.Latitude}&product=astro&output=json`);
	const temperatureData = await response.json();

	const convertToFahrenheit = (temperature: string) => {
		return (parseFloat(temperature) * 1.8) + 32;
	}

	const temperature = convertToFahrenheit(temperatureData.dataseries[0].temp2m);

	return (
		<>
		<h1>Server:</h1>
		<ul>
			<li><b>City</b>: { location.City }</li>
			<li><b>State</b>: { location.RegionName } ({ location.RegionCode })</li>
			<li><b>Zip</b>: { location.Postal }</li>
			<li><b>Time Zone</b>: { location.TimeZone }</li>
			<li><b>Lat/Lon</b>: { location.Latitude }/{ location.Longitude }</li>
			<li><b>Temperature</b>: { temperature }°F</li>
		</ul>
		</>
	);
}