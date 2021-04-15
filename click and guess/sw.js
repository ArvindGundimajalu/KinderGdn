self.addEventListener('install', (e) => {
    //var loadable = null;
    fetch('./installable.json')
    .then( function(response) {

      if (response.status !== 200) 
      
      console.log(response.status);
      if (response.status == 200) {
        response.json().then(function(data) {
          console.log(data);
          //loadable = response.responseText;
          data.files.forEach(element => {
            caches.open('click-and-guess-store').then((cache) => cache.add(element))  
          });

          //e.waitUntil(
          //  caches.open('click-and-guess-store').then((cache) => cache.addAll(data.files))
          //);
        });        
      }
      else{
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });;
  });
  
  self.addEventListener('fetch', (e) => {
    //console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });

 /* function loadDoc(filename, fn) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = fn;
    xhttp.open("GET", "filename", true);
    xhttp.send();
  }
  
  self.addEventListener('install', (e) => {
      e.waitUntil(function() {
        loadDoc('installable.json', function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
            this.responseText;
          }
        });
        caches.open('click-and-guess-store').then((cache) => cache.addAll([
          './data.json',
          './favicon.ico',
          './index.html',
          './css/app.css',
          './css/bootstrap-grid.css',
          './css/bootstrap-grid.css.map',
          './css/bootstrap-grid.min.css',
          './css/bootstrap-grid.min.css.map',
          './css/bootstrap-reboot.css',
          './css/bootstrap-reboot.css.map',
          './css/bootstrap-reboot.min.css',
          './css/bootstrap-reboot.min.css.map',
          './css/bootstrap.css',
          './css/bootstrap.css.map',
          './css/bootstrap.min.css',
          './css/bootstrap.min.css.map',
          './img/K1.png',
          './img/K2.png',
          './img/K3.png',
          './img/K4.png',
          './img/K5.png',
          './img/K6.png',
          './img/K7.png',
          './img/K8.png',
          './img/K9.png',
          './img/L1.png',
          './img/L10.png',
          './img/L11.png',
          './img/L2.png',
          './img/L3.png',
          './img/L4.png',
          './img/L5.png',
          './img/L6.png',
          './img/L7.png',
          './img/L8.png',
          './img/L9.png',
          './img/M1.png',
          './img/M10.png',
          './img/M11.png',
          './img/M2.png',
          './img/M3.png',
          './img/M4.png',
          './img/M5.png',
          './img/M6.png',
          './img/M7.png',
          './img/M8.png',
          './img/M9.png',
          './img/N1.png',
          './img/N2.png',
          './img/N3.png',
          './img/N4.png',
          './img/N5.png',
          './img/N6.png',
          './img/O1.png',
          './img/O2.png',
          './img/O3.png',
          './img/O4.png',
          './img/O5.png',
          './img/O6.png',
          './img/P1.png',
          './img/P2.png',
          './img/P3.png',
          './img/P4.png',
          './img/P5.png',
          './img/P6.png',
          './img/P7.png',
          './img/Q1.png',
          './img/Q2.png',
          './img/Q3.png',
          './img/Q4.png',
          './img/Q5.png',
          './img/Q6.png',
          './img/Q7.png',
          './img/R1.png',
          './img/R2.png',
          './img/R3.png',
          './img/R4.png',
          './img/R5.png',
          './img/R6.png',
          './img/R7.png',
          './img/R8.png',
          './img/S1.png',
          './img/S10.png',
          './img/S11.png',
          './img/S12.png',
          './img/S2.png',
          './img/S3.png',
          './img/S4.png',
          './img/S5.png',
          './img/S6.png',
          './img/S7.png',
          './img/S8.png',
          './img/S9.png',
          './img/star.png',
          './img/T1.png',
          './img/T10.png',
          './img/T11.png',
          './img/T2.png',
          './img/T3.png',
          './img/T4.png',
          './img/T5.png',
          './img/T6.png',
          './img/T7.png',
          './img/T8.png',
          './img/T9.png',
          './img/U1.png',
          './img/U2.png',
          './img/U3.png',
          './img/U4.png',
          './img/U5.png',
          './img/U6.png',
          './img/V1.png',
          './img/V2.png',
          './img/V3.png',
          './img/V4.png',
          './img/V5.png',
          './img/V6.png',
          './img/V7.png',
          './img/V8.png',
          './img/W1.png',
          './img/W10.png',
          './img/W2.png',
          './img/W3.png',
          './img/W4.png',
          './img/W5.png',
          './img/W6.png',
          './img/W7.png',
          './img/W8.png',
          './img/W9.png',
          './img/X1.png',
          './img/X2.png',
          './img/X3.png',
          './img/X4.png',
          './img/X5.png',
          './img/Y1.png',
          './img/Y2.png',
          './img/Y3.png',
          './img/Y4.png',
          './img/Y5.png',
          './img/Y6.png',
          './img/Y7.png',
          './img/Z1.png',
          './img/Z2.png',
          './img/Z3.png',
          './img/Z4.png',
          './img/Z5.png',
          './img/Z6.png',
          './img/Z7.png',
          './img/Z8.png',
          './img/Z9.png',
          './js/bootstrap.bundle.js',
          './js/bootstrap.bundle.js.map',
          './js/bootstrap.bundle.min.js',
          './js/bootstrap.bundle.min.js.map',
          './js/bootstrap.js',
          './js/bootstrap.js.map',
          './js/bootstrap.min.js',
          './js/bootstrap.min.js.map',
          './js/index.js',
          './js/jquery.js'
        ])),
      });
    });*/