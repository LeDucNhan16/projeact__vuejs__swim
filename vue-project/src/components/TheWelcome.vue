<script setup></script>

<template>
  <div class="container wrapper__card">
    <div class="card mb-3">
      <img
        src="../assets/children.webp"
        class="image__card card-img-top"
        alt="image__children"
      />
      <div class="card-body">
        <h5 class="card-title">Teach children to swim</h5>
        <p class="card-text">
          I am a professional swimming instructor who used to be a firefighter
          and has taught swimming to many customers from children to young and
          middle-aged people for many years, so I can understand the swimming
          psychology of all people. age . Trust me, I will make you feel
          satisfied in both spirit and comfort, from the way you teach swimming
          to the way you speak, there will be no way for your customers to be
          dissatisfied because of the spirit and results they receive. believed
          and had faith . For young customers, there will be a different way to
          teach them to swim
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>

    <div class="card mb-3">
      <img
        src="../assets/youth.jpg"
        class="image__card card-img-top"
        alt="image__children"
      />
      <div class="card-body">
        <h5 class="card-title">Customers are young people</h5>
        <p class="card-text">
          I am a professional swimming instructor who used to be a firefighter
          and has taught swimming to many customers from children to young and
          middle-aged people for many years, so I can understand the swimming
          psychology of all people. age . Trust me, I will make you feel
          satisfied in both spirit and comfort, from the way you teach swimming
          to the way you speak, there will be no way for your customers to be
          dissatisfied because of the spirit and results they receive. believed
          and had faith . For young customers, our professional trainers will
          teach Japanese swimming in a professional manner.
        </p>
      </div>
    </div>
    <div class="card mb-3">
      <img
        src="../assets/old.jpg"
        class="image__card card-img-top"
        alt="image__children"
      />
      <div class="card-body">
        <h5 class="card-title">The customer is middle-aged</h5>
        <p class="card-text">
          I am a professional swimming instructor who used to be a firefighter
          and has taught swimming to many customers from children to young and
          middle-aged people for many years, so I can understand the swimming
          psychology of all people. age . Trust me, I will make you feel
          satisfied in both spirit and comfort, from the way you teach swimming
          to the way you speak, there will be no way for your customers to be
          dissatisfied because of the spirit and results they receive. believed
          and had faith . If the customer is middle-aged, I will have a special
          way to teach swimming specifically for middle-aged people and will
          teach slowly to regulate the body and breathing to use as much effort
          as possible.
        </p>
      </div>
    </div>
  </div>

  <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
      />
    </symbol>
  </svg>

  <div class="container">
    <div class="alert alert-success margin__bottom__20px" role="alert">
      <h2 class="alert-heading">
        <div class="alert alert-success d-flex align-items-center" role="alert">
          <svg
            class="bi flex-shrink-0 me-2"
            width="24"
            height="24"
            role="img"
            aria-label="Success:"
          >
            <use xlink:href="#check-circle-fill" />
          </svg>
          <div>Prestigious professional swimming instructor price</div>
        </div>
      </h2>
      <p>
        Our commitment to customers is to teach swimming to slow learners at no
        additional cost
      </p>
      <hr />
      <p class="mb-0 margin__bottom__20px">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        register the course 1tr700đ
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Are you sure you want to register for the course?
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Please put your trust in us and we will not let you down...
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                class="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.wrapper__card {
  margin-top: 60px;
}

.image__card {
  object-fit: cover;
  height: 400px;
}

.margin__bottom__20px {
  margin-bottom: 20px !important;
}
</style>
