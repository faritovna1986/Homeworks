const container = document.querySelector('.chef__card');

 fetchUsers();
 
 async function fetchUsers() {
     let result;
     try {
         const response = await fetch("https://reqres.in/api/users?per_page=12");
         result = await response.json();
     } catch (e) {
         console.log(e);
     }
 
     const users = (result && result.data) || [];
    
      drawUsers(users);
 }
 
 function drawUsers(users = []) {
     let resultHtml = '';
 
     users.forEach((user) => {
         resultHtml += `
            <div class="chef__card-info">
                <img class="chef_card-img" src=${user.avatar}>   
                <h3 class="chef__card-title">${user.first_name} ${user.last_name} </h3>
                <p class="chef__card-email">${user.email}</p>
                    
            </div>`;
 
     });

     console.log(resultHtml);
     
     container.innerHTML = resultHtml;
  }
 