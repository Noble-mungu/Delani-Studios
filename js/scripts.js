//  $(document).ready(function(){
//          $(".submit").click(fuction(){
//                    event.preventDefault();
//                    console.log("Clicked button");
        
//                    var email = $(".email").val();
//                    var name = $(".name").val();
//                    var message = $(".message").val();
//                    Var statusElm = $(".status");
        
//                    if(email.length > 5 && email.include("@") && email.include("."){
//                        console.log("Email is valid");
//                    });
//                     else {
//                       console.log("Email is not valid");
//                   }
//                });
//        })
    
        







$(document).ready(function(){
    
    $(".btn_1").click(function(){
        $("p.par_1").toggle();   
    });
    $("p.par_1").click(function(){
        $(".btn_1").toggle();
    });
     $(".btn_2").click(function(){
         $("p.par_2").toggle();   
     });
     $("p.par_2").click(function(){
         $(".btn_2").toggle();
     });
     $(".btn_3").click(function(){
         $("p.par_3").toggle();   
     });
     $("p.par_3").click(function(){
         $(".btn_3").toggle();
     }); 
  });

  