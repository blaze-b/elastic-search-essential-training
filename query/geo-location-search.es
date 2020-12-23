# Geo search is another powerful tool for search
# Let's find soup restaurants closest to us!
# We have the geo point within the document, let's use it

GET /inspections/_doc/_search
{
  "query": {
    "match": { "business_name": "soup"}
  },
  "sort": [
    {
      "_geo_distance": {
        "business_location.coordinates": {
          "lat":  37.800175,
          "lon": -122.409081
        },
        "order":         "asc",
        "unit":          "km",
        "distance_type": "plane"
      }
    }
    ]
}


# Error! Elasticsearch doesn't know the field is a geopoint
# We must define this field as a geo point using mappings
# Mapping are helpful for defining the structure of our document, and more efficiently storing/searching the data within our index
# We have numbers/dates/strings, and geopoints, let's see what elasticsearch thinks our mapping is

