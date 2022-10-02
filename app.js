console.log("Let's get this party started!");



async function getData(){
    let search= $("#gifParty").val();
    $("#gifParty").val("");
    const response =await axios.get(`http://api.giphy.com/v1/gifs/search`, {params: {q:search, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
    makeHTML(response.data);
    console.log(response.data)
}
function makeHTML(gifs){
 
    let num=gifs.data.length;
    if(num){
        let selectedNum=Math.floor(Math.random()*num);
        let newNum=$('<img>').attr('src',gifs.data[selectedNum].images.original.url);
        $('#gifButton').append(newNum);
    }}


$('#remove').on('click', function(e){
    $('#gifButton').empty()
})


$('#search').on('click', function(e){
    e.preventDefault();
    if(!$('#gifParty').val()){
        alert('enter a search value do not leave blank')
    }else{
        getData()
    }
})


 


// function appendImg(result){
//     let number = result.data.length;
//     if(number){
//         let randomNum = Math.floor(Math.random()*number);
//      let newGif = $('<img>').attr('src',result.data[randomNum].images.original.url);
//      $('#imagediv').append(newGif);}
//  }
 
 
 //get data from API
//  async function getGif(){
//      let searchTerm = $("#searchterm").val();
//      $("#searchterm").val("");
//  const result = await axios.get("https://api.giphy.com/v1/gifs/search", {
//      params: {
//        q: searchTerm,
//        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
//      }
//    });
 
//  console.log(result.data);
//  appendImg(result.data);
 
//  };
 
 
 
 
 

 
 
 