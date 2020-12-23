
# Search the index
GET /inspections/_search

# Finds all the business containing the word soup

GET /inspections/_doc/_search
{
  "query": {
    "match": {
      "business_name": "soup"
    }
  }
}


# Let's look for restaurants with the name San Francisco
# Since San Francisco is two words, we'll use match_phrase
GET /inspections/_doc/_search
{
  "query": {
    "match_phrase": {
      "business_name": "san francisco"
    }
  }
}

# Results are ranked by "relevance" (_score)
# Let's look again
GET /inspections/_doc/_search
{
  "query": {
    "match": {
      "business_name": "soup"
    }
  }
}

# More info: https://www.elastic.co/guide/en/elasticsearch/guide/current/relevance-intro.html