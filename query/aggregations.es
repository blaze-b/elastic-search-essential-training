# Aggregations (one use case is faceting data) are very interesting
# We won't have time to cover aggregation in depth now, but we want to get you familiar with
# how they work, so you can use them on your own

# Let's search for the term "soup", and bucket results by health score (similar to the facets you would see in an ebay site)
# Show: https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313.TR12.TRC2.A0.H0.Xwatch.TRS0&_nkw=watch&_sacat=0

GET /inspections/_doc/_search
{
  "query": {
    "match": {
      "business_name": "soup"
    }
  }
 ,"aggregations" : {
    "inspection_score" : {
      "range" : {
        "field" : "inspection_score",
        "ranges" : [
          {
            "key" : "0-80",
            "from" : 0,
            "to" : 80
          },
          {
            "key" : "81-90",
            "from" : 81,
            "to" : 90
          },
          {
            "key" : "91-100",
            "from" : 91,
            "to" : 100
          }
        ]
      }
    }
  }
}
