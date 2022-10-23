function btn_click() {
    const name = document.getElementById("name");
    const age = document.getElementById("age");

    console.log(name.value);
    console.log(age.value);
var a = parseInt(age.value) + 1;
    const result = document.getElementById("result");
    var msg = name.value + '님은 내년에' + a + "살이되는군요!";
    result.innerText = msg
}