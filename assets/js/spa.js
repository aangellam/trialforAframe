$(document).ready(function(){ 
  $(document).on('click', ".link",  function(e){
    e.preventDefault();

    var pageRef = $(this).attr('href');
    console.log(pageRef);

    callPage(pageRef)
  });

  function callPage(pageRefInput) {
    console.log(pageRefInput);
    $.ajax({
      url : pageRefInput,
      type : "GET",
      dataType : 'text',

      success: function(response) {
        console.log(response);
        $('.content').html(response);
      },

      error: function(error) {
        console.log("Page not loaded");
      },

      complete: function(xhr, status) {
        console.log("Request completed");
      }
    });
  }
});

