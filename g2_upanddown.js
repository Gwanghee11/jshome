const result = document.getElementById("result");
const num = document.getElementById("num");

//
var com = Math.random() * 100 + 1;
com = Math.floor(com);

cnt = 0

function check_num()
{
var usr = (num.value);
var usr = parseInt(usr);
cnt +=1
result.innerText = com;
if (usr == com){
  msg="이제야 맞추시네요"
  msg += '\n' + cnt + '번째 맞히셨구요';
  const b = document.getElementById('btn');
  b.innerText = '';
  b.disabled ='disabled'
} else if(usr > com) {
msg="다운"
} else {
  msg = "up"
}
result.innerText = msg;
}