# Treasury Yields API

Treasury Yields provides current and historical US Treasury constant-maturity market yields across the full curve (1-month through 30-year), plus TIPS real yields. Paid plans add curve spreads, inversion flags, the curve's shape and breakeven inflation for yield curve analysis.

[![npm version](https://img.shields.io/npm/v/@apiverve/treasuryyields.svg)](https://www.npmjs.com/package/@apiverve/treasuryyields)

This is a JavaScript wrapper for the [Treasury Yields API](https://apiverve.com/marketplace/treasuryyields?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Installation

Using npm:
```shell
npm install @apiverve/treasuryyields
```

Using yarn:
```shell
yarn add @apiverve/treasuryyields
```

---

## Configuration

Before using the Treasury Yields API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=npm&utm_medium=referral&utm_content=readme)

The Treasury Yields API documentation is found here: [https://docs.apiverve.com/ref/treasuryyields](https://docs.apiverve.com/ref/treasuryyields?utm_source=npm&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const treasuryyieldsAPI = require('@apiverve/treasuryyields');
const api = new treasuryyieldsAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  date: "2025-06",
  type: "10yr"
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  date: "2025-06",
  type: "10yr"
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  date: "2025-06",
  type: "10yr"
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "date": "2026-10-23",
    "yields": {
      "1mo": 4.11,
      "3mo": 4.22,
      "6mo": 4.3,
      "1yr": 4.44,
      "2yr": 4.69,
      "3yr": 4.75,
      "5yr": 4.82,
      "7yr": 4.89,
      "10yr": 5,
      "20yr": 5.37,
      "30yr": 5.33
    },
    "realYields": {
      "5yr": 2.34,
      "7yr": 2.49,
      "10yr": 2.66,
      "20yr": 2.94,
      "30yr": 3.08
    },
    "bills": 4.22,
    "notes": 5,
    "bonds": 5.33,
    "tips": 2.66,
    "frn": 4.22,
    "changes": {
      "bills": {
        "change1d": 0,
        "direction": "unchanged"
      },
      "notes": {
        "change1d": 0.04,
        "direction": "up"
      },
      "bonds": {
        "change1d": 0.04,
        "direction": "up"
      },
      "tips": {
        "change1d": 0.02,
        "direction": "up"
      },
      "frn": {
        "change1d": 0,
        "direction": "unchanged"
      },
      "1mo": {
        "change1d": 0,
        "direction": "unchanged"
      },
      "3mo": {
        "change1d": 0,
        "direction": "unchanged"
      },
      "6mo": {
        "change1d": 0.01,
        "direction": "up"
      },
      "1yr": {
        "change1d": 0.03,
        "direction": "up"
      },
      "2yr": {
        "change1d": 0.04,
        "direction": "up"
      },
      "3yr": {
        "change1d": 0.03,
        "direction": "up"
      },
      "5yr": {
        "change1d": 0.04,
        "direction": "up"
      },
      "7yr": {
        "change1d": 0.03,
        "direction": "up"
      },
      "10yr": {
        "change1d": 0.04,
        "direction": "up"
      },
      "20yr": {
        "change1d": 0.05,
        "direction": "up"
      },
      "30yr": {
        "change1d": 0.04,
        "direction": "up"
      }
    },
    "spread10yr2yr": 0.31,
    "spread10yr3mo": 0.78,
    "spread30yr5yr": 0.51,
    "spread5yr2yr": 0.13,
    "inverted10yr2yr": false,
    "inverted10yr3mo": false,
    "curveShape": "normal",
    "breakevenInflation": {
      "5yr": 2.48,
      "7yr": 2.4,
      "10yr": 2.34,
      "20yr": 2.43,
      "30yr": 2.25
    }
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=npm&utm_medium=referral&utm_content=readme) and [Privacy Policy](https://apiverve.com/privacy?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
