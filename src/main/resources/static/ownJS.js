function getData() {
    console.log("getting data...");

    $.ajax({
        url: "http://localhost:8080/api/aircraft/all",
        type: "get",
        success: function(aircrafts) {
            console.log("This is the Data: " + aircrafts);

            $('#table').DataTable().clear();
            $('#table').DataTable().rows.add(aircrafts);
            $('#table').DataTable().columns.adjust().draw();
        }
    });
}



function showModal(id){
    $(id).modal('show');
}


function postNewAircraft() {

    var aircraftName = $('#inputName').val();
    var airportLocation = $('#inputAirportLocation').val();
    var maxFuelLevel = $('#inputMaxFuelLevel').val();
    var fuelLevel = $('#inputFuelLevel').val();

    var newAircraft = {
        aircraftName : aircraftName,
        airportLocation : airportLocation,
        maxFuelLevel : maxFuelLevel,
        fuelLevel : fuelLevel
        }

    var validJsonAircraft = JSON.stringify(newAircraft);
        console.log(validJsonAircraft);

    $.ajax({
            url: "http://localhost:8080/api/aircraft/add",
            type: "post",
            data: validJsonAircraft,
            contentType: "application/json",
            success: function(result){
                console.log("succes, posted aircraft");
                $('#newAircraftModal').modal('hide');
                  $('#inputName').val("");
                  $('#inputAirportLocation').val("");
                  $('#inputMaxFuelLevel').val("");
                  $('#inputFuelLevel').val("");
                getData();
            }
    });
}


$(document).ready(function(){



    $('#form').validator().on('submit', function (e) {
          if (e.isDefaultPrevented()) {
            // INVALID FORM, DO NOTHING
          } else {
            // Do something.
           postNewAircraft();
            // Prevent default form action
            e.preventDefault();
          }
        });

    console.log("predatatable");

    $('#table').DataTable({

        columns: [
            {"data": "aircraftName"},
            {"data": "fuelLevel"},
            {"data": "airportLocation"},
        ]
    });

    console.log("afterdatatable");

    getData();
});