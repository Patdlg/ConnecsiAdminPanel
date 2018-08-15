var lowerSlider = document.querySelector('#lower'),
  upperSlider = document.querySelector('#upper'),
  lowerVal = parseInt(lowerSlider.value);
upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);

  if (upperVal < lowerVal + 4) {
    lowerSlider.value = upperVal - 4;

    if (lowerVal == lowerSlider.min) {
      upperSlider.value = 4;
    }
  }
};


lowerSlider.oninput = function () {
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);

  if (lowerVal > upperVal - 4) {
    upperSlider.value = lowerVal + 4;

    if (upperVal == upperSlider.max) {
      lowerSlider.value = parseInt(upperSlider.max) - 4;
    }

  }
};


function fun1() {
  var rng = document.getElementById('lower'); //rng - это Input
  var p = document.getElementById('one'); // p - абзац
  p.innerHTML = rng.value;
}