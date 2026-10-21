# Treasury Yields API - PHP Package

Treasury Yields provides current and historical US Treasury constant-maturity market yields across the full curve (1-month through 30-year), plus TIPS real yields. Essential data for yield curve analysis and fixed income research.

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
