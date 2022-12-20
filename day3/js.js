var resumeBtn=document.getElementById('resume');
var workBtn=document.getElementById('work');
var contactBtn=document.getElementById('contact');
var clickbutton = document.getElementById('home');

var arr=[clickbutton,resumeBtn, workBtn, contactBtn];

clickbutton.addEventListener('click', function(){
    // console.log(this.getAttribute('aria-expanded'))
    // var closed =  this.getAttribute('aria-expanded');
    for(let i=0;i<arr.length;i++){
        // console.log(arr[i].getAttribute('aria-expanded'),i)
        // if (arr[i].classList('show')) {
            console.log(arr[i].classList());
            arr[i].classList.remove("show");
            arr[i].classList.add("collapsed")
            // console.log(arr[i].classList());
            // console.log(this.getAttribute('aria-expanded'),i)
        }});
