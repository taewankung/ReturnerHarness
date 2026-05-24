export type ThemeConfig = {
	name: string;
	colors: {
		primary: string;
		secondary: string;
		accent: string;
		foreground: string;
		background: string;
		muted: string;
		success: string;
		warning: string;
		error: string;
		info: string;
	};
	icons: {
		spinner: string[];
		tool: string;
		assistant: string;
		user: string;
		system: string;
		success: string;
		error: string;
	};
};

export const defaultTheme: ThemeConfig = {
	name: 'default',
	colors: {
		primary: 'cyan',
		secondary: 'white',
		accent: 'cyan',
		foreground: 'white',
		background: 'black',
		muted: 'gray',
		success: 'green',
		warning: 'yellow',
		error: 'red',
		info: 'blue',
	},
	icons: {
		spinner: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
		tool: '  ⏵ ',
		assistant: '⏺ ',
		user: '> ',
		system: 'ℹ ',
		success: '✓ ',
		error: '✗ ',
	},
};

export const darkTheme: ThemeConfig = {
	name: 'dark',
	colors: {
		primary: '#7aa2f7',
		secondary: '#c0caf5',
		accent: '#bb9af7',
		foreground: '#c0caf5',
		background: '#1a1b26',
		muted: '#565f89',
		success: '#9ece6a',
		warning: '#e0af68',
		error: '#f7768e',
		info: '#7dcfff',
	},
	icons: {
		spinner: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
		tool: '  ⏵ ',
		assistant: '⏺ ',
		user: '> ',
		system: 'ℹ ',
		success: '✓ ',
		error: '✗ ',
	},
};

export const minimalTheme: ThemeConfig = {
	name: 'minimal',
	colors: {
		primary: 'white',
		secondary: 'white',
		accent: 'white',
		foreground: 'white',
		background: 'black',
		muted: 'gray',
		success: 'white',
		warning: 'white',
		error: 'white',
		info: 'white',
	},
	icons: {
		spinner: ['-', '\\', '|', '/'],
		tool: '  > ',
		assistant: ': ',
		user: '> ',
		system: '# ',
		success: '+ ',
		error: '! ',
	},
};

export const cyberpunkTheme: ThemeConfig = {
	name: 'cyberpunk',
	colors: {
		primary: '#ff007c',
		secondary: '#00fff9',
		accent: '#ffe600',
		foreground: '#00fff9',
		background: '#0d0d0d',
		muted: '#444444',
		success: '#00ff41',
		warning: '#ffe600',
		error: '#ff003c',
		info: '#00fff9',
	},
	icons: {
		spinner: ['◐', '◓', '◑', '◒'],
		tool: '  ▶ ',
		assistant: '◆ ',
		user: '▸ ',
		system: '⚡ ',
		success: '✦ ',
		error: '✖ ',
	},
};

export const solarizedTheme: ThemeConfig = {
	name: 'solarized',
	colors: {
		primary: '#268bd2',
		secondary: '#839496',
		accent: '#2aa198',
		foreground: '#839496',
		background: '#002b36',
		muted: '#586e75',
		success: '#859900',
		warning: '#b58900',
		error: '#dc322f',
		info: '#268bd2',
	},
	icons: {
		spinner: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
		tool: '  ⏵ ',
		assistant: '⏺ ',
		user: '> ',
		system: 'ℹ ',
		success: '✓ ',
		error: '✗ ',
	},
};

export const greenTheme: ThemeConfig = {
	name: 'green',
	colors: {
		primary: '#00cc66',
		secondary: '#66ff99',
		accent: '#00cc66',
		foreground: '#ffffff',
		background: '#001a0d',
		muted: '#40805c',
		success: '#00cc66',
		warning: '#ffff00',
		error: '#ff3333',
		info: '#00cc66',
	},
	icons: {
		spinner: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
		tool: '  ⏵ ',
		assistant: '⏺ ',
		user: '> ',
		system: 'ℹ ',
		success: '✓ ',
		error: '✗ ',
	},
};

export const darkGreenTheme: ThemeConfig = {
    name: 'dark-green',
    colors: {
        primary: '#2ecc71',
        secondary: '#a7f3d0',
        accent: '#16a34a',
        foreground: '#e6fff2',
        background: '#021a12',
        muted: '#3b7a5a',
        success: '#57d986',
        warning: '#f6d365',
        error: '#ff6b6b',
        info: '#7ee7c6',
    },
    icons: {
        spinner: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
        tool: '  ⏵ ',
        assistant: '⏺ ',
        user: '> ',
        system: 'ℹ ',
        success: '✓ ',
        error: '✗ ',
    },
};

export const BUILTIN_THEMES: Record<string, ThemeConfig> = {
	default: defaultTheme,
	dark: darkTheme,
	minimal: minimalTheme,
	cyberpunk: cyberpunkTheme,
	solarized: solarizedTheme,
	green: greenTheme,
	'dark-green': darkGreenTheme,
};

export function getTheme(name: string): ThemeConfig {
	return BUILTIN_THEMES[name] ?? defaultTheme;
}
