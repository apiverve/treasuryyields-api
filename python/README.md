Treasury Yields API
============

Treasury Yields provides current and historical US Treasury constant-maturity market yields across the full curve (1-month through 30-year), plus TIPS real yields. Essential data for yield curve analysis and fixed income research.


[![PyPI version](https://img.shields.io/pypi/v/apiverve-treasuryyields.svg)](https://pypi.org/project/apiverve-treasuryyields/)

This is a Python wrapper for the [Treasury Yields API](https://apiverve.com/marketplace/treasuryyields?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Installation

Using `pip`:

```bash
pip install apiverve-treasuryyields
```

Using `pip3`:

```bash
pip3 install apiverve-treasuryyields
```

---

## Configuration

Before using the Treasury Yields API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```python
from apiverve_treasuryyields.apiClient import TreasuryyieldsAPIClient

# Initialize the client with your APIVerve API key
api = TreasuryyieldsAPIClient("[YOUR_API_KEY]")

query = {
    "date": "2025-06",
    "type": "10yr"
}

try:
    # Make the API call
    result = api.execute(query)

    # Print the result
    print(result)
except Exception as e:
    print(f"Error: {e}")
```

---

## Usage

The Treasury Yields API documentation is found here: [https://docs.apiverve.com/ref/treasuryyields](https://docs.apiverve.com/ref/treasuryyields?utm_source=pypi&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```python
# Import the client module
from apiverve_treasuryyields.apiClient import TreasuryyieldsAPIClient

# Initialize the client with your APIVerve API key
api = TreasuryyieldsAPIClient("[YOUR_API_KEY]")
```

---

## Perform Request

Using the API client, you can perform requests to the API.

###### Define Query

```python
query = {
    "date": "2025-06",
    "type": "10yr"
}
```

###### Simple Request

```python
# Make a request to the API
result = api.execute(query)

# Print the result
print(result)
```

###### Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "date": "2024-02-01",
    "bills": 5.24,
    "notes": 4.35,
    "bonds": 4.67,
    "tips": 2.15,
    "frn": 5.31,
    "changes": {
      "bills": {
        "change1d": 0.02,
        "direction": "up"
      },
      "notes": {
        "change1d": -0.03,
        "direction": "down"
      },
      "bonds": {
        "change1d": 0.01,
        "direction": "up"
      },
      "tips": {
        "change1d": 0,
        "direction": "unchanged"
      },
      "frn": {
        "change1d": 0.02,
        "direction": "up"
      }
    },
    "previousDate": "2024-01-31"
  }
}
```

---

## Error Handling

The API client provides comprehensive error handling through the `TreasuryyieldsAPIClientError` exception. Here are some examples:

### Basic Error Handling

```python
from apiverve_treasuryyields.apiClient import TreasuryyieldsAPIClient, TreasuryyieldsAPIClientError

api = TreasuryyieldsAPIClient("[YOUR_API_KEY]")

query = {
    "date": "2025-06",
    "type": "10yr"
}

try:
    result = api.execute(query)
    print("Success!")
    print(result)
except TreasuryyieldsAPIClientError as e:
    print(f"API Error: {e.message}")
    if e.status_code:
        print(f"Status Code: {e.status_code}")
    if e.response:
        print(f"Response: {e.response}")
```

### Handling Specific Error Types

```python
from apiverve_treasuryyields.apiClient import TreasuryyieldsAPIClient, TreasuryyieldsAPIClientError

api = TreasuryyieldsAPIClient("[YOUR_API_KEY]")

query = {
    "date": "2025-06",
    "type": "10yr"
}

try:
    result = api.execute(query)

    # Check for successful response
    if result.get('status') == 'success':
        print("Request successful!")
        print(result.get('data'))
    else:
        print(f"API returned an error: {result.get('error')}")

except TreasuryyieldsAPIClientError as e:
    # Handle API client errors
    if e.status_code == 401:
        print("Unauthorized: Invalid API key")
    elif e.status_code == 429:
        print("Rate limit exceeded")
    elif e.status_code >= 500:
        print("Server error - please try again later")
    else:
        print(f"API error: {e.message}")
except Exception as e:
    # Handle unexpected errors
    print(f"Unexpected error: {str(e)}")
```

### Using Context Manager (Recommended)

The client supports the context manager protocol for automatic resource cleanup:

```python
from apiverve_treasuryyields.apiClient import TreasuryyieldsAPIClient, TreasuryyieldsAPIClientError

query = {
    "date": "2025-06",
    "type": "10yr"
}

# Using context manager ensures proper cleanup
with TreasuryyieldsAPIClient("[YOUR_API_KEY]") as api:
    try:
        result = api.execute(query)
        print(result)
    except TreasuryyieldsAPIClientError as e:
        print(f"Error: {e.message}")
# Session is automatically closed here
```

---

## Advanced Features

### Debug Mode

Enable debug logging to see detailed request and response information:

```python
from apiverve_treasuryyields.apiClient import TreasuryyieldsAPIClient

# Enable debug mode
api = TreasuryyieldsAPIClient("[YOUR_API_KEY]", debug=True)

query = {
    "date": "2025-06",
    "type": "10yr"
}

# Debug information will be printed to console
result = api.execute(query)
```

### Manual Session Management

If you need to manually manage the session lifecycle:

```python
from apiverve_treasuryyields.apiClient import TreasuryyieldsAPIClient

api = TreasuryyieldsAPIClient("[YOUR_API_KEY]")

query = {
    "date": "2025-06",
    "type": "10yr"
}

try:
    result = api.execute(query)
    print(result)
finally:
    # Manually close the session when done
    api.close()
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=pypi&utm_medium=referral&utm_content=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=pypi&utm_medium=referral&utm_content=readme) and all legal documents and agreements.

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
