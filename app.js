
let body = "";

fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_4PosqEp4RTatBZ2MLopLSTDBcj76ADSYSqPVwKLXvO1H1clQVdpFpTk5E56bTWSR")
  .then(res => res.json())
  .then(data => {

    data.forEach(element => {

        body+=`<div class="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center" data-aos="fade-down" data-aos-delay="500">
            <div class="card" style="width: 383px;">

            <div class="image-zoom" id="pet-img">
            <div class="image-zoom-wrapper">
              <img src="${element.url}" class="card-img-top" id="pet-img" alt="...">
            </div>
            <a href="#" class="paw-icon"><i class="ph ph-paw-print" id="paw-icon"></i></a>
            </div>


            <div class="card-body">
            <button type="button" class="btn btn-outline-danger">Adopt Now</button>
            <button type="button" class="btn btn-outline-warning">View details</button>
            </div>
          </div>
          </div>`
        console.log(element);

    });

    document.getElementById("pet").innerHTML=body;

  })

  
AOS.init({

  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

  