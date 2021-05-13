$(function () {

$(a).click(function(event){
if (this.hash !== "") {
event.preventDefault();
        
var hash = this.hash;
        
$("html, body").animate({
scrollTop: $(hash).offset().top
}, 800, function(){
window.location.hash = hash;
})
}
})

$('[data-toggle="tooltip"]').tooltip()  
 
$(".plane").click( function (){
    $( ".text1" ).toggle();
    });

$(".mountain").click( function (){
    $( ".text2" ).toggle();
    });    
    
$(".route").click( function (){
    $( ".text3" ).toggle();
    });


});
