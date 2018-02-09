function main(){
     this.first=function(){
       console.log('first main');
     }
     this.second = function () {
       console.log('second main');
     }
}



module.exports = new main();

