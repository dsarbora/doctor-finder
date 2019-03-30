import $ from 'jquery';
import './styles.css';

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
          for(var i=1; i<10; i++){
            $('#result').append(`<h2>Doctor ${i}</h2><h4>Name: ${response.data[i-1].profile.first_name} ${response.data[i-1].profile.last_name}</h4>
                <h4>Address: ${response.data[i-1].practices[i-1].visit_address.street}</h4>
                <h4>Phone: ${response.data[i-1].practices[i-1].phones[0].number}
                <h4>Website: ${response.data[i-1].practices[i-1].website}</h4>
                <h4>Accepting New Patients: ${response.data[i-1].practices[0].accepts_new_patients}</h4>
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