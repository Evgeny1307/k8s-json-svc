import express from 'express'
import os from 'os'
import { helloMessage } from './start-message.mjs';

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  console.log(helloMessage)
  res.send(helloMessage)
})

app.get("/nginx", async (req, res) => {
  const url = 'http://nginx'
  const response = await fetch(url);
  const body = await response.text();
  res.send(body)
})

app.get("/json-placeholder", async (req, res) => {
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  const response = await fetch(url);
  const body = await response.json();
  res.json(body);
});

app.listen(PORT, () => {
  console.log(`Web server is listening at port ${PORT}`)
})
