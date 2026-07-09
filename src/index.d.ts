/**
 * firebase-sdk TypeScript declarations
 */
export interface FirebaseOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class Firebase {
  constructor(options?: FirebaseOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default Firebase;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
