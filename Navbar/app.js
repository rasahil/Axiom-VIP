// Fetching data text file data 
// script to fetch the data

let textButton = document.getElementById("text-btn");
        textButton.addEventListener('click',function(){

            //creating an AJAX requestm
            let xhr = new XMLHttpRequest();

            // prepare the request
            xhr.open('GET','message.txt',true); // true stand of async

            // send the request
            xhr.send();
            
            // process the request
            xhr.onload = () => {
                if(xhr.status === 200){
                    let data = xhr.responseText;
                    textdata(data);   
                }
            };
        });

        // display text data 
   
    let textdata = (data) =>{
        let htmltemplate = `<h3>${data}</h3>`;
        
        // document.querySelector("#text-card").innerHTML = htmltemplate;
        document.querySelector("#text-card").innerHTML = `<h3>${data}</h3>`;
        
        };



    // Fetching Json file data 

        let jsonbutton = document.getElementById("json-btn");
        jsonbutton.addEventListener('click',function(){

            // request 
             let xhr = new XMLHttpRequest;

            //  prepare 
            xhr.open('GET', 'mobile.json',true);

            // send 
            xhr.send();

            // process 
            xhr.onload = () =>{
                if(xhr.status === 200){
                    let data = xhr.responseText;
                    let user = JSON.parse(data);
                    jsondata(user);
                };
            }
        });

         // display json data 
         let jsondata = (user) =>{

            let htmltemplate ='' ;
            htmltemplate = `<ul class =" list-group mt-1 border border-1 border-black">
                                <li class="list-group-item">ID : ${user.id}</li>
                                <li class="list-group-item">Brand : ${user.brand}</li>
                                <li class="list-group-item">Color : ${user.color}</li>
                                <li class="list-group-item">Price : ${user.price}</li>
                           </ul>`;

          document.getElementById("json-card").innerHTML = htmltemplate ;

         }

          // Fetching data from fack API  

          let apibutton = document.getElementById("api-btn");
        apibutton.addEventListener('click',function(){
                 // request 
                 let xhr = new XMLHttpRequest;

                //  prepare 
                xhr.open('GET', 'https://jsonplaceholder.typicode.com/users',true);

                // send 
                xhr.send();

                // process 
                xhr.onload = () =>{
                if(xhr.status === 200){
                    let data = xhr.responseText;                   
                    let users = JSON.parse(data);
                    
                    apidata(users);
                };
            }

        });

         // display API data 

         let apidata = (users) =>
         {
            let htmltemplate = '';

            for(let user of users )
            {
                htmltemplate += ` <ul class="list-group mt-2 border border-1 border-black">
                                     <li class="list-group-item"> ID : ${user.id} </li>
                                     <li class="list-group-item"> NAME : ${user.name} </li>
                                     <li class="list-group-item"> EMAIL : ${user.email} </li>
                                     <li class="list-group-item"> STREET : ${user.address.street} </li>
                                     <li class="list-group-item"> CITY : ${user.address.city} </li>
                                   </ul>`;
            }
          document.getElementById("api-card").innerHTML = htmltemplate ;

         };