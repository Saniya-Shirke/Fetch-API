const container = document.getElementById('userContainer');
const reloadBtn = document.getElementById('reloadBtn');

function fetchUsers(){
    container.innerHTML = 'Loading...';

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    if(!response.ok) throw new Error("Network response was not ok");
    return response.json();
})
.then(users =>{
    container.innerHTML = '';

    users.forEach(user =>{
        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Address: ${user.address.street}, ${user.address.city}</p>`;
        container.appendChild(card);
    });
})
.catch(error =>{
    container.innerHTML = `<p style = "color:red;">Error: ${error.message}</p>`;
});
}
fetchUsers();
reloadBtn.addEventListener('click',fetchUsers);
