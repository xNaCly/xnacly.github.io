import themes from "../themes/themes.json";

/**
 * @param themeName `"light" || "dark"`
 * @returns `void`
 * @description applies theme variables to the current stylesheet
 */
function applyTheme(themeSelected) {
	const themeName = Object.keys(themes).includes(themeSelected) ? themeSelected : "dark";
	const themeValues = themes[themeName];
	const themeKeys = Object.keys(themeValues);
	themeKeys.forEach((themeKey) => {
		document.documentElement.style.setProperty(themeKey, themeValues[themeKey]);
	});
}

export default applyTheme;
