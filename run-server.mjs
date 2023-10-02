import express from 'express';
import path from 'node:path';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const dirName = '/Users/johnpeterson/Desktop/astro-playground/ssr-htmx/';
const app = express();

app.use(express.static('dist/client/'));

app.use((req, res, next) => {
  const locals = {
    title: 'New title',
  };

  ssrHandler(req, res, next, locals);
});

app.get('/hello', (req, res) => {
  res.sendFile(dirName + 'src/pages/hello.astro');
});

app.listen(8080);
