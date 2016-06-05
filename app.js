var imageLeft = document.getElementById('left');
var imageCenter = document.getElementById('center');
var imageRight = document.getElementById('right');
var allProducts = [];
var picNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

function Product(name){
  this.name = name;
  this.clicks = 0;
  this.views = 0;
  this.path = 'images/' + name + '.jpg';
}

function pushToProductArray (){
  for (var i = 0; i < picNames.length; i++){
    allProducts.push(new Product(picNames[i]));
  }
}

function randNum (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function imageLoad(){
  var indexLeft = randNum(0, allProducts.length);
  imageLeft.src = allProducts[indexLeft].path;

  var indexCenter = randNum(0, allProducts.length);
  imageCenter.src = allProducts[indexCenter].path;

  var indexRight = randNum(0, allProducts.length);
  imageRight.src = allProducts[indexRight].path;

  while (indexLeft === indexCenter || indexCenter === indexRight || indexLeft === indexRight){
    var indexCenter = randNum(0, allProducts.length);
    imageCenter.src = allProducts[indexCenter].path;
    var indexRight = randNum(0, allProducts.length);
    imageRight.src = allProducts[indexRight].path;
  }
}

function imageClick(event){
  imageLoad();
}

pushToProductArray();
imageLoad();

imageLeft.addEventListener('click', imageClick);
imageCenter.addEventListener('click', imageClick);
imageRight.addEventListener('click', imageClick);

// set up click event to reload images and log clicks
// set up a views logger so that ever time an image is loaded we tally its views
