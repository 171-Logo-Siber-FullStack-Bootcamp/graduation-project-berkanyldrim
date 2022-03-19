//Elastic clientine bağlanıyoruz.
const elasticSearch = require("elasticsearch");

const esClient=new elasticSearch.Client({
    host:"localhost:9200",
    log:"trace"
});
module.exports=esClient; // kullanmak için export ediyoruz.