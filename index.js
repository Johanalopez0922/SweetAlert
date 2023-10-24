function showSweetAlert() {
    swal({
      title: `Impresionante!!`,
      text: "Modificaste un Alert!!",
      imageUrl:
        "https://t3.ftcdn.net/jpg/01/03/16/78/360_F_103167891_tygpYrCyJeN3sQTf3OuOD7uxDgHh4vVo.jpg",
      imageSize: "250x250",
      confirmButtonText: "OK",
    });
  }



let pokemonList = []; 


const connectApi = async () => {

    for(var i = 1; i < 21; i++){

        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`, {
        method: "GET",
        })
        .then((res) => {
        res.json().then((pokemon) => {
            console.log(pokemon);
            pokemonList.push(pokemon["sprites"]["other"]["official-artwork"]["front_default"]); 
        });
        })
        .catch((err) => {
        console.log(err); 
        })
        .finally(() => {
        console.log("Option Finally!");
        });

    }   
  
};

function showImg(){
    if(pokemonList){
       let list = document.getElementById('myList'); 
       let listItems = ""; 
       
       for(const poke in pokemonList ){
           console.log(pokemonList[poke]); 
           listItems+=
           `<li class="listElement">
                <img src="${pokemonList[poke]}" alt="Poke" class="listImg">
            </li>`
       }

       list.innerHTML = listItems

    }

}
