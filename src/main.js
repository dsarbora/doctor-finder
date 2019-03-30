import $ from 'jquery';

$(document).ready(function() {
  $('#sicknessButton').click(function() {
    let sickness = $('#sickness').val();
    $('#sickness').val("");
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${sickness}&location=wa-seattle&skip=0&limit=10&user_key=${process.env.exports.apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        if(response.data.length==0){
          $('#name').text("No results found.");
        }
        else{
          $('#result').text("");
          for(var i=0; i<10; i++){
            $('#result').append(`<h4>Name: ${response.data[i].profile.first_name} ${response.data[i].profile.last_name}</h4>
                <h4>Address: ${response.data[0].practices[i].visit_address.street}</h4>
                <h4>Phone: ${response.data[0].practices[i].phones[0].number}
                <h4>Website: ${response.data[0].practices[i].website}
                <hr>`);
          }
        }
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});