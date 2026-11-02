# Treasury Yields API - Ruby Gem

Treasury Yields provides current and historical US Treasury constant-maturity market yields across the full curve (1-month through 30-year), plus TIPS real yields. Paid plans add curve spreads, inversion flags, the curve's shape and breakeven inflation for yield curve analysis.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_treasuryyields'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_treasuryyields
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_treasuryyields'

# Initialize the client
client = APIVerve::Treasuryyields::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  date: "2025-06",
  type: "10yr"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ date: "2025-06", type: "10yr" })
  puts response["data"]
rescue APIVerve::Treasuryyields::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Treasuryyields::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Treasuryyields::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/treasuryyields?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/treasuryyields?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/treasuryyields?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
