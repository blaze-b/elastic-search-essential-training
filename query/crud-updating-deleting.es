# That was a very short introduction to geo queries and mappings, the goal was to get your feet wet to hopefuly go off and learn more
# Let's finish the CRUD components, we covered C, and R, let's show show to update and delete documents
# Let's add a flagged field to one of our documents, using a partial document update

GET /inspections/_doc/_search

POST /inspections/_doc/5/_update
{
   "doc" : {
      "flagged" : true,
      "views": 0
   }
}


# To delete a document, we can just pass the document id to the DELETE API

DELETE /inspections/_doc/5