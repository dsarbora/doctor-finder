import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import {findDoctors} from './doctor-lookup.js';

$(document).ready(function() {
  $('#sicknessButton').click(function() {
    let sickness = $('#sickness').val();
    $('#sickness').val("");
    findDoctors(sickness);
  });
});