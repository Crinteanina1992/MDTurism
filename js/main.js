function show(){
    document.getElementById("side-menu").classList.toggle("show");
}

function sideMenu() {
    document.getElementById("activ").classList.toggle("show");

}

function data(){
    var span;
    var data = new Date();
    var an;
    
    an = data.getFullYear();
    span = document.getElementById("data");
    span.innerHTML ="Copyright MDTurism.com <br/>"+ an;
}
data();


