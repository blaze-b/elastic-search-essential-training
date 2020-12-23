# Analyzers
# Text analysis is core to Elasticsearch, and very important to understand
# As you saw a mapping configuration for data types in the previous example, you can also configure an analyzer per field or an entire index!
# Analysis = tokenization + token filters
# Tokenization breaks sentences into discrete tokens

GET /inspections/_analyze
{
  "tokenizer": "standard",
  "text": "my email address test123@company.com"
}

GET /inspections/_analyze
{
  "tokenizer": "whitespace",
  "text": "my email address test123@company.com"
}

GET /inspections/_analyze
{
  "tokenizer": "standard",
  "text": "Brown fox brown dog"
}

# And filters manipulate those tokens

GET /inspections/_analyze
{
  "tokenizer": "standard",
  "filter": ["lowercase"],
  "text": "Brown fox brown dog"
}

GET /inspections/_analyze
{
  "tokenizer": "standard",
  "filter": ["uppercase"],
  "text": "Brown fox brown dog"
}

# There is a wide variety of filters.

GET /inspections/_analyze
{
  "tokenizer": "standard",
  "filter": ["lowercase", "unique"],
  "text": "Brown brown brown fox brown dog"
}

# More info: https://www.elastic.co/guide/en/elasticsearch/guide/current/_controlling_analysis.html