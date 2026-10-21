# Treasury Yields API - Ruby Gem

Treasury Yields provides current and historical US Treasury constant-maturity market yields across the full curve (1-month through 30-year), plus TIPS real yields. Essential data for yield curve analysis and fixed income research.

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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/treasuryyields?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/treasuryyields?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/treasuryyields?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
