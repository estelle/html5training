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
        document.getElementById("seq").innerHTML += fibonacci(i) + " ";
    }
}

window.addEventListener('load', function(){
    document.getElementById("btn_reset").addEventListener('click',function(){
        document.getElementById("seq").innerHTML="";
    },true);

    document.getElementById("btn_compute").addEventListener('click',function(){
        num=document.getElementById("iterations").value;
        document.getElementById("seq").innerHTML="";
        show(num);
    },true);

    // TODO 1: Create a new Worker, the worker file is named worker.js (one line)
    var fib_worker=new Worker('worker.js');

    fib_worker.onmessage=function(event){
        // TODO 2: This callback is executed when we get a message from the worker
        // Display the message from the worker. Replace xxxxxx by the actual message from the worker
        document.getElementById('seq').innerHTML += event.data;
        
        document.getElementById('seq').innerHTML += " ";
    };

    document.getElementById('btn_compute_worker').onclick=function() {
        num=document.getElementById("iterations").value;
        document.getElementById("seq").innerHTML="";
        
        // TODO 3: Send the num variable as a message to the worker (one line)
        fib_worker.postMessage(num);
    };

},true);

