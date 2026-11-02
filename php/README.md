# Treasury Yields API - PHP Package

Treasury Yields provides current and historical US Treasury constant-maturity market yields across the full curve (1-month through 30-year), plus TIPS real yields. Paid plans add curve spreads, inversion flags, the curve's shape and breakeven inflation for yield curve analysis.

## Installation

Install via Composer:

```bash
composer require apiverve/treasuryyields
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Treasuryyields\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'date' => '2025-06',
    'type' => '10yr'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Treasuryyields\Client;
use APIVerve\Treasuryyields\Exceptions\APIException;
use APIVerve\Treasuryyields\Exceptions\ValidationException;

try {
    $response = $client->execute(['date' => '2025-06', 'type' => '10yr']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/treasuryyields?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/treasuryyields?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/treasuryyields?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
