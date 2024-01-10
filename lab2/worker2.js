self.onmessage = function () {
  let s = 0;
  for (let i = 0; i < 4000000000; i++) {
    s += i;
  }
  self.postMessage(s);
};
