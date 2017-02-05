function updateClock() {

  var now = new Date();
  var seconds = addZero(now.getSeconds());
  var minutes = addZero(now.getMinutes());
  var hours = addZero(now.getHours());

  // Output time for testing
  var time = hours + ':' + minutes + ':' + seconds;

  // Print the time
  document.getElementById('hour1').innerHTML = hours.toString()[0];
  document.getElementById('hour2').innerHTML = hours.toString()[1];
  document.getElementById('minute1').innerHTML = minutes.toString()[0];
  document.getElementById('minute2').innerHTML = minutes.toString()[1];
  document.getElementById('second1').innerHTML = seconds.toString()[0];
  document.getElementById('second2').innerHTML = seconds.toString()[1];

  // set the columns of circles
  var a = document.getElementsByClassName("circle1");
  var b = document.getElementsByClassName("circle2");
  var c = document.getElementsByClassName("circle3");
  var d = document.getElementsByClassName("circle4");
  var e = document.getElementsByClassName("circle5");
  var f = document.getElementsByClassName("circle6");

  // set the amount of circles in a column
  var o = 2;
  var p = 3;
  var q = 4;


  // buildTime(time unit, first column, second column,
  //           first column size, second column size)
  buildTime(seconds, a, b, p, q);
  buildTime(minutes, c, d, p, q);
  buildTime(hours, e, f, o, q);
  // Repeat every 1 second
  setTimeout(updateClock, 1000);

}

function addZero(i) {
  // add leading zeros to the time.
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}


function buildTime(value, x, y, colOne, colTwo) {

  // split the two ints
  var binarySec = (""+value).split("");

  // convert the ints into binary
  binarySec1 = parseInt(binarySec[0]).toString(2);
  binarySec2 = parseInt(binarySec[1]).toString(2);

  // add leading zeros to the binary output
  while (binarySec1.length < colOne) {
      binarySec1 = "0" + binarySec1;
  }
  while (binarySec2.length < colTwo) {
      binarySec2 = "0" + binarySec2;
  }


  for(var i = 0; i < colTwo; i++) {
    // set the individual bit to l
    var l = binarySec2.charAt(i);

    // if l is a 1, make it red
    if(l === '1') {
      x[i].style.backgroundColor = "#f2bf3e";
    }
    // if not, make it grey
    else if(l === '0') {
      x[i].style.backgroundColor = "#bababa";
    }
  }

  // do the same for the second column
  for(var i = 0; i < colOne; i++) {
    var l = binarySec1.charAt(i);

    if(l === '1') {
      y[i].style.backgroundColor = "#f2bf3e";
    }
    else if(l === '0') {
      y[i].style.backgroundColor = "#bababa";
    }
  }

}


updateClock();
