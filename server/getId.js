var products= require('../products.json')


let getId = (request, response) => {
 
  
 for (let i=0; i<products.length; i++){ 

  if (+request.params.id=== +products[i].id) {
    response.status(200).send(products[i])
  } 
  // else {
  //   response.status(500).send("item not in list")
  //   }
  }
}


module.exports= getId