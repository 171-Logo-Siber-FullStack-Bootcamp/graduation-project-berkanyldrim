const express=require("express");
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json())
const port = 3000

const winston = require('winston');
const elasticClient = require('./elasticSearch/elasticClient');
const productRouter=require("./router/ProductRouter");

const logger=winston.createLogger({
    level:"info",
    format:winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

logger.error("Hata Yakaladım");
logger.info("İnfo test")

 
elasticClient.ping({    
    requestTimeout: 1000
}, function (error) {
    if (error) {
        console.trace('Elasticsearch\'e erişilmiyor!');
    } else {
        console.log('Elasticsearch ayakta :)');
    }
});



//Genel link api  tanımımız localhost/api/producktangelenroutelardanıstedıgımız/
app.use('/api', productRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })