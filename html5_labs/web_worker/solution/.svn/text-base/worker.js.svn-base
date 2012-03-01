function fibonacci(n) {
  var s = 0;
  if(n == 0) return(s);
  if(n == 1) {
    s += 1;
    return(s);
  }
  else {
    return(fibonacci(n - 1) + fibonacci(n - 2));
  }
}

function show(n) {
  var i;
  for(i = 0; i <= n; i++) {
    // TODO 4: Send the number from the suite to the main window
    // The message to send is: fibonacci(i)
    self.postMessage(fibonacci(i));
  }
}

self.onmessage=function(event){
  // TODO 5: Use the show method defined above and pass the message sent from the main window as a parameter
  show(event.data);
};