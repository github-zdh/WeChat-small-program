function com() {
  this.first = function () {
    console.log('first com');
  }
  this.second = function () {
    console.log('second com');
  }
}

module.exports = new com();