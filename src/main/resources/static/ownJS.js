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
    $(id).modal('toggle');
    $(document).ready(getAirports());
}

function getAirports() {
    console.log("getting rooms...")

    $.ajax({
        url:"http://localhost:8080/api/airport/all",
        type:"get",
        success: function(result) {
            airports = result;
            console.log("These are the airports: " + airports);
            for(i=0;i<airports.length;i++) {
                    $("#airportSelect").append('<option value='+airports[i].id+'>'+airports[i].name+'</option>');
               }
        }
    })

}

function postNewAircraft() {

    var aircraftName = $('#inputAircraftName').val();
    var airportLocation = $('#inputAirportLocation').val();
    var maxFuelLevel = $('#inputMaxFuelLevel').val();
    var FuelLevel = $('#inputFuelLevel').val();

    var newAircraft = {
        aircraftName : aircraftName,
        airportLocation : airportLocation,
        maxFuelLevel : maxFuelLevel,
        FuelLevel : FuelLevel
        }

    $.ajax({
            url: "http://localhost:8080/api/aircraft/add",
            type: "post",
            data: validJsonAirport,
            contentType: "application/json",
            success: function(result){
                console.log("succes, posted airport");
                }
    });











}

function postNewAirport(){

            var airportName = $('#inputAirportName').val();
            var authorOfNewBook = $('#author').val();

            var newAirport = {
                aircraftName : airportName,
                aircraftList : [{}]
            }

            var validJsonAirport = JSON.stringify(newAirport);
                    console.log(validJsonAirport);

            $.ajax({
                    url: "http://localhost:8080/api/airport/add",
                    type: "post",
                    data: validJsonAirport,
                    contentType: "application/json",
                    success: function(result){
                        console.log("succes, posted airport");
                    }
                    });
}



$(document).ready(function(){

    console.log("predatatable");

    $('#table').DataTable({
        columns: [
            {"data": "aircraftName"},
            {"data": "fuelLevel"},
            {"data": "airport.getName"},
        ]
    });

    console.log("afterdatatable");

    getData();
});