module.exports = function (app, dataBase) {
    var dataBase = dataBase;
    var app = app;

    // Fetch Employee Data
    app.get('/getEmployee', function(request, response) {
        var sql = "SELECT * FROM `employee`;";
        dataBase.query(sql, function(error, data){
            if (error) {
                console.log(error);
            } else {
                response.json(data);
            }
        });
    });
}