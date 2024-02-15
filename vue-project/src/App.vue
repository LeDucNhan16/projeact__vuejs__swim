<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-dark bg-info fixed-top">
        <div class="container-fluid navbar-blue wrapper__header">
          <a class="navbar-brand LogoHeader" href="/">
            <img
              class="image__logo"
              src="./assets/logo__header.avif"
              alt="image__logo"
            />
            <h1 class="logo__user__header">Nguyễn Thanh Toàn</h1>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end text-bg-dark background__color__menu"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item wrapper__header__items">
                  <RouterLink class="nav-link" aria-current="page" to="/about"
                    >How much is the tuition?</RouterLink
                  >
                </li>
                <li class="nav-item wrapper__header__items">
                  <RouterLink class="nav-link" to="/frequentlyAskedQuestions">
                    Frequently asked questions</RouterLink
                  >
                </li>
                <li class="nav-item wrapper__header__items">
                  <RouterLink class="nav-link" to="/advise"
                    >log in sign up
                  </RouterLink>
                </li>
                <li class="nav-item wrapper__header__items dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    role="button"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Menu
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a class="dropdown-item list__items__menu" href="#Coach"
                        >Coach</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item list__items__menu"
                        href="#4 seasons swimming pool"
                        >4 seasons swimming pool</a
                      >
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        class="dropdown-item list__items__menu"
                        href="#Log in to your account"
                        >Log in to your account</a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="message">
      <div class="hot__line">
        <a
          class="message__facebook"
          href="https://www.facebook.com/NguyenThanhToan.1992"
        >
          <div class="wrapper__icon rung">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              viewBox="0 0 16 16"
              class="message__icon__facebook"
            >
              <path
                d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"
              />

              <path
                d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              class="message__icon__phone"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>

          <p class="message__facebook__title">Contact for support</p>
          <div class="spinner-grow text-info loading" role="status"></div>
        </a>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Header */

a {
  text-decoration: unset;
}

#app {
  display: block;
  max-width: 100%;
}

.wrapper__header {
  height: 56px;
  position: fixed;
  background-color: hsl(225.57deg 100% 41.57%);
  line-height: 115px;
  height: 90px;
  overflow: hidden;
  z-index: 10;
}

.logo__user__header {
  margin-right: 20px;
  margin-bottom: 0;
}

.background__color__menu {
  background-color: hsl(226, 82%, 43%) !important;
}

.wrapper__header__items {
  line-height: 10px;
  height: 40px;
}

.nav__List {
  background-color: hsl(225.57deg 100% 41.57%);
  height: 55px;
  display: flex;
  margin-bottom: 36px;
}

.nav__List__items {
  color: white;
  font-size: 20px;
  padding: 0 25px;
  margin: 0;
  height: 55px;
  line-height: 60px;
}

.nav__List__items:hover,
.nav__List__items:focus {
  color: white;
  cursor: pointer;
  background-color: hsl(225.57deg 100% 30.57%);
  border-bottom: 5px solid rgb(221, 181, 181);
}

.list__items__menu {
  height: 30px;
  line-height: 25px;
}

.LogoHeader {
  display: flex;
  height: 52px;
  margin-bottom: -35px;
  border: none;
  align-items: center;
  background-color: hsl(225.57deg 100% 41.57%);
}

.image__logo {
  width: 95px;
}

.navbar-toggler {
  margin-bottom: -37px;
}

.message__icon {
  margin-top: 7px;
  margin-left: 7px;
  color: aliceblue;
}

.message__facebook {
  position: fixed;
  left: 70px;
  cursor: pointer;
  bottom: 100px;
  z-index: 1000;
  display: flex;
}

.wrapper__icon {
  position: relative;
}

.message__icon__facebook {
  color: hsl(225.57deg 100% 41.57%);
}

.message__facebook__title {
  margin: 5px 0 10px 10px;
  font-size: 20px;
  font-weight: 700;
  color: hsl(225.57deg 100% 41.57%);
}

.message__icon__phone {
  position: absolute;
  right: 0px;
  top: 0px;
  color: red;
}

.loading {
  position: absolute;
  left: -8px;
  top: -8px;
  width: 55px;
  height: 55px;
  z-index: 10;
}

/* rung */
@-webkit-keyframes pulse {
  0% {
    -webkit-transform: rotate(0) scale(1) skew(1deg);
  }
  10% {
    -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
  }
  20% {
    -webkit-transform: rotate(25deg) scale(1) skew(1deg);
  }
  30% {
    -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
  }
  40% {
    -webkit-transform: rotate(25deg) scale(1) skew(1deg);
  }
  50% {
    -webkit-transform: rotate(0) scale(1) skew(1deg);
  }
  100% {
    -webkit-transform: rotate(0) scale(1) skew(1deg);
  }
}

.rung {
  margin-top: 5px;
  transition: all 150ms linear 0s;
  animation-name: pulse;
  -webkit-animation-duration: 1.5s;
  -webkit-animation-iteration-count: infinite;
}

@media screen and (max-width: 991px) {
  .message__facebook {
    left: 40px;
    bottom: 50px;
  }
  .message__facebook__title {
    display: none;
  }
}
</style>
