var data = {
    "author":"Guest",
    "title":"Title",
    "subtitle":"Subtitle",
    "author_description":""
}

function initialize_main(){
    for(let i in data){
        if(Array.isArray(data[i])==false)
            document.getElementById(i).innerHTML = data[i];
    }
}
// console.log(data)