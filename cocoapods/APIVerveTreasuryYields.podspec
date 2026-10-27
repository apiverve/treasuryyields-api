Pod::Spec.new do |s|
  s.name             = 'APIVerveTreasuryYields'
  s.version          = '1.2.3'
  s.summary          = 'Treasury Yields provides current and historical US Treasury constant-maturity market yields across the full curve (1-month through...'
  s.description      = <<-'DESC'
Treasury Yields provides current and historical US Treasury constant-maturity market yields across the full curve (1-month through 30-year), plus TIPS real yields. Essential data for yield curve analysis and fixed income research.

This iOS/macOS SDK provides a convenient way to access the Treasury Yields from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/treasuryyields?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/treasuryyields-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveTreasuryYields/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
