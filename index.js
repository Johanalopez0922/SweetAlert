
function showSweetAlert(){
swal({
    title: `Impresionante!!`,
    text: "Modificaste un Alert!!",
    imageUrl:
      "https://t3.ftcdn.net/jpg/01/03/16/78/360_F_103167891_tygpYrCyJeN3sQTf3OuOD7uxDgHh4vVo.jpg",
    imageSize: "250x250",
    confirmButtonText: "OK"
  });
}


const connectApi = (async) =>{
    fetch("https://pokeapi.co/api/v2/pokemon/ditto",{
        request: 'GET'
    })
    .then((res)=>{
        res.json()
        .then((data)=>{
            console.log(data)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
    .finally(()=>{
        console.log("Option Finally!")
    }); 
}
