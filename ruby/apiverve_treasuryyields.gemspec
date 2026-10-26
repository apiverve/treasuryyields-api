# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "apiverve_treasuryyields"
  spec.version       = "1.2.3"
  spec.authors       = ["APIVerve"]
  spec.email         = ["hello@apiverve.com"]

  spec.summary       = "Treasury Yields API - Ruby Client"
  spec.description   = "Treasury Yields provides current and historical US Treasury constant-maturity market yields across the full curve (1-month through 30-year), plus TIPS real yields. Essential data for yield curve analysis and fixed income research."
  spec.homepage      = "https://apiverve.com/marketplace/treasuryyields?utm_source=ruby&utm_medium=referral&utm_content=homepage"
  spec.license       = "MIT"
  spec.required_ruby_version = ">= 2.7.0"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/apiverve/treasuryyields-API/tree/main/ruby"
  spec.metadata["changelog_uri"] = "https://apiverve.com/changelog"
  spec.metadata["documentation_uri"] = "https://docs.apiverve.com/ref/treasuryyields"

  spec.files = Dir.glob("{lib}/**/*") + %w[README.md LICENSE]
  spec.require_paths = ["lib"]

  spec.add_dependency "faraday", ">= 1.0", "< 3.0"
  spec.add_dependency "faraday-multipart", "~> 1.0"
  spec.add_dependency "json", "~> 2.0"
end
