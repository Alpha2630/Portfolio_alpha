// Configuration des endpoints API
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const apiEndpoints = {
  contact: {
    send: `${API_URL}/send`,
    getMessages: `${API_URL}/messages`,
  }
};