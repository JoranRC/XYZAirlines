var idForAll;
var aircraftForAll;

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

// Puts aircraft data to the server
function putData(aircraft){
    $.ajax({
        url:"http://localhost:8080/api/aircraft/update",
        type:"put",
        data: aircraft,
        contentType: "application/json",
        success: function(result){
            console.log("Updated aircraft.");
            getData();
        }
    });
}


function deleteOne() {
    console.log("Deleting data...")
    $.ajax({
            url: "http://localhost:8080/api/aircraft/delete/" + idForAll,
            type: "delete",
            success: function(result) {
                console.log("Data is deleted");
                getData();
            }
        })
    }


function getOne(id) {
    console.log("Getting data..... ");
    var id = id;
    $.ajax({
        url: "http://localhost:8080/api/aircraft/getOne/" + id,
        type: "get",
        success: function(result) {
            console.log("this is the data: " + result);
            console.log(result.aircraftName);
            return result;

        }
    })
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
                $('#myModal').modal('hide');
                  $('#inputName').val("");
                  $('#inputAirportLocation').val("");
                  $('#inputMaxFuelLevel').val("");
                  $('#inputFuelLevel').val("");
                getData();
            }
    });
}

function fuelUp() {
     console.log("Fueling..");
     $.ajax({
            url: "http://localhost:8080/api/aircraft/getOne/" + idForAll,
            type: "get",
            success: function(result) {
                console.log("this is the data: " + result);

                console.log(result.aircraftName);
                var currentNumber = result.fuelLevel;
                console.log(currentNumber);
                result.fuelLevel = currentNumber + 1;
                console.log(result.fuelLevel);

                var newAircraft = {
                        id : result.id,
                        aircraftName : result.aircraftName,
                        airportLocation : result.airportLocation,
                        maxFuelLevel : result.maxFuelLevel,
                        fuelLevel : result.fuelLevel
                        }

                var validJsonAircraft = JSON.stringify(newAircraft);
                putData(validJsonAircraft);


            }
        })
}

function flyTo() {
     console.log("Fly to..");
     $.ajax({
            url: "http://localhost:8080/api/aircraft/getOne/" + idForAll,
            type: "get",
            success: function(result) {
                console.log("this is the data: " + result);

                var newAirportLocation = $('#updateAirportLocation').val();

                result.airportLocation = newAirportLocation;

                var newAircraft = {
                        id : result.id,
                        aircraftName : result.aircraftName,
                        airportLocation : result.airportLocation,
                        maxFuelLevel : result.maxFuelLevel,
                        fuelLevel : result.fuelLevel
                        }

                var validJsonAircraft = JSON.stringify(newAircraft);
                putData(validJsonAircraft);
                $('#flyToModal').modal('hide');

            }
        })
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
            {"data": "id"},
            {"data": "aircraftName"},
            {"data": "fuelLevel"},
            {"data": "airportLocation"},
        ]
    });

    var table = $('#table').DataTable();

    $('#table').on( 'click', 'tr', function () {
        idForAll = table.row( this ).data().id

        console.log("This row is clicked: var ID = "+ idForAll);

    } );

    console.log("afterdatatable");

    getData();
});