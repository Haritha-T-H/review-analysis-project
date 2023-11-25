import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "bootstrap/dist/css/bootstrap.min.css"
import './backend.css';
import icon from './search.png'
import boy from './boy.gif'
import loader from './loading.gif'
import search from './search.gif'
import { BsDownload } from "react-icons/bs";

function BackendAPI() {

	const [url, setUrl] = useState('');
	const [loading, setLoading] = useState(false);
	const [positive, setPositive] = useState('');
	const [negative, setNegative] = useState('');


	const handleSubmit = async (e) => {
		setLoading(true);

		try {
			const response = await fetch(`http://127.0.0.1:5000/api/?device=${url}`);
			const data = await response.json();
			console.log(data.data['positive']);
			setPositive(data.data['positive']);
			setNegative(data.data['negative']);
			console.log('data.result:', data);

		} catch (error) {
			console.error('Error:', error);
			// setResultEng('An error occurred.');
		}

		setLoading(false);
		e.preventDefault();
	};


	return (
		<div className='container'>
			<div className='search-box-container'>

				{/* <input
					className='url-box'
					type="text"
					placeholder="Choose a device"
					value={url}
					onChange={(e) => setUrl(e.target.value)}
				/> */}
				<select
					className='url-box'
					title='choose a device'
					value={url}
					onChange={(e) => setUrl(e.target.value)}
				>
					<option value="" disabled>Select a device</option>
					{[
						"All-New Fire HD 8 Tablet, 8 HD Display, Wi-Fi, 16 GB - Includes Special Offers, Magenta",
						"Kindle Oasis E-reader with Leather Charging Cover - Merlot, 6 High-Resolution Display (300 ppi), Wi-Fi - Includes Special Offers,,",
						"Amazon Kindle Lighted Leather Cover,,,\r\nAmazon Kindle Lighted Leather Cover,,,",
						"Amazon Kindle Lighted Leather Cover,,,\r\nKindle Keyboard,,,",
						"Kindle Keyboard,,,\r\nKindle Keyboard,,,",
						"All-New Fire HD 8 Tablet, 8 HD Display, Wi-Fi, 32 GB - Includes Special Offers, Magenta",
						"Fire HD 8 Tablet with Alexa, 8 HD Display, 32 GB, Tangerine - with Special Offers,",
						"Amazon 5W USB Official OEM Charger and Power Adapter for Fire Tablets and Kindle eReaders,,,\r\nAmazon 5W USB Official OEM Charger and Power Adapter for Fire Tablets and Kindle eReaders,,,",
						"All-New Kindle E-reader - Black, 6 Glare-Free Touchscreen Display, Wi-Fi -  Includes Special Offers,,",
						"Amazon Kindle Fire Hd (3rd Generation) 8gb,,,\r\nAmazon Kindle Fire Hd (3rd Generation) 8gb,,,",
						"Fire Tablet, 7 Display, Wi-Fi, 8 GB - Includes Special Offers, Magenta",
						"Kindle Oasis E-reader with Leather Charging Cover - Black, 6 High-Resolution Display (300 ppi), Wi-Fi - Includes Special Offers,,",
						"Amazon - Kindle Voyage - 4GB - Wi-Fi + 3G - Black,,,\r\nAmazon - Kindle Voyage - 4GB - Wi-Fi + 3G - Black,,,",
						'Amazon - Kindle Voyage - 4GB - Wi-Fi + 3G - Black,,,\r\nFire HD 8 Tablet with Alexa, 8 HD Display, 16 GB, Tangerine - with Special Offers",',
						"Fire HD 8 Tablet with Alexa, 8 HD Display, 16 GB, Tangerine - with Special Offers,",
						"Amazon Standing Protective Case for Fire HD 6 (4th Generation) - Black,,,\r\nAmazon Standing Protective Case for Fire HD 6 (4th Generation) - Black,,,",
						"Certified Refurbished Amazon Fire TV (Previous Generation - 1st),,,\r\nCertified Refurbished Amazon Fire TV (Previous Generation - 1st),,,",
						"Brand New Amazon Kindle Fire 16gb 7 Ips Display Tablet Wifi 16 Gb Blue,,,",
						"Amazon Kindle Touch Leather Case (4th Generation - 2011 Release), Olive Green,,,\r\nAmazon Kindle Touch Leather Case (4th Generation - 2011 Release), Olive Green,,,",
						"Fire Kids Edition Tablet, 7 Display, Wi-Fi, 16 GB, Green Kid-Proof Case",
						"Amazon Kindle Paperwhite - eBook reader - 4 GB - 6 monochrome Paperwhite - touchscreen - Wi-Fi - black,,,",
						"Kindle Voyage E-reader, 6 High-Resolution Display (300 ppi) with Adaptive Built-in Light, PagePress Sensors, Wi-Fi - Includes Special Offers,",
						"Certified Refurbished Amazon Fire TV Stick (Previous Generation - 1st),,,\r\nCertified Refurbished Amazon Fire TV Stick (Previous Generation - 1st),,,",
						"Certified Refurbished Amazon Fire TV Stick (Previous Generation - 1st),,,\r\nKindle Paperwhite,,,",
						"Kindle Paperwhite,,,\r\nKindle Paperwhite,,,",
						"Amazon Fire Kids Edition Tablet, 7 Display, Wi-Fi, 16 GB, Blue Kid-Proof Case - Blue",
						"Kindle Paperwhite E-reader - White, 6 High-Resolution Display (300 ppi) with Built-in Light, Wi-Fi - Includes Special Offers,,",
						"Amazon Echo and Fire TV Power Adapter,,,\r\nAmazon Echo and Fire TV Power Adapter,,,",
						"Amazon Fire Hd 8 8in Tablet 16gb Black B018szt3bk 6th Gen (2016) Android,,,\r\nAmazon Fire Hd 8 8in Tablet 16gb Black B018szt3bk 6th Gen (2016) Android,,,",
						"Certified Refurbished Amazon Fire TV with Alexa Voice Remote,,,\r\nCertified Refurbished Amazon Fire TV with Alexa Voice Remote,,,",
						"Amazon - Fire 16GB (5th Gen, 2015 Release) - Black,,,\r\nAmazon - Fire 16GB (5th Gen, 2015 Release) - Black,,,",
						"Fire Tablet, 7 Display, Wi-Fi, 8 GB - Includes Special Offers, Black",
						"Echo (White),,,\r\nEcho (White),,,",
						'Echo (White),,,\r\nFire Tablet, 7 Display, Wi-Fi, 8 GB - Includes Special Offers, Tangerine"',
						"Echo (Black),,,\r\nEcho (Black),,,",
						"Echo (Black),,,\r\nAmazon 9W PowerFast Official OEM USB Charger and Power Adapter for Fire Tablets and Kindle eReaders,,,",
						"Amazon 9W PowerFast Official OEM USB Charger and Power Adapter for Fire Tablets and Kindle eReaders,,,\r\nAmazon 9W PowerFast Official OEM USB Charger and Power Adapter for Fire Tablets and Kindle eReaders,,,",
						"Amazon Fire Hd 6 Standing Protective Case(4th Generation - 2014 Release), Cayenne Red,,,\r\nAmazon Fire Hd 6 Standing Protective Case(4th Generation - 2014 Release), Cayenne Red,,,",
						"Amazon Fire Hd 6 Standing Protective Case(4th Generation - 2014 Release), Cayenne Red,,,\r\nAmazon 5W USB Official OEM Charger and Power Adapter for Fire Tablets and Kindle eReaders,,,",
						"Amazon Fire Hd 10 Tablet, Wi-Fi, 16 Gb, Special Offers - Silver Aluminum,,,\r\nAmazon Fire Hd 10 Tablet, Wi-Fi, 16 Gb, Special Offers - Silver Aluminum,,,",
						"Amazon - Amazon Tap Portable Bluetooth and Wi-Fi Speaker - Black,,,\r\nAmazon - Amazon Tap Portable Bluetooth and Wi-Fi Speaker - Black,,,",
						"Coconut Water Red Tea 16.5 Oz (pack of 12),,,\r\nAmazon Fire Tv,,,",
						"Amazon Fire Tv,,,\r\nAmazon Fire Tv,,,",
						'Amazon Fire Tv,,,\r\nKindle Dx Leather Cover, Black (fits 9.7 Display, Latest and 2nd Generation Kindle Dxs)",,',
						"Kindle Dx Leather Cover, Black (fits 9.7 Display, Latest and 2nd Generation Kindle Dxs),,",
						"Amazon Kindle Fire 5ft USB to Micro-USB Cable (works with most Micro-USB Tablets),,,\r\nAmazon Kindle Fire 5ft USB to Micro-USB Cable (works with most Micro-USB Tablets),,,",
						"New Amazon Kindle Fire Hd 9w Powerfast Adapter Charger + Micro Usb Angle Cable,,,\r\nNew Amazon Kindle Fire Hd 9w Powerfast Adapter Charger + Micro Usb Angle Cable,,,",
						"New Amazon Kindle Fire Hd 9w Powerfast Adapter Charger + Micro Usb Angle Cable,,,\r\n",
					].map((device, index) => (
						<option key={index} value={device}>
							{device}
						</option>
					))}
				</select>

			</div>
			<button onClick={handleSubmit} className='button'>Search Device</button>
			{loading ? <img src={loader} className='loading' alt="Logo" /> : null}

			{/* {resultEng && !loading && (
				<p className='compression'>{original_txt_length} words compressed to {final_summ_length} words</p>
			)}

			{resultmsg === "Failed" && !loading && (
				<p className='compression'>I cannot understand this video. Please try a new link</p>
			)} */}


			{/* <img src={boy} className='boy' alt="Logo" /> */}
			{positive && !loading && (
				<div className='result-section'>
					<div>
						<div className='left-section' />
						<h1>{positive}</h1>
					</div>
					<div>
						<div className='right-section' />
						<h1>{negative}</h1>

					</div>
				</div>
			)}

		</div>
	);
}

export default BackendAPI;