$('html').keydown(function(event){
    if(event.which == 13){
        classChange();
    }
});

function classChange(){
    var active = $('.active')[0];
    console.log(active.attr('id'));
}