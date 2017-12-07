var idForAll;
var aircraftForAll;

// function to perform a getrequest on the backend, fills the datatable
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

// Function that puts aircraft data to the server. Used to update the values of an aircaft
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

// Function to perform an delete request on the server
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


//Function to perform an request to the server, I know that this doesn't work and I don't use it but I don't want to delete it for learning purposes
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


//Function to show an modal
function showModal(id){
    $(id).modal('show');
}

//Function used to perform a post request on the server.
function postNewAircraft() {

    var aircraftName = $('#inputName').val();
    var airportLocation = $('#inputAirportLocation').val();
    var maxFuelLevel = 5
    var fuelLevel = 5

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

//Function to fuelup an aircraft, gets the right aircraft and performs an updaterequest
function fuelUp() {
     console.log("Fueling..");
     $.ajax({
            url: "http://localhost:8080/api/aircraft/getOne/" + idForAll,
            type: "get",
            success: function(result) {
                console.log("this is the data: " + result);

                //checks the maximum fuellevel, can't tank more than max!
                if(result.fuelLevel == 5){
                    $('#flyToModal').modal('hide');
                    $('#warningModal').modal('show');
                    //alert('You have not enough fuel to travel');
                    return;
                }
                var currentNumber = result.fuelLevel;
                result.fuelLevel = currentNumber + 1;


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

//Function to fuelup an aircraft, gets the right aircraft and performs an updaterequest
function flyTo() {
     console.log("Fly to..");
     $.ajax({
            url: "http://localhost:8080/api/aircraft/getOne/" + idForAll,
            type: "get",
            success: function(result) {

                console.log("this is the data: " + result);

                //Checks if the fuelLevel is to low to fly
                if(result.fuelLevel <= 1){
                    $('#flyToModal').modal('hide');
                    $('#warningModal').modal('show');
                    //alert('You have not enough fuel to travel');
                    return;
                }

                var newAirportLocation = $('#updateAirportLocation').val();

                var currentNumber = result.fuelLevel;
                result.fuelLevel = currentNumber - 2;
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

//Formvalidator submit function
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

//create the datatable
    $('#table').DataTable({

        columns: [
            {"data": "id"},
            {"data": "aircraftName"},
            {"data": "fuelLevel"},
            {"data": "airportLocation"},
        ]
    });
//make datatable clickable
    var table = $('#table').DataTable();

    $('#table').on( 'click', 'tr', function () {

        idForAll = table.row( this ).data().id

        console.log("This row is clicked: var ID = "+ idForAll);

    } );

    console.log("afterdatatable");
//fill the datatable
    getData();
});