import $ from 'jquery';

$(document).ready(function() {
  $('#sicknessButton').click(function() {
    let sickness = $('#sickness').val();
    $('#sickness').val("");
    console.log(sickness);
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
          $('#name').text(`${response.data[0].profile.first_name} ${response.data[0].profile.last_name}`);
          $('#address').text(`${response.data[0].practices[0].visit_address.street}`);
          $('#phone').text(`${response.data[0].practices[0].phones[0].number}`);
          $('#website').text(`${response.data[0].practices[0].website}`);
        }
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});