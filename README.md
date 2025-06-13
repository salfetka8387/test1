# Workflow Improvements

This repository contains an improved n8n workflow file `claude_3_improved.json` and helper utilities.

## Running Tests

Install dependencies and run tests with:

```bash
npm install
npm test
```

The tests cover the helper functions used for link validation and prompt generation.

## Running the Server

After installing dependencies you can start a simple validation server with:

```bash
npm start
```

It will listen on the port specified by the `PORT` environment variable or `3000` by default. Send a request to `/validate?url=YOUR_LINK` to validate an hh.ru vacancy link.
