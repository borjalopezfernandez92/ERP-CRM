const getAll = function (){
    fetch('http://127.0.0.1:5000/all')
    .then(res=>res.json())
    .then(json=>console.log(json));
}
