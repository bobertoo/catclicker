var cats = [["snuffy", "meow", "meowth0.jpg"],
  ["fluffy", "woof", "meowth1.png"], ["scruffy", "barf", "meowth2.png"],
  ["floofer", "howl", "meowth3.jpg"], ["gross", "derp", "meowth4.jpg"]];

// Let's loop over the numbers in our array
for (var i = 0; i < cats.length; i++) {

    // This is the number we're on...
    var cat = cats[i];
    var counter = 0;
    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = cat[0];

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(nummy, cCopy) {
        return function() {
          document.getElementById("catName").innerHTML = "<h1>" + nummy[1] +
            "</h1>";
          document.getElementById("catPic").innerHTML = "<img id='" + nummy[1] +
            "' src='static/images/" + nummy[2] + "'>";
          if (cCopy == 0){
            document.getElementById("catClicks").innerHTML = "No clicks yet!!";
          } else {
            document.getElementById("catClicks").innerHTML = cCopy + " clicks!";
          }
          document.getElementById(nummy[1]).addEventListener('click', function() {
            cCopy += 1;
            if (cCopy == 1){
              document.getElementById("catClicks").innerHTML = cCopy + " click!";
            } else {
              document.getElementById("catClicks").innerHTML = cCopy + " clicks!";
            }
          });
        };
    })(cat, counter));

    document.body.appendChild(elem);
};
