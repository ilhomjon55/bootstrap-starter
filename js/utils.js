// Function to select html elements
var $_ = function (selector, node = document) {
  return node.querySelector(selector);
}

var $$_ = function (selector, node = document) {
  return node.querySelector(selector);
}