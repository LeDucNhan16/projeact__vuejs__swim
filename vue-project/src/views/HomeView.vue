<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="about">
    <!-- header -->

    <!-- container slide -->
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/slide1.webp"
            class="d-block w-100 max__hight__slide"
            alt="slide1"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/slide2.jpg"
            class="d-block w-100 max__hight__slide"
            alt="slide2"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/slide3.jpg"
            class="d-block w-100 max__hight__slide"
            alt="slide3"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/slide4.jpg"
            class="d-block w-100 max__hight__slide"
            alt="slide4"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- container main -->
    <div class="container course">
      <div class="card course__main">
        <div class="card-body">
          <h1 class="card-title">
            How much does a comprehensive swimming course cost?
          </h1>
          <p class="card-text">
            A freestyle swimming course at Four Seasons Swimming Center -
            Teacher Bac Gia 1,700,000/course! For this course, the teacher will
            teach until the student swims If you are proficient, that's it and
            no additional fees will be collected students related to the course.
            In case the student cannot swim, We GUARANTEE 100% MONEY BACK.
          </p>
          <p class="card-text">
            <small class="text-muted"
              >To register for the course, please call HOTLINE 0339614987
              immediately for the fastest support! Or leave information via
              contact form below, we will call back!</small
            >
          </p>
        </div>
        <img
          src="../assets/image__coin.jpg"
          class="card-img-bottom course__image"
          alt="..."
        />
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">session</th>
              <th scope="col">content achieved</th>
              <th scope="col">location</th>
              <th scope="col">teacher's name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>get used to the water</td>
              <td>𝐋𝐄𝐎 𝐅𝐈𝐓𝐍𝐄𝐒𝐒 𝐂𝐄𝐍𝐓𝐄𝐑🦁</td>
              <td>@NguyenThanhToan</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                Learn to hold hands, learn to float, get used to floating on
                water
              </td>
              <td>𝐋𝐄𝐎 𝐅𝐈𝐓𝐍𝐄𝐒𝐒 𝐂𝐄𝐍𝐓𝐄𝐑🦁</td>
              <td>@NguyenThanhToan</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                Learn how to breathe properly to prepare to learn how to swim in
                many ways
              </td>
              <td>𝐋𝐄𝐎 𝐅𝐈𝐓𝐍𝐄𝐒𝐒 𝐂𝐄𝐍𝐓𝐄𝐑🦁</td>
              <td>@NguyenThanhToan</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>
                Learning how to dog swim is the easiest swimming style for
                beginners
              </td>
              <td>𝐋𝐄𝐎 𝐅𝐈𝐓𝐍𝐄𝐒𝐒 𝐂𝐄𝐍𝐓𝐄𝐑🦁</td>
              <td>@NguyenThanhToan</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Get familiar with breaststroke and butterfly swimming</td>
              <td>𝐋𝐄𝐎 𝐅𝐈𝐓𝐍𝐄𝐒𝐒 𝐂𝐄𝐍𝐓𝐄𝐑🦁</td>
              <td>@NguyenThanhToan</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>
                Learn how to dive and backstroke and finish the course and award
                a swimming certificate
              </td>
              <td>𝐋𝐄𝐎 𝐅𝐈𝐓𝐍𝐄𝐒𝐒 𝐂𝐄𝐍𝐓𝐄𝐑🦁</td>
              <td>@NguyenThanhToan</td>
            </tr>
          </tbody>
        </table>
        <h4 class="course__title__sub">
          We commit to customers that after completing this course, they will
          definitely know how to swim before getting paid
        </h4>
      </div>

      <div id="Coach" class="container">
        <h1 class="title">Coach</h1>

        <div class="user__list card" style="width: 100%">
          <img
            src="../assets/image__user.jpg"
            class="card-img-top user__image"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text user__introduce">
              About Us Hiep Tam Private Swimming Teaching Center is a unit
              specializing in private swimming teaching in Vietnam - Committed
              to knowing how to swim 100% after the course, including providing
              private instructors at home (pool available). swimming) either at
              the center or at the pool that the student chooses. Hiep Tam
              Private Swimming Teaching Center is a unit specializing in private
              swimming teaching in Vietnam - Committed to knowing how to swim
              100% after the course, including providing private instructors at
              home (with swimming pool available) or at the center. center or at
              the swimming pool that the student chooses.
            </p>
          </div>
        </div>

        <div class="user__list card" style="width: 100%">
          <img
            src="../assets/image__user1.jpg"
            class="card-img-top user__image"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text user__introduce">
              About Us Hiep Tam Private Swimming Teaching Center is a unit
              specializing in private swimming teaching in Vietnam - Committed
              to knowing how to swim 100% after the course, including providing
              private instructors at home (pool available). swimming) either at
              the center or at the pool that the student chooses. Hiep Tam
              Private Swimming Teaching Center is a unit specializing in private
              swimming teaching in Vietnam - Committed to knowing how to swim
              100% after the course, including providing private instructors at
              home (with swimming pool available) or at the center. center or at
              the swimming pool that the student chooses.
            </p>
          </div>
        </div>
      </div>

      <div id="4 seasons swimming pool" class="container">
        <h1 class="title">4 seasons swimming pool</h1>

        <div class="seasons__list card" style="width: 100%">
          <img
            src="../assets/be-boi-4-mua3.jpg"
            class="card-img-top seasons__list__image"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text user__introduce">
              Thank you customers for trusting and choosing us In the spring, we
              will teach you swimming lessons in warm water so you can relax
              comfortably without fear of the cold when learning to swim at my
              place.
            </p>
          </div>
        </div>

        <div class="seasons__list card" style="width: 100%">
          <img
            src="../assets/be-boi-4-mua1.jpg"
            class="card-img-top seasons__list__image"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text user__introduce">
              Thank you customers for trusting and choosing us In the summer, we
              will teach you how to swim with cool water so you can relax
              comfortably while learning to swim at my place. You can choose to
              learn to swim outdoors or in the greenhouse.
            </p>
          </div>
        </div>
        <div class="seasons__list card" style="width: 100%">
          <img
            src="../assets/be-boi-4-mua2.jpg"
            class="card-img-top seasons__list__image"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text user__introduce">
              Thank you customers for trusting and choosing us In the fall, we
              will teach you swimming lessons with a warm temperature of 32
              degrees Celsius so you can relax comfortably while learning to
              swim at my place. Customers can choose to learn swimming indoors
              or in a pool. Greenhouse
            </p>
          </div>
        </div>
        <div class="seasons__list card" style="width: 100%">
          <img
            src="../assets/be-boi-bon-mua-1.jpg"
            class="card-img-top seasons__list__image"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text user__introduce">
              Thank you customers for trusting and choosing us In the winter, we
              will teach you how to swim with a warm temperature of 33 degrees
              Celsius so you can relax comfortably while learning to swim at my
              place. Customers can choose to learn swimming indoors or indoors.
              greenhouse and when you get ashore you can also go inside the
              air-conditioned room and go out to different rooms with gradually
              increasing temperatures to avoid catching a cold..
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <h1 id="Log in to your account" class="title">All swimming courses</h1>

      <div class="swimming__courses">
        <div class="card" style="width: 18rem">
          <img
            src="../assets/dog-swimming.jpg"
            class="card-img-top swimming__image"
            alt="dog-swimming"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <RouterLink to="/page-dog-swimming" class="card-link"
              >Another link</RouterLink
            >
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img
            src="../assets/backstroke.jpg"
            class="card-img-top swimming__image"
            alt="dog-swimming"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <RouterLink to="/backstroke-swimming" class="card-link"
              >Another link</RouterLink
            >
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img
            src="../assets/swim.jpg"
            class="card-img-top swimming__image"
            alt="dog-swimming"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <RouterLink to="/freely-swimming" class="card-link"
              >Another link</RouterLink
            >
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img
            src="../assets/butterfly-swimming.jpg"
            class="card-img-top swimming__image"
            alt="dog-swimming"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <RouterLink to="/breaststroke-swimming" class="card-link"
              >Another link</RouterLink
            >
          </div>
        </div>
      </div>
    </div>

    <!-- advertise achievements -->

    <div class="container achievements">
      <h1 id="Log in to your account" class="title">advertise achievements</h1>
      <div class="achievements__list">
        <div class="card" style="width: 18rem">
          <img
            src="../assets/achievements1.jpg"
            class="card-img-top achievements__image"
            alt="swimming positions"
          />
          <div class="card-body">
            <p class="card-text">
              When you finish learning, you will definitely know how to swim in
              many strokes and be able to float on the water and know how to
              breathe properly
            </p>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img
            src="../assets/achievements2.jpg"
            class="card-img-top achievements__image"
            alt="Nice clean swimming pool"
          />
          <div class="card-body">
            <p class="card-text">
              When learning to swim here, customers will have a clean and
              comfortable swimming learning environment. After swimming,
              customers will have a bathroom to shower again
            </p>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img
            src="../assets/achievements4.jpg"
            class="card-img-top achievements__image"
            alt="Nice clean swimming pool"
          />
          <div class="card-body">
            <p class="card-text">
              There is separate hot and cold water for a very comfortable
              shower. If anything is not right, you can respond directly.
            </p>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img
            src="../assets/achievements3.jpg"
            class="card-img-top achievements__image"
            alt="swimming certificate"
          />
          <div class="card-body">
            <p class="card-text">
              After completing the course, you will be issued a direct swimming
              training certificate with the seal of the state agency and
              swimming learning authority
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- footer  -->
    <div class="footer">
      <img
        class="footer__backgroug"
        src="../assets/footer__backgroug.jpeg"
        alt="footer__backgroug"
      />
      <div class="container footer__context">
        <div class="information">
          <h1>Nguyễn Thanh Toàn</h1>
          <p class="information__sub">
            We specialize in private swimming tutoring in Vietnam - Committed to
            knowing how to swim 100% after the course, including providing
            private tutoring at home (with swimming pool available) or at the
            center or at the student's own swimming pool. select. Swimming
            courses have flexible times for many different subjects from
            children to adults at basic to advanced levels to suit the different
            needs of many students.
          </p>
        </div>
        <div>
          <ul>
            <li class="contact__us__items">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="icons__footer bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
                />
              </svg>
              <a
                class="footer__link"
                href="https://www.google.com/maps/place/20%2F23%2F165+P.+Th%C3%A1i+H%C3%A0,+T%E1%BB%95+27,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0140324,105.8140424,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab632f69cf9b:0xf8fd860c0c45b249!8m2!3d21.0140274!4d105.8166173!16s%2Fg%2F11k54p4dzl?hl=vi-VN&entry=ttu"
                >165 Thái Hà, Đống Đa, Hà Nội</a
              >
            </li>
            <li class="contact__us__items">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="icons__footer bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                /></svg
              >Hot-Line: 0339614987
            </li>
            <li class="contact__us__items">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="icons__footer bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
                /></svg
              ><a
                class="footer__link"
                href="https://mail.google.com/mail/u/0/#inbox"
                >gmail: nhandragon166@gmail.com</a
              >
            </li>
            <li class="contact__us__items">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-facebook icons__footer"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                />
              </svg>
              <a
                class="footer__link"
                href="https://www.facebook.com/NguyenThanhToan.1992"
                >Facebook</a
              >
            </li>
            <li class="contact__us__items">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="icons__footer bi bi-safe"
                viewBox="0 0 16 16"
              >
                <path
                  d="M1 1.5A1.5 1.5 0 0 1 2.5 0h12A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 1 14.5V13H.5a.5.5 0 0 1 0-1H1V8.5H.5a.5.5 0 0 1 0-1H1V4H.5a.5.5 0 0 1 0-1H1zM2.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5z"
                />
                <path
                  d="M13.5 6a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5M4.828 4.464a.5.5 0 0 1 .708 0l1.09 1.09a3 3 0 0 1 3.476 0l1.09-1.09a.5.5 0 1 1 .707.708l-1.09 1.09c.74 1.037.74 2.44 0 3.476l1.09 1.09a.5.5 0 1 1-.707.708l-1.09-1.09a3 3 0 0 1-3.476 0l-1.09 1.09a.5.5 0 1 1-.708-.708l1.09-1.09a3 3 0 0 1 0-3.476l-1.09-1.09a.5.5 0 0 1 0-.708M6.95 6.586a2 2 0 1 0 2.828 2.828A2 2 0 0 0 6.95 6.586"
                /></svg
              >CTY TNHH V-SERVICE
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<style scoped>
/* Container */

/* bootstrap */

.navbar-blue {
  background-color: #0033d4;
}

.card-body {
  padding-top: 20px;
}

/* Slide */
.slide {
  margin-top: 25px;
}
.max__hight__slide {
  height: 600px;
  object-fit: cover;
}

/* User  */
.title {
  margin-top: 70px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.user__list {
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: 30px 0 0 0;
  max-width: 100%;
  overflow: hidden;
}

.user__image {
  max-width: 35%;
  width: 170px;
  height: 300px;
  border-radius: 4px;
  -o-object-fit: cover;
  object-fit: cover;
}

.user__introduce {
  line-height: 35px;
  font-size: 18px;
}

/* course */

.course {
  margin-top: 90px;
}

.course__main {
  max-width: 1270px;
  margin-left: 12px;
}

.course__image {
  max-height: 400px;
  margin-bottom: 50px;
  object-fit: cover;
}

.seasons__list {
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: 30px 0 0 0;
  max-width: 100%;
  overflow: hidden;
}

.seasons__list__image {
  max-width: 25%;
  width: 200px;
  min-height: 200px;
  border-radius: 4px;
  object-fit: cover;
}

.course__title__sub {
  padding: 0 20px;
}

/* all swimming__courses */

.swimming__courses {
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
}

.swimming__image {
  object-fit: cover;
  height: 200px;
}

/* advertise achievements  */

.achievements {
  padding: 0 24px;
  display: block;
}

.achievements__list {
  display: flex;
  justify-content: space-between;
}

.achievements__image {
  object-fit: cover;
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #ccc;
  border-radius: 4px;
}
/* footer */

.footer {
  width: 100%;
  height: 100%;
  margin-top: 50px;
  color: #fff;
}

.footer__context {
  display: flex;
  max-width: 100%;
  justify-content: center;
  position: absolute;
  margin-top: -300px;
  padding: 0 90px;
  z-index: 9;
  overflow: hidden;
}

img.footer__backgroug {
  position: relative;
  max-height: 350px;
  width: 100%;
  object-fit: cover;
}

.information {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
}

.information__sub {
  text-align: left;
  line-height: 1.7;
}

li.contact__us__items {
  font-size: 22px;
  line-height: 50px;
  display: flex;
}

.icons__footer {
  width: 25px;
  height: 25px;
  margin-top: 10px;
  margin-right: 15px;
}

.footer__link {
  color: #fff;
  text-decoration: unset;
}

@media screen and (max-width: 1023px) {
  .max__hight__slide {
    height: 400px;
  }
  .footer__context {
    margin-top: -340px;
  }
}

@media screen and (max-width: 899px) {
  .information__sub {
    line-height: 1.6;
  }
}

@media screen and (max-width: 899px) {
  .max__hight__slide {
    height: 350px;
  }
  .information__sub {
    line-height: 1.6;
  }
}

@media screen and (max-width: 884px) {
  .footer__context {
    padding: 0;
  }
  .information {
    width: 20%;
    margin-left: -45px;
  }
  .information__sub {
    display: none;
  }
}
@media screen and (max-width: 767px) {
  .max__hight__slide {
    height: 250px;
  }
  .footer__context {
    margin-top: -300px;
  }
  .information {
    display: none;

    margin-left: -45px;
  }
}

@media screen and (max-width: 600px) {
  .footer__context {
    margin-top: -270px;
  }
}
</style>
