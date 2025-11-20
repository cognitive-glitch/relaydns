import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";

const root = document.getElementById("root");
if (root) {
	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<ThemeProvider defaultTheme="dark">
				<App />
			</ThemeProvider>
		</React.StrictMode>,
	);
}
