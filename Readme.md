## Elastic Search ##
 
 - Real time distributed and analytics engine
 - Open Source developed in Java
 - Elastic Search is based on the Lucene Engine on top of which we have a rest interface
 - Supports full-text search i.e completely document based instead of tables and columns
 - Used for the Single Page Application Projects
 - Scalable
 - Higly Available
 - Developer friendly
 - Versatile Storage
 - Query & Aggregations

 ### Why? ###

 - Query:
   - Lets you perform and combine many types of searches like structured, unstructured, geo, metric, etc
   - You can ask a query `anyway you want`
 - Analyse:
   - Lets you understand billions of log lines easily - Supports big data
   - Provides aggregations which help you zoom out to explore trends and patterns in your data

 ### Advantages ###

- Scalability - Scale along multiple nodes
- Really Fast 
- Multilingual
- Document Oriented - JSON
- Autocompletion & Instant Search - Type string it automatically set up the values
- Schema Free

### Setup ###

- Install JDK first 7 above
- Download the zip file from [Click here](https://www.elastic.co/downloads/)
- Unzip the file and go to bin folder and double click on the `elasticsearch.bat` file
- `config/elasticsearch.yml` file can change the default port
- To check whether the server is up search in browser `http://localhost:9200`
   - Response: {
        "name" : "MACHINE ID-XXXXXX",
        "cluster_name" : "elasticsearch",
        "cluster_uuid" : "Jol-M2SISDa6O2l3S0aqhQ",
        "version" : {
            "number" : "7.10.1",
            "build_flavor" : "default",
            "build_type" : "zip",
            "build_hash" : "1c34507e66d7db1211f66f3513706fdf548736aa",
            "build_date" : "2020-12-05T01:00:33.671820Z",
            "build_snapshot" : false,
            "lucene_version" : "8.7.0",
            "minimum_wire_compatibility_version" : "6.8.0",
            "minimum_index_compatibility_version" : "6.0.0-beta1"
        },
        "tagline" : "You Know, for Search"
    }
- Download the kibana zip file [Click here](https://www.elastic.co/downloads/)
- Unzip the file and navigate to the bin folder to start the server
- The server will be running in the local as `http://localhost:5601`

### Concepts ###

- Near Real Time: It is a near real time search platform that there is a slight from the time you index the document until the time it becomes searchable
- Cluster: A cluster is one more nodes that together holds the data
- Node: A node is single server which is part of the cluster, stores data and participates in the cluster's indexing and search capabilities
- Index: It is a collection of documents with similar characteristics and is identified by a name, This is to do the CRUD operations
- Type: It is a logical category/partition of an index whose semantics is completely and has common set of fields
- Document: It is the basic unit of information which can be indexed
- Shards: It provides the ability to subdivide the index into multiple pieces called shards, Each shard is fully functional individual indexes that can be hosted 
   on any node
- Replicas: It allows to make 

### API Conventions ###

- The rest API's are accessed using JSON over HTTP. Elastic Search uses following conventions throughout REST Api
 - Multiple indices
   - Comma Seperated notations - demo1,demo2,demo3
   - Wildcard notations(*,+,-),_all keyword
   - URL based Parameters ignore_unavailable, allow_no_indices, expand_wildcards
 - Date Math Support in Index Name
  - Search based on date and time
  - Specify date and time in the following format: <static_name{date_math_expr{date_format|time_zone}}>
 - Common Options
   - Pretty Result
   - Human Readable Output
   - Data Math
   - Response Filtering
   - Flat Settings
   - Parameter
   - No Values
   - Time Units
   - Byte Size Units
   - Unit-less quantities
   - Distance Units
   - Fuzziness
   - Enabling Stack Traces
   - Request Body in Query String
 - URL based Access Control
   - Users can also use a proxy with URL-based access control to secure access to the Elasticsearch indices
   - User has an option of specifying an index in the URL and on each indvidual request body for some requests like:
     - multi-search
     - multi-get
     - bulk

### Basic Operation to be done in the Kibana Devtool ###

 1. JSON Documents
     Eg: 
        {
            "name" : "Elastic",
            "location" : {
                    "state" : "CA",
                    "zipcode" : 94123
            }
        }

 2. CRUD - Create / Read / Update / Delete
     1. Create
         - Different ways to insert/create an index, Eg: [CRUD REST CALL](https://github.com/brianblaze14/elastic-search-essential-training/blob/master/query/crud-insert-doc.es)
         - Bulk indexing documents, Eg: [CRUD BULK INSERT](https://github.com/brianblaze14/elastic-search-essential-training/blob/master/query/crud-bulk-insert-doc.es)
     2. Read
         - Basic searches,Eg: [CRUD BASIC SEARCH](https://github.com/brianblaze14/elastic-search-essential-training/blob/master/query/crud-search-ops-docs.es)
         - Intermediate searches, Eg: [BOOLEAN SEARCH](https://github.com/brianblaze14/elastic-search-essential-training/blob/master/query/crud-boolean-ops-doc.es),
         [CRUD SORT SERARCH](https://github.com/brianblaze14/elastic-search-essential-training/blob/master/query/crud-search-ops-sort.es)
         - Sample SQL query in Elasticsearch, Eg: [CRUD BASIC SQL](https://github.com/brianblaze14/elastic-search-essential-training/blob/master/query/crud-basic-sql.es)
         - Facets and aggregations, Eg: [CRUD AGGREGATIONS](https://github.com/brianblaze14/elastic-search-essential-training/blob/master/query/aggregations.es)
         - Aggregation use cases (doc values vs inverted index?) TODO, Eg: [CRUD AGGREGATIONS](https://github.com/brianblaze14/elastic-search-essential-training/blob/master/query/aggregations.es)
         - Sample geo search, Eg: [GEO SEARCH QUERY](https://github.com/brianblaze14/elastic-search-essential-training/blob/master/query/geo-location-search.es)
     3. Update
         - Updating documents, Eg: [UPDATE QUERY](https://github.com/brianblaze14/elastic-search-essential-training/blob/master/query/crud-updating-deleting.es)
     4. Delete
         - Deleting documents, Eg: [DELETE QUERY](https://github.com/brianblaze14/elastic-search-essential-training/blob/master/query/crud-updating-deleting.es)
 3. Mappings, Eg: [MAPPING PROPETIES IN ELASTIC](https://github.com/brianblaze14/elastic-search-essential-training/blob/master/query/mapping-field-query.es)
 4. Analyzers, Eg: [ANALYZERS](https://github.com/brianblaze14/elastic-search-essential-training/blob/master/query/analyser-token.es)

