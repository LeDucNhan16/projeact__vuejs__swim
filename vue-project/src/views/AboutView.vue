<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <TheWelcome />

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
  </main>
</template>

<style scoped>
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
  margin-top: -280px;
  padding: 0 90px;
  z-index: 9;
}

img.footer__backgroug {
  position: relative;
  max-height: 300px;
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
  font-size: 20px;
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
</style>
