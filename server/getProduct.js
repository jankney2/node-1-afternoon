var products= require('../products.json')


let getProductById = (request, response) => {
 
  
 for (let i=0; i<products.length; i++){ 

  if (+request.params.id=== +products[i].id) {
 return response.status(200).send(products)
  } 
}
  
     return response.status(500).send("item not in list")
      
}


module.exports= getProductById