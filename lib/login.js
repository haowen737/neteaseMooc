(function (root, factory) {
    factory(root.LoginModel = {})
})(this, function (exports) {
  exports.login = function () {
    let userName = document.querySelector('#login-user').value
    let password = document.querySelector('#login-psw').value
    if (!userName || !password) {
      window.alert('缺少必填项')
      return
    }
    Haowen.http.get('http://study.163.com/webDev/login.htm', {
      userName,
      password
    })
    .then((res) => {
      if (res === '1') {
        window.alert('登陆成功')
      } else {
        window.alert('登陆失败，请检查用户名或密码')
        this.resetLoginForm()
      }
    })
    .catch((err) => {
      console.log(err)
    })
  },
  exports.resetLoginForm = function () {
    document.querySelector('#login-user').value = ''
    document.querySelector('#login-psw').value = ''
  },
  exports.closeLogin = function () {
    let login = document.querySelector('#login')
    login.style.display = 'none'
  },
  exports.showLogin = function () {
    let login = document.querySelector('#login')
    login.style.display = 'block'
  }
})
