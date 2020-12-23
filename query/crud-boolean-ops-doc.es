# Let's find all docs with "soup" and "san francisco" in the business name

GET /inspections/_doc/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "business_name": "soup"
          }
        },
        {
          "match_phrase": {
            "business_name": "san francisco"
          }
        }
      ]
    }
  }
}


# Or negate parts of a query, businesses without "soup" in the name (maybe you hate soup)

GET /inspections/_doc/_search
{
  "query": {
    "bool": {
      "must_not": [
        {
          "match": {
            "business_name": "soup"
          }
        }
      ]
    }
  }
}


# Combinations can be boosted for different effects
# Let's emphasize places with "soup in the name" - boost is the key word for increasing the speed of querying

GET /inspections/_doc/_search
{
  "query": {
    "bool": {
      "should": [
        {
          "match_phrase": {
            "business_name": {
              "query": "soup",
              "boost" : 3
            }
          }
        },
        {
          "match_phrase": {
            "business_name": {
              "query": "san francisco"
            }
          }
        }
      ]
    }
  }
}

# Sometimes it's unclear what actually matched.
# We can highlight the matching fragments:

GET /inspections/_doc/_search
{
  "query" : {
    "match": {
      "business_name": "soup"
    }
  },
  "highlight": {
    "fields": {
      "business_name": {}
    }
  }
}