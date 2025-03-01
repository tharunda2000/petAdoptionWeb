
let body = "";

fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_4PosqEp4RTatBZ2MLopLSTDBcj76ADSYSqPVwKLXvO1H1clQVdpFpTk5E56bTWSR")
  .then(res => res.json())
  .then(data => {

    data.forEach(element => {

        body+=`<div class="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
            <div class="card" style="width: 383px;">

            <div class="image-zoom">
            <div class="image-zoom-wrapper">
              <img src="${element.url}" class="card-img-top" id="pet-img" alt="...">
            </div>
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

  