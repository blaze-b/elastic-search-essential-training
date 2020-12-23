# Sample SQL Query with Elasticsearch


GET /inspections/_search

POST /_xpack/sql?format=txt
{
    "query": "SELECT business_address, business_name, inspection_score FROM inspections ORDER BY inspection_score DESC LIMIT 10"
}

# Multiple methods to query Elasticsearch with SQL
# - Through the rest endpoints (as seen above)
# - Through the included CLI tool in the /bin directory of Elasticsearch
# - JDBC Elasticsearch client
# More details can be found here: https://www.elastic.co/guide/en/elasticsearch/reference/6.3/xpack-sql.html