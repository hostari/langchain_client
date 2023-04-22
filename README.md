# Langchain

![Shard CI](https://github.com/hostari/langchain_client/workflows/Shard%20CI/badge.svg)
[![API Documentation Website](https://img.shields.io/website?down_color=red&down_message=Offline&label=API%20Documentation&up_message=Online&url=https%3A%2F%2Fhostari.github.io%2Flangchain_client%2F)](https://hostari.github.io/langchain_client)
[![GitHub release](https://img.shields.io/github/release/hostari/langchain_client.svg?label=Release)](https://github.com/hostari/langchain_client/releases)

Langchain API wrapper for Crystal. This supports only very specific use cases and operates as a tightly coupled client for a Flask app hosted on the [hostari/hello-langchain](https://github.com/hostari/hello-langchain) repo.

## Installation

Add this to your application's `shard.yml`:

```yaml
dependencies:
  langchain:
    github: hostari/langchain_client
```

## Contributing

1. Fork it (<https://github.com/hostari/langchain_client/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
