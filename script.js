// TODO: add code here
window.addEventListener('load',function(event){
fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
response.json().then(function(json){
    console.log(json);
    json.sort((a,b) => (a.hoursInSpace > b.hoursInSpace) ? -1:1);
    const htmlContainer = document.getElementById("container");
    let astronauts =`Number of Austronauts: ${json.length}`;
    for (astronaut of json){
        if(astronaut.active===true){  
            astronauts +=`
<div class="astronaut">
   <div class="bio">
      <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
      <ul>
         <li>Hours in space: ${astronaut.hoursInSpace}</li>
         <li id="greenText">Active: ${astronaut.active}</li>
         <li>${astronaut.skills.join(', ')}</li>
      </ul>
   </div>
   <img class="avatar" src="${astronaut.picture}">
</div>
`
        }else{
            astronauts +=`
            <div class="astronaut">
               <div class="bio">
                  <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                  <ul>
                     <li>Hours in space: ${astronaut.hoursInSpace}</li>
                     <li>Active: ${astronaut.active}</li>
                     <li>${astronaut.skills.join(', ')}</li>
                  </ul>
               </div>
               <img class="avatar" src="${astronaut.picture}">
            </div>
            `
        }
    }
    htmlContainer.innerHTML = astronauts;

        });
    });
});