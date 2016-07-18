var i = 0;
var j = 0;
$('#catPic').click(function(e) {
  i += 1;
  if (i === 1){
    $('#clickTime').text(i + " click");
  }
  else{
    $('#clickTime').text(i + " clickz");
  }
});
$('#catPic2').click(function(e) {
  j += 1;
  if (j === 1){
    $('#clickTime2').text(j + " click");
  }
  else{
    $('#clickTime2').text(j + " clickz");
  }
});

var cats = ["snuffy", "fluffy", "scruffy"];

// Let's loop over the numbers in our array
for (var i = 0; i < cats.length; i++) {

    // This is the number we're on...
    var cat = cats[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = cat;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(nummy) {
        return function() {
            alert(nummy);
        };
    })(cat));

    document.body.appendChild(elem);
};
