import { useState } from "react";
import ChatBot from "react-chatbotify"

export const MyChatBot = () => {
	const [form, setForm] = useState({});
	const formStyle = {
		marginTop: 10,
		marginLeft: 20,
		border: "1px solid #491d8d",
		padding: 10,
		borderRadius: 5,
		maxWidth: 300
	}

	const flow={
		start: {
			message: "Hello there! What is your name?",
			function: (params) => setForm({...form, name: params.userInput}),
			path: "ask_query"
		},
		ask_query: {
			message: (params) => `Nice to meet you ${params.userInput}, what is your query?`,
			function: (params) => setForm({...form, age: params.userInput}),
			path: "ask_product"
		},
		ask_product: {
			message: "Do you own any product?",
			// alternative way to declare options, with sending of output disabled
			// more info here: https://react-chatbotify.com/docs/api/attributes
			// options: {items: ["Yes", "No"], sendOutput: false}
			options: ["Yes", "No"],
			chatDisabled: true,
			function: (params) => setForm({...form, pet_ownership: params.userInput}),
			path: "ask_choice"
		},
		ask_choice: {
			message: "Select at least 1 type that you are comfortable to work with:",
			// alternative way to declare checkboxes, with default configurations (i.e. min 1, max 4, send output and not reusable)
			// more info here: https://react-chatbotify.com/docs/api/attributes
			// checkboxes: ["Dog", "Cat", "Rabbit", "Hamster"]
			checkboxes: {items: ["Phone", "TV", "furniture", "fashion"], min: 1},
			chatDisabled: true,
			function: (params) => setForm({...form, pet_choices: params.userInput}),
			path: "end"
		},
		end: {
			message: "Thank you for your interest, we will get back to you shortly!",
			component: (
				<div style={formStyle}>
					<p>Name: {form.name}</p>
					<p>Age: {form.age}</p>
					<p>Pet Ownership: {form.pet_ownership}</p>
					<p>Pet Choices: {form.pet_choices}</p>
				</div>
			),
			options: ["New Application"],
			chatDisabled: true,
			path: "start"
		},
	}
	return (
		<ChatBot settings={{general: {embedded: true}, chatHistory: {storageKey: "example_basic_form"}}} flow={flow}/>
	);
};
