import os from 'os';

export const helloMessage = `
  <h2>
    VERSION 3.1.0: Hello from the ${os.hostname()}, <br>
    with several updates installed:
  </h2>

  <p>Links:</p>
  <ul>
    <li><a href="/nginx">Nginx Endpoint</a></li>
    <li><a href="/json-placeholder">JSON Placeholder Endpoint</a></li>
  </ul>
`;
