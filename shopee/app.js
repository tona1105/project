productApi = 'http://localhost:3000/product'
accountApi = 'http://localhost:3000/account'

function start() {
    getAllProducts(renderProducts)
}

start()

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
                                    <a  href="" class="home-product-item">
                                        <div class="home-product-item__img" style="background-image: url(${product.img});"></div>
                                        <h4 class="home-product-item__name">${product.name}</h4>
                                        <h4 class="home-product-item__des">${product.description}}</h4>
                                        <div class="home-product-item__price">
                                            <div class="home-product-item__price-old">${product.oldPrice}</div>
                                            <div class="home-product-item__price-current">${product.currentPrice}</div>
                                        </div>
                                        <div class="home-product-item__like">
                                            <i class="home-product-item__icon fa-solid fa-heart"></i>
                                            <div class="home-product-item__rating">
                                                <i class="vote fa-solid fa-star"></i>
                                                <i class="vote fa-solid fa-star"></i>
                                                <i class="vote fa-solid fa-star"></i>
                                                <i class="vote fa-solid fa-star"></i>
                                                <i class="unvote fa-solid fa-star"></i>
                                                <span class="home-product-item__sold">${product.sold} Đã bán</span>
                                            </div>
                                        </div>
                                        <div class="home-product-item__origin">
                                            <span class="home-product-item__brand">Whoo</span>
                                            <span class="home-product-item__country">Nhật Bản</span>
                                        </div>
                                        <div class="home-product-item__favourite">
                                            <span>
                                                <i class="fas fa-check"></i>
                                                Yêu thích
                                            </span>
                                        </div>
                                        <div class="home-product-item__sale-off">
                                            <div class="home-product-item__sale-off-percent">10%</div>
                                            <div class="home-product-item__sale-of-label">GIẢM</div>
                                        </div>
                                    </a>
                                </div>
        `
    })
    listProducts.innerHTML = htmls.join('')
}

function showRegisterModel () {
    document.querySelector('.modal').style.display = 'flex'
    var a = document.querySelectorAll('.auth-form')
    a[1].classList.add('auth-form-toggle')
    a[0].classList.remove('auth-form-toggle')
}

function hideAuthModel() {
    document.querySelector('.modal').style.display = 'none'
}

function showLoginModel() {
    document.querySelector('.modal').style.display = 'flex'
    var a = document.querySelectorAll('.auth-form')
    a[0].classList.add('auth-form-toggle')
    a[1].classList.remove('auth-form-toggle')
}

function toogleAuthForm() {
    var a = document.querySelectorAll('.auth-form')
    for ( i in a) {
        a[i].classList.toggle('auth-form-toggle')
    }
}

function handleCreateAccount(data,cb) {
    var options = {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data)
    }
    fetch(accountApi, options) 
        .then(response => response.json())
        .then(cb)
}

function handleRegister() {
    if (validateRegisterForm() == true) {
        var name = document.querySelector('#register-name').value
        var username = document.querySelector('#register-username').value
        var password = document.querySelector('#register-password').value
        var email = document.querySelector('#register-email').value
        var address = document.querySelector('#register-address').value
        var phone = document.querySelector('#register-phone').value
        fetch(accountApi)
        .then(response => response.json())
        .then( (data) => {
            for ( i in data) {
                if (data[i].username == username) {
                    alert('tài khoản đã tồn tại')
                    return
                }
                if (data[i].email == email) {
                    alert('email đã tồn tại')
                    return
                }
            }
        })  
                var form = {
                    name: name,
                    username: username,
                    password: password,
                    email: email,
                    address: address,
                    phone: phone
                }
                handleCreateAccount(form)
                alert('đăng ký thành công')
                document.querySelector('.modal').style.display = 'none'  
    } 
}


function handleLogout() {
    document.querySelector('.authen').style.display = 'flex'
    document.querySelector('.header__user').style.display = 'none'
}


function validateRegisterForm() {
    var usernameformat = /^[a-z0-9]+$/i
    var nameformat =  /^[A-Za-z]*/
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var phoneformat = /^[0-9]+$/
    //name
    if(document.querySelector('#register-name').value == '') {
        alert('Vui lòng nhập họ tên')
        document.querySelector('#register-name').focus()
        return false
    }
    if(!nameformat.test(document.querySelector('#register-name').value)) {
        alert('Chỉ cho phép kí tự chữ cái')
        document.querySelector('#register-name').focus()
        return false
    }
    //username
    if(document.querySelector('#register-username').value == '') {
        alert('Vui lòng nhập tên đăng nhập')
        document.querySelector('#register-username').focus()
        return false
    }
    if(!usernameformat.test(document.querySelector('#register-username').value)) {
        alert('Chỉ cho phép kí tự chữ cái và chữ số')
        document.querySelector('#register-username').focus()
        return false
    }
    //password
    if(document.querySelector('#register-password').value == '') {
        alert ('Vui lòng nhập mật khẩu')
        document.querySelector('#register-password').focus()
        return false
    }
    if(document.querySelector('#register-password').value.length < 6 ) {
        alert ('Mật khẩu phải chứa 6 kí tự trở lên')
        document.querySelector('#register-password').focus()
        return false
    }
    //email
    if(document.querySelector('#register-email').value == '') {
        alert('Vui lòng nhập email')
        document.querySelector('#register-email').focus()
        return false
    }
    if(!mailformat.test(document.querySelector('#register-email').value)) {
        alert("Vui lòng nhập đúng định dạng email")
        document.querySelector('#register-email').focus()
        return false
    }
    if(document.querySelector('#register-address').value == '') {
        alert('Vui lòng nhập địa chỉ')
        document.querySelector('#register-address').focus()
        return false
    }
    if(document.querySelector('#register-phone').value == '') {
        alert('Vui lòng nhập số điện thoại')
        document.querySelector('#register-phone').focus()
        return false
    }
    if(!phoneformat.test(document.querySelector('#register-phone').value)) {
        alert('Vui lòng nhập lại số điện thoại')
        document.querySelector('#register-phone').focus()
        return false
    }
    return true
}

function handleLogin() {
    if(validateLoginForm() == true) {
        var username = document.querySelector('#login-username').value
        var password = document.querySelector('#login-password').value
        fetch(accountApi) 
            .then(response => response.json())
            .then((data) => {
                for (i in data) {
                    if (data[i].username == username && data[i].password == password) {
                        alert('Đăng nhập thành công')
                        document.querySelector('.authen').style.display = 'none'
                        document.querySelector('.header__user').style.display = 'block'
                        document.querySelector('.modal').style.display = 'none'
                        return
                    } 
                }
                alert('Sai tài khoản hoặc mật khẩu') 
            })
        }
}

function validateLoginForm() {
    var usernameformat = /^[a-z0-9]+$/i
    //username
    if(document.querySelector('#login-username').value == '') {
        alert('Vui lòng nhập tên đăng nhập')
        document.querySelector('#login-username').focus()
        return false
    }
    if(!usernameformat.test(document.querySelector('#login-username').value)) {
        alert('Chỉ cho phép kí tự chữ cái và chữ số')
        document.querySelector('#login-username').focus()
        return false
    }
    //password
    if(document.querySelector('#login-password').value == '') {
        alert ('Vui lòng nhập mật khẩu')
        document.querySelector('#login-password').focus()
        return false
    }
    if(document.querySelector('#login-password').value.length < 6 ) {
        alert ('Mật khẩu phải chứa 6 kí tự trở lên')
        document.querySelector('#login-password').focus()
        return false
    }
    return true
}