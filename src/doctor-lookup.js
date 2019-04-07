import $ from 'jquery';

export function findDoctors(sickness){
  let request = new XMLHttpRequest();
  const url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${sickness}&location=wa-seattle&limit=10&user_key=${process.env.exports.apiKey}`;
  request.onreadystatechange = function(){
    if(this.readyState===4 && this.status===200){
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
    else{
      $("#errors").text("Error " + this.status);
    }
  };

  request.open("GET", url, true);
  request.send();

  const getElements = function(response){
    if(response.data.length==0){
      $('#result').text("No results found.");
    }
    else{
      $('#result').text("");
      for(var i=1; i<11; i++){
        let acceptingNew = response.data[i-1].practices[0].accepts_new_patients;
        let acceptingNewEmoji='';
        if(acceptingNew){
          acceptingNewEmoji='👍';
        }
        else{
          acceptingNewEmoji='👎';
        }
        $('#result').append(`<h2>Doctor ${i}</h2><h4>Name: ${response.data[i-1].profile.first_name} ${response.data[i-1].profile.last_name}</h4>
        <h4>Address: ${response.data[i-1].practices[0].visit_address.street}</h4>
        <h4>Phone: ${response.data[i-1].practices[0].phones[0].number}
        <h4>Website: ${response.data[i-1].practices[0].website}</h4>
        <h4>Accepting New Patients: ${acceptingNewEmoji}</h4>
        <hr>`);
      }
    }
  };
}