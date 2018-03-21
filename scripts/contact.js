$(document).ready(function() {

    $(".ajaxForm").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                    window.location.href = "index.html";
                }else{
                    alert("An error occured: " + response.message);
                }
            }
        });
    });

});
