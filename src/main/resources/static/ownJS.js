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
                console.log("succes, posted airport");
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