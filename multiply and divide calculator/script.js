// const firstInput = document.querySelector('#firstInput');
// const secondInput = document.querySelector('#secondInput');
const mul = document.querySelector('#mul');
const div = document.querySelector('#div');
const resultShow = document.querySelector('#resultShow');





function multiplying() {
    var x = document.querySelector('#firstInput').value;
    var y = document.querySelector('#secondInput').value;
    var r = x * y;
    document.querySelector('#resultShow').innerHTML = r;

}



function dividing() {
    var x = document.querySelector('#firstInput').value;
    var y = document.querySelector('#secondInput').value;
    let r2 = x / y;
    document.querySelector('#resultShow').innerHTML = r2;
}

