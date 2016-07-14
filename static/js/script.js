var i = 0;
$('#catPic').click(function(e) {
  i += 1;
  if (i === 1){
    $('#clickTime').text(i + " click");
  }
  else{
    $('#clickTime').text(i + " clickz");
  }
});
