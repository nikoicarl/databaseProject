module.exports = function (app, dataBase) {
    var dataBase = dataBase;
    var app = app;

    // Fetch All Members Data
    app.get('/getAllMembers', function(request, response) {
        var sql = "SELECT membership_type.memberID, member.fname AS member_fname, member.lname AS member_lname, member.phone, member.dob, member.age, member.address, name AS membership_type,employee.fname AS employee_fname, employee.lname AS employee_lname, start_date, end_date, type AS payment_type, fee.amount, fee.due_date, fee.invoice_number, fee.discount FROM `membership_type` LEFT JOIN employee ON membership_type.employeeID = employee.employeeID LEFT JOIN member ON membership_type.memberID = member.memberID LEFT JOIN fee on fee.member_typeID = membership_type.member_typeID";
        dataBase.query(sql, function(error, data){
            if (error) {
                console.log(error);
            } else {
                response.json(data);
            }
        });
    });
}