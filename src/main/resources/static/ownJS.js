var idForAll;

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

            var aircraft = result;
            console.log(aircraft.aircraftName);
            return aircraft;

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

        var aircraftReturned = getOne(idForAll);


    } );

    console.log("afterdatatable");

    getData();
});