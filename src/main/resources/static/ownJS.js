function getData() {
    console.log("getting data...");

    $.ajax({
        url: "http://localhost:8080/api/aircraft/all",
        type: "get",
        success: function(aircrafts) {
            console.log("This is the Data: " + aircrafts);

            $('#table').DataTable().clear();
            $('#table').DataTable().rows.add(books);
            $('#table').DataTable().columns.adjust().draw();
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