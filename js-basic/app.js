
var foodApi = "http://localhost:3000/foods"


function start() {
    getAllFoods(renderFoods)
    handleCrateFood()
}

start()

//Functions
function getAllFoods(cb) {
    fetch(foodApi) 
        .then(response => response.json())
        .then(cb)
}

function createFood(data,cb) {
    var options = {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data)
    }
    fetch(foodApi, options) 
        .then(response => response.json())
        .then(cb)
}

function renderFoods(foods) {
    var listFoods = document.querySelector(".list-foods")
    var htmls = foods.map(function(food) {
        return `
            <li class="food-id-${food.id}">
                <h4 class= "food-name-${food.id}">${food.name}</h4>
                <h4 class= "food-des-${food.id}">${food.description}</h4>
                <button onclick="handleDeleteFood(${food.id})">Xóa</button>
                <button onclick="handlePutFood(${food.id})">Chỉnh sửa</button>
            </li>
        `
    })
    listFoods.innerHTML = htmls.join('')
}

function handleCrateFood() {
    var createBtn = document.querySelector('#create')
    createBtn.onclick = () => {
        var name = document.querySelector('#name').value
        var description = document.querySelector('#description').value
        var form = {
            name: name,
            description: description
        }
        createFood(form,() => getAllFoods(renderFoods))
    }
}

function handleDeleteFood(id) {
    var options = {
        method : 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }, 
    }
    fetch(foodApi + '/' + id, options) 
        .then(response => response.json())
        .then(() => {
            document.querySelector(".food-id-" + id).remove()
        })
}

function handlePutFood(id) {
    var name = document.querySelector('.food-name-'+id).textContent
    console.log(name)
    var des = document.querySelector('.food-des-'+id).textContent
    var inputName = document.querySelector('#name')
    inputName.value = name
    var inputDes = document.querySelector('#description')
    inputDes.value = des
    
    var newBtn = document.querySelector('#change') 
    newBtn.onclick = () => {
        var form = {
            name: inputName.value,
            description: inputDes.value
        }
        console.log(form)
        putFood(form,id,() => getAllFoods(renderFoods))
    }
}

function putFood(data,id,cb) {
    var options = {
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data)
    }
    fetch(foodApi + '/' + id, options) 
        .then(response => response.json())
        .then(cb)
    }


