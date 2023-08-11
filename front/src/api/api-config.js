let backendHost;

const hostname = window && window.location && window.location.hostname;

backendHost = "http://localhost:8080";
// backendHost = "http://10.125.121.173:8080";

export const API_BASE_URL = `${backendHost}`;
