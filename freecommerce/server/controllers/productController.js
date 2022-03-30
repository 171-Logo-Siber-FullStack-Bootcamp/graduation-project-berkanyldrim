const { request } = require("express");
const pool = require("../config/db");
const elasticClient = require('../elasticSearch/elasticClient');


//veritabanında fıeld alanlarını aldık Product amacımız tamamen o verileri rahatca kullanabılmemız
getProducts = async (req, res) => {
    await pool.query('SELECT * FROM products ', (error, results) => {
        if (error) {
            throw error
        }
        return res.status(200).json(results.rows)
    })
}
postProducts = async (request, response) => {
    let image = request.file; // imageyi yakaladık
    let fullImagePath = "/images/"+image.filename;
    const {  name,description,stock,price,category_id } = request.body;
    await pool.query("INSERT INTO products (name,description,stock,price,category_id,image) VALUES($1,$2,$3,$4,$5,$6)", [ name,description,stock,price,category_id,fullImagePath], (error, results) => {
        if (error) {
            throw error
        }
        else {
            insertElastic(request.body);
            return response.status(200).json(request.body);
        }
    })
}

updateProducts = async (request,response)=>{
    const id = parseInt(request.params.id)
    const {  name,description,stock,price,category_id } = request.body
    await pool.query('UPDATE products SET name = $1, description = $2, stock = $3, price=$4,category_id=$5  WHERE id = $6', [name,description,stock,price,category_id,id], (error,results)=>{
        if(error){
            throw error
        }
        else{
            response.status(200).send(`User modified with ID: ${id}`)
        }
    })
}

deleteProducts = async(request,response)=>{
    const id = parseInt(request.params.id)
    await pool.query('DELETE FROM products WHERE id = $1',[id], (error,results)=>{
        if (error) {
            throw error
        }
        else{
            response.status(200).send(`User deleted with ID: ${id}`)
        }
    })
}




getProductElastic = (req, res) => {
console.log(req.query.name);
    elasticClient.search({
        index: "products",
        body: {
            query: {
                match_phrase_prefix: {
                    "name":req.query?.name  ?? ""
                }
            }
        }
    }, (err, rest) => {
        if (err) {
            console.log(err);
        }
        else {
            return res.status(200).json(rest.hits.hits[0]._source);
        }
    })


}


postProductElastic = (req, res) => {
    let data = {};
    pool.query("SELECT * FROM product", (err, result) => {
        if (err) return res.status(500).json({ hata: "hata" });
        //res.status(200).json(result.rows);
        data = result.rows;


        elasticClient.index({
            index: "products",
            type: 'customtype',
            body: data[0]
        }, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                return res.status(200).json(data);
            }
        });
    });


}

// pg'ye post atınca aynı zamanda elasticsearch'te insert yapıyoruz.
insertElastic = (data) => {
    elasticClient.index({
        index: "products",
        type: 'customtype',
        body: data
    }, (err) => {
        if (err) {
            return false;
        }
        else {
            return true;
        }
    });
}








module.exports = {

    getProducts,
    postProducts,
    updateProducts,
    deleteProducts,
    postProductElastic,
    getProductElastic
}
