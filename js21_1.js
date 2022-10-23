function school() {
  const s = document.getElementById('school_wow');
  var school_wow = parseInt(s.value);
  var msg;
  if(school_wow > 90) {
    msg = '서울대';
  } else if(school_wow <90) {
msg = '스카이트';
  } else if(school_wow <80){
  msg = '고려대';
} else if(school_wow <70){
  msg = '무난한 점수';
} else if(school_wow <60){
  msg = '쓰으븡브으브으';
} else if(school_wow < 50){
  msg = '이게 성적인가요?';
} else  {
  msg = '사람은 아니네요 ^-^';
}
const r = document.getElementById('result');
r.innerText = school_wow + ' is ' + msg;
}