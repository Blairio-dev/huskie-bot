const palette = {
	pinkDark: 'hsl(335, 23%, 18%)',
	purple: 'hsl(240, 22%, 18%)',
	purpleLight: 'hsl(240, 22%, 48%)',
	transparent: 'hsla(0, 0%, 70%, 15%)',
	yellow: 'hsl(48, 88%, 67%)',
	white: 'hsl(0, 0%, 100%)',
};

const { pinkDark, purple, purpleLight, yellow, white } = palette;

const colours = {
	body: white,
	buttonBackground: purple,
	buttonBackgroundDisabled: 'hsl(240, 22%, 28%)',
	buttonBorder: purpleLight,
	buttonBorderDisabled: 'hsl(240, 22%, 38%)',
	buttonBorderActive: yellow,
	componentBackground: purple,
	pageBackground: pinkDark,
};

export { colours, palette };
