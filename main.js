const myFunc = function() {
  let div = document.getElementById('test');
  let div1 = document.getElementById('test1');
  let number = div.innerText;
  number--;
  if (number == 0) {
    alert('hiiiiiiiiiiiiiiiii');
  }
  div.innerText = number;
  div1.innerText = 10 - number;
};
