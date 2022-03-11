import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//files
import "./index.css";
import "./components/header.js";
import App from "./App.js";

const theme = extendTheme({
	colors: {
		white: "#4FD1C5", 
		black: "#2B6CB0",
		brand: {
			100: "#f7fafc",
			// ...
			900: "#1a202c",
		},
	},
});

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<BrowserRouter>
		    <Routes>
		    	<Route path="*" element={<App />} />
		    </Routes>
	    </BrowserRouter>
	</ChakraProvider>,
	document.getElementById("root")
);
