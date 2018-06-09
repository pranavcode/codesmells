function resetFilterButtons() {
  $('.filters .btn').each(function(index){
    var GREY_COLOR = "#9e9e9e";
    $(this).css("background", GREY_COLOR);
  });
}

function search() {
  resetFilterButtons();
  var searchTerm = $('#search-box').val().toLowerCase()
  $('.card').each(function(index){
    if(this.innerHTML.toLowerCase().indexOf(searchTerm) > -1) {
      $(this).parent().show();
    } else {
      $(this).parent().hide();
    }
  });
}

function categorize(category) {
  if(category === 'Clear') {
    $('.card').each(function(index){
      $(this).parent().show();
    });
    resetFilterButtons();
    $('.clear').hide();
  } else {
    $('.card-header').each(function(index){
      if(this.innerHTML.indexOf(category) > -1) {
        $(this).parent().parent().show();
      } else {
        $(this).parent().parent().hide();
      }
    });

    $('.filters .btn').each(function(index){
      if(this.innerHTML.indexOf(category) > -1) {
        $(this).css("background", "#1e1e1e");
      } else {
        $(this).css("background", "#9e9e9e");
      }
    });

    $('.clear').show();
  }
}
