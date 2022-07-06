require "json/ld"
require "sparql/client"

#ENDPOINT = "http://localhost:7878/update"
ENDPOINT = "https://oxigraph-npwfbftieq-an.a.run.app/update"

annotation = JSON.load(File.open("./annotations.jsonld"))
data = RDF::Graph.new
data << JSON::LD::API.toRdf(annotation)
sparql = SPARQL::Client.new(ENDPOINT)
sparql.insert_data(data)