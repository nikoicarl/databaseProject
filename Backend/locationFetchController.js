module.exports = function (app, dataBase) {
    var dataBase = dataBase;
    var app = app;

    // Fetch Location Data
    app.get('/getLocation', function(request, response) {
        var sql = "SELECT * FROM `location`;";
        dataBase.query(sql, function(error, data){
            if (error) {
                console.log(error);
            } else {
                response.json(data);
            }
        });
    });
}