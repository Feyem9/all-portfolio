// Frontend configuration
// - Use REACT_APP_API_URL to override the API base (example: REACT_APP_API_URL=http://localhost:3001)
// - Use REACT_APP_BACKEND_PORT to override reported backend port when needed
// Defaults chosen for local dev: backend on 3001, frontend dev server on 3003

const envApi = process.env.REACT_APP_API_URL as string | undefined;

// Ensure no trailing slash and append API path
// Default backend port is 3001 (matches backend start:dev script)
export const API_BASE_URL: string = 'https://all-portfolio.onrender.com/api/portfolio';

// Frontend dev server port (useful for docs/scripts). Default to 3003 which matches your dev bundle.
export const FRONTEND_PORT: number = Number(process.env.PORT) || 3003;

// Backend port used for quick reference; can be overridden with REACT_APP_BACKEND_PORT
export const BACKEND_PORT: number = Number(process.env.REACT_APP_BACKEND_PORT) || 3001;

// Helper for debugging
export function debugConfig() {
	return {
		API_BASE_URL,
		FRONTEND_PORT,
		BACKEND_PORT,
		envApiDefined: !!envApi,
	};
}
