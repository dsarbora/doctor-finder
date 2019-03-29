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
        $('#name').text(`${response.data.practices}`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});