$(document).ready(function() {
  $('#sicknessButton').click(function() {
    let sickness = $('#sickness').val();
    let apiKey = process.env.exports.apiKey;
    $('#sickness').val("");
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${sickness}&location=wa-seattle&skip=0&limit=10&user_key=${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('#name').text(`${response.data.practices[0].name}`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});