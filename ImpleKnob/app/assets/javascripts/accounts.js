
document.addEventListener('turbolinks:before-cache', function(){


    $('#Mytable').DataTable().destroy();


})

document.addEventListener('turbolinks:load', function(){
    $('#Mytable').DataTable();

    function Apply()
    {
     var  r = $("#red").val();
     var  g = $("#green").val();
     var  b = $("#blue").val();
    
      $('#result-rgb').css('background-color', 'rgb('+ r +','+ g +','+ b +')');
    }
    $(function() {
    
        $(".dial").knob({ 
        'change' : function (r) { 
           
          },
          'release' : function (v) {   Apply(); }
        });
    
        $('.dial').trigger(
            'configure',
            {
                "min":0,
                "max":255,
                "fgColor":"#FF0000",
                "skin":"tron",
                "cursor":true
            }
        );
       
    });
       
  
})

