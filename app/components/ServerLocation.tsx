export const ServerLocation = async () => {
	const response = await fetch('https://apip.cc/json');
	const locationData = await response.json();

	const location = locationData;

	return (
		<>
		<h1>Server:</h1>
		<ul>
			<li><b>City</b>: { location.City }</li>
			<li><b>State</b>: { location.RegionName } ({ location.RegionCode })</li>
			<li><b>Zip</b>: { location.Postal }</li>
			<li><b>Time Zone</b>: { location.TimeZone }</li>
			<li><b>Lat/Lon</b>: { location.Latitude }/{ location.Longitude }</li>
		</ul>
		</>
	);
}