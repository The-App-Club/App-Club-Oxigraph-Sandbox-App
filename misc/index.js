(async () => {
  const jsonld = require("jsonld");
  const SparqlClient = require("sparql-http-client");
  // https://blogs.kitaitimakoto.net/~/Apehuci/rust-%E8%A3%BD-%E3%81%AE-sparql-%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC-oxigraph-%E3%82%92-json-ld-%E3%81%A7-%E8%A7%A6-%E3%82%8B

  const { readFileSync } = require("fs");
  const loadData = readFileSync("annotations.jsonld", { encoding: "utf-8" });

  // convert jsonld to rdf
  const nquads = await jsonld.toRDF(JSON.parse(loadData), {
    format: "application/n-quads",
  });

  const endpointUrl =
    "http://localhost:7878/update";
  
  console.log(nquads)
  
  // const client = new SparqlClient({ endpointUrl });
  // try {
  //   await client.query.update(loadData)

  // } catch (error) {
  //   console.log(error)
  // }
})();
