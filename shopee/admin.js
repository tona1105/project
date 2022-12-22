productApi = 'http://localhost:3000/product'
accountApi = 'http://localhost:3000/account'

function start() {
    getAllProducts(renderProducts)
    getAllAccounts(renderAccounts)
}

start()


//product
function getAllProducts(cb) {
    fetch(productApi)
        .then(response => response.json())
        .then(cb)
}

function renderProducts(products) {
    var listProducts = document.querySelector('.grid__row.row')
    var htmls = products.map((product) => {
        return `
        <div class="grid__col-2-4">
                                    <div class="home-product-item-${product.id}">
                                        <div class="home-product-item__img" style="background-image: url(${product.img});"></div>
                                        <h4 class="home-product-item__name">${product.name}</h4>
                                        <h4 class="home-product-item__des">${product.description}}</h4>
                                        <div class="home-product-item__price">
                                            <div class="home-product-item__price-old">${product.oldPrice}</div>
                                            <div class="home-product-item__price-current">${product.currentPrice}</div>
                                        </div>
                                        <span class="home-product-item__sold">${product.sold} Đã bán</span>
                                        <div>
                                        <button onclick="handlePutProduct(${product.id})">Chỉnh sửa</button>
                                        <button onclick="handleDeleteProduct(${product.id})">Xóa</button>
                                        </div>
                                    </div>
                                </div>
        `
    })
    listProducts.innerHTML = htmls.join('')
}

function createProducts(data,cb) {
    var options = {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data)
    }
    fetch(productApi, options) 
        .then(response => response.json())
        .then(cb)
}

function handleCrateProduct() {
   
        var img = document.querySelector('#img').value
        var name = document.querySelector('#name').value
        var description = document.querySelector('#description').value
        var oldPrice = document.querySelector('#old-price').value
        var currentPrice = document.querySelector('#current-price').value
        var sold = document.querySelector('#sold').value

        var form = {
            img: img,
            name: name,
            description: description,
            oldPrice: oldPrice,
            currentPrice: currentPrice,
            sold: sold
        }
        createProducts(form)
        document.querySelector('.home-product-item-' + product.id).remove()
    
   

}

function handleDeleteProduct(id) {
    var options = {
        method : 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }, 
       
    }
    fetch(productApi + '/' + id, options) 
        .then(response => response.json())
        .then()
}

function putProduct(data,id,cb) {
    var options = {
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data)
    }
    fetch(productApi + '/' + id, options) 
        .then(response => response.json())
        .then(cb)
    }

function handlePutProduct(id) {
    document.querySelector('.create-change__title').innerHTML = `<h3 class="create-change__title">Chỉnh sửa sản phẩm</h3>`
    document.querySelector('.create-change-btn').innerHTML = `<button id="change">Chỉnh sửa</button>`
    
    var imgInput = document.querySelector('#img')
    var nameInput = document.querySelector('#name')
    var descriptionInput = document.querySelector('#description')
    var oldPriceInput = document.querySelector('#old-price')
    var currentPriceInput = document.querySelector('#current-price')
    var soldInput = document.querySelector('#sold')
    fetch(productApi)
        .then((response) => response.json())
        .then((products) => {
            imgInput.value = products[id-1].img
            nameInput.value = products[id-1].name
            descriptionInput.value = products[id-1].description
            oldPriceInput.value = products[id-1].oldPrice
            currentPriceInput.value = products[id-1].currentPrice
            soldInput.value = products[id-1].sold
        })
    var changeBtn = document.querySelector('#change')
    changeBtn.onclick = () => {
        var form = {
            img: imgInput.value,
            name: nameInput.value,
            description: descriptionInput.value,
            oldPrice: oldPriceInput.value,
            currentPrice: currentPriceInput.value,
            sold: soldInput.value
        }
        putProduct(form,id, () => {getAllProducts(renderProducts)})
    }
}

//account

function getAllAccounts(cb) {
    fetch(accountApi)
        .then(response => response.json())
        .then(cb)
}
function renderAccounts(accounts) {
    var listAccounts = document.querySelector('.account')
    var htmls = accounts.map((account) => {
        return `
        <div class="grid__col-2-4">
        <div class="home-product-item-${account.id}">
            <h4 class="home-product-item__name">${account.name}</h4>
            <h4 class="home-product-item__name">${account.username}</h4>
            <h4 class="home-product-item__des">${account.password}</h4>
            <h4 class="home-product-item__name">${account.email}</h4>
            <h4 class="home-product-item__des">${account.address}</h4>
            <h4 class="home-product-item__des">${account.phone}</h4>
            <button onclick="handleDeleteAccount(${account.id})">Xóa</button>
            
        </div>
        </div>
        `
    })
    listAccounts.innerHTML = htmls.join('')
}

function handleDeleteAccount(id) {
    var options = {
        method : 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }, 
       
    }
    fetch(accountApi + '/' + id, options) 
        .then(response => response.json())
        .then()
}