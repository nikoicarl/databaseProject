module.exports = function (app, dataBase) {
    var dataBase = dataBase;
    var app = app;

    // Fetch All Members Data
    app.get('/getAllMembers', function(request, response) {
        var sql = "SELECT memberID,fname,lname,age,dob,address,phone,location.street_number, location.street_name, location.city, location.postal_code, location.phone_number FROM `member` INNER JOIN location ON member.locationID = location.locationID;";
        dataBase.query(sql, function(error, data){
            if (error) {
                console.log(error);
            } else {
                response.json(data);
            }
        });
    });
}