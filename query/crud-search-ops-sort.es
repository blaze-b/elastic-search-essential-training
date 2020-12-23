# Finally, we can perform filtering, when we don't need text analysis (or need to do exact matches, range queries, etc.)
# Let's find soup companies with a health score greater than 80
# More info: https://www.elastic.co/guide/en/elasticsearch/guide/current/structured-search.html
# We can also sort our results by "inspection_score"
GET /inspections/_doc/_search
{
  "query": {
      "range": {
        "inspection_score": {
          "gte": 80
        }
      }
  },
  "sort": [
    { "inspection_score" : "desc" }
  ]
}