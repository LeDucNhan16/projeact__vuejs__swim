<script setup>
function validate() {
  var u = document.getElementById("username").value;
  var p1 = document.getElementById("password").value;

  if (u == "") {
    alert("Vui lòng nhập tên!");
    return false;
  }
  if (p1 == "") {
    alert("Vui lòng nhập mật khẩu!");
    return false;
  }

  alert("Xin hãy điền đúng thông tin!");

  return true;
}
</script>

<template>
  <div class="container">
    <form action="" onsubmit="return validate()">
      <div class="register">
        <h1>Đăng Nhập</h1>
        <p>Vui lòng điền thông tin để đăng Nhập</p>
        <hr />
        <label for="username"><b>Tên đăng nhập</b></label>
        <input
          type="text"
          placeholder="Họ và tên"
          name="username"
          id="username"
        />
        <label for="password"><b>Mật khẩu</b></label>
        <input
          type="password"
          placeholder="******"
          name="password"
          id="password"
        />
        <hr />
        <p>
          Để tạo tài khoản vui lòng đồng ý với điều khoản của chúng tôi
          <a href="#">Terms & Privacy</a>.
        </p>
        <button type="submit" class="submit">Đăng Nhập</button>
      </div>
      <div class="register login">
        <p>
          Bạn đã có tài khoản rồi?
          <RouterLink to="/advise">Đăng Ký</RouterLink>.
        </p>
      </div>
    </form>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #cecece;
}
a {
  color: #00bd00;
}
* {
  box-sizing: border-box;
}

.container {
  margin-top: 100px;
  border: 1px solid #ddd;
  max-width: 700px;
  padding-top: 20px;
}

.register {
  width: 500px;
  padding: 16px;
  margin: 0 auto;
  background-color: white;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
.submit {
  background-color: #0900bd;
  color: white;
  padding: 15px 18px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}
.submit:hover {
  opacity: 1;
}
.login {
  background-color: #ffffff;
  text-align: center;
}
</style>
