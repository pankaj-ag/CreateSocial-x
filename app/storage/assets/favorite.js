$(document).on('click', '.favorite', function() {
    alert('hello');
        var userid = $(this).data('userid');
        var postid = $(this).data('type-id');
        var response = 'hii4';
          $.ajax({
             
            url :baseUrl + 'favorite/add/'+userid+'/'+postid+'/1',
            error: function(xhr, status, error) {
                    response = "in error";
                    //alert(response);
             },
            success: function(data){
                response = "in success "+ data;
                alert(response);
             },
            complete: function () {
               // response = "completed";
            }
         });
        return false;
        
    });