var _form = document.querySelector('form')
var bookContainer = document.querySelector('table tbody')
var user = document.querySelectorAll('input')
var _msgBox = document.querySelector('#msg-box')

// UI book class
_form.addEventListener('submit', el => {
    el.preventDefault()
    
    if(user[0].value.length != 0 && user[1].value.length != 0 && user[2].value.length != 0){
        // Add item
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${bookContainer.children.length}.</td>
            <td>${user[0].value}</td>
            <td>${user[1].value}</td>
            <td>${user[2].value}</td>
            <td class="fa fa-book-open fa-times cancleBtn"></td>
        `
        
        // Remove item
        row.lastElementChild.addEventListener('click', (element) => {
            element.target.parentElement.remove()
            // Message    
            _msgBox.classList.remove('d-none')
            _msgBox.innerText = "Item removed successfully !"
            _msgBox.classList.add('bg-secondary')   
            _msgBox.classList.remove('bg-danger')   
            _msgBox.classList.remove('bg-success')

            setTimeout(() => {_msgBox.classList.add('d-none')}, 3000);
        })

        // clearing input value
        user.forEach(el => {
            el.value = ''
        })

        // Message    
        _msgBox.classList.remove('d-none')
        _msgBox.innerText = "Item added successfully !"
        _msgBox.classList.add('bg-success')      
        _msgBox.classList.remove('bg-danger')  
   
        setTimeout(() => {_msgBox.classList.add('d-none')}, 3000);

        // append row into table body
        bookContainer.appendChild(row)
    }
    else{
        // Message    
        _msgBox.classList.remove('d-none')
        _msgBox.innerText = "Please fill out the fields !"
        _msgBox.classList.add('bg-danger')   
        _msgBox.classList.remove('bg-success')      

        setTimeout(() => {_msgBox.classList.add('d-none')}, 3000);
    }
})
