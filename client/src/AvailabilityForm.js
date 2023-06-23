// src/components/AvailabilityForm.js

import React, { useState } from "react";

const AvailabilityForm = () => {
	const [availability, setAvailability] = useState("");
	const [topic, setTopic] = useState("");
	const [timeSlot, setTimeSlot] = useState("");

	const handleAvailabilitySubmit = async () => {
		try {
			// Make an API call to submit trainee's availability, topic, and time slot
			// Send the availability, topic, and time slot data to the server

			// Clear the input fields after submitting
			setAvailability("");
			setTopic("");
			setTimeSlot("");
		} catch (error) {
			console.error("Error submitting availability:", error);
		}
	};

	return (
		<div>
			<h2>Enter Your Availability</h2>
			<input
				type="text"
				value={availability}
				onChange={(e) => setAvailability(e.target.value)}
			/>
			<h2>Select Programming Topic</h2>
			<select value={topic} onChange={(e) => setTopic(e.target.value)}>
				<option value="">Select Topic</option>
				<option value="JavaScript">JavaScript</option>
				<option value="Python">Python</option>
				<option value="Java">Java</option>
				{/* Add more options for other programming topics */}
			</select>
			<h2>Select Time Slot</h2>
			<select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
				<option value="">Select Time Slot</option>
				<option value="Morning">Morning</option>
				<option value="Afternoon">Afternoon</option>
				<option value="Evening">Evening</option>
				{/* Add more options for other time slots */}
			</select>
			<button onClick={handleAvailabilitySubmit}>Submit</button>
		</div>
	);
};

export default AvailabilityForm;
