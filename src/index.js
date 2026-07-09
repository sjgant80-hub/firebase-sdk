/**
 * firebase-sdk · sovereign wrapper for Firebase
 * BaaS
 *
 * Auto-generated from target docs · 2026-07-09
 * generic HTTP client
 *
 * Docs (upstream): https://firebase.google.com/docs/reference
 * Homepage: https://firebase.google.com
 */

export class Firebase {
  constructor({ apiKey, baseURL = 'https://firebase.google.com', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** Not yet implemented — this API's OpenAPI spec was not machine-parseable. Use fetch() directly against https://firebase.google.com/docs/reference. */
  async request(path, opts = {}) {
    const res = await fetch(this.baseURL + path, { ...opts, headers: { ...this.headers, ...opts.headers } });
    if (!res.ok) throw new Error('firebase ' + res.status);
    return res.json();
  }
}

export default Firebase;

// Metadata
export const meta = {
  "name": "Firebase",
  "category": "BaaS",
  "homepage": "https://firebase.google.com",
  "docs_url": "https://firebase.google.com/docs/reference",
  "endpoints_count": 0
};
