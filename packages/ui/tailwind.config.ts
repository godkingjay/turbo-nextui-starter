import { Config } from "tailwindcss";
import sharedConfig from "tailwind-config/tailwind.config";
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config: Pick<Config, "darkMode" | "plugins" | "presets"> = {
	darkMode: "class",
	plugins: [nextui({})],
	presets: [sharedConfig],
};

export default config;
