//text

function getText(){
fetch('text.txt')
.then(response=>{
  return response.text();

}).then(data =>{
    console.log(data);
}).catch(error=>{
    console.log(error);
})
}


getText();
//Json
function getJson(){
    fetch('products.json')
    .then(response=>{
        return response.json();
    }).then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    })
}

getJson();



//external api

function getexternalApi(){
    fetch('https://randomuser.me/api/?results=5')
    .then(data=>{
        return data.json()
    }).then(users=>{
        
     var html="";
    users.results.forEach(user => {

     html+=`
     <div>
     <img src="${user.picture.medium}"
     </div>
       
     <div> ${user.name.first} ${user.name.title} ${user.name.last}</div>


     `;

    });

    document.querySelector("#users").innerHTML=html;
    }).catch(e=>{
        console.log(e);
    })


}

getexternalApi();


 function postExternalApi(){
     const url="https://jsonplaceholder.typicode.com/todos/";
   
    var data={
        method : "POST",
        body :JSON.stringify({
            userId:1,
            title :"sample title",
            body :"sample body"
        }),
        headers : new Headers({
            'content-type':'application/json' //key value
        })
    }

     fetch(url,data)
     .then(res=>{
     console.log(res);
     })

 }

 postExternalApi();

 getexternalApi();