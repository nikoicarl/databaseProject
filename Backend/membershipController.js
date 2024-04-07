module.exports = function (app, dataBase) {
    var dataBase = dataBase;
    var app = app;

    app.post('/insertMembership', function (request, response) {
        let fname = request.body.fname;
        let lname = request.body.lname;
        let phone = request.body.phone;
        let dob = request.body.dob;
        let age = request.body.age;
        let address = request.body.address;
        let location = request.body.location;
        let start_date = request.body.start_date;
        let end_date = request.body.end_date;
        let plan = request.body.plan;
        let fee = request.body.fee;
        let due_date = request.body.due_date;
        let discount = request.body.discount;
        let payment_type = request.body.payment_type;
        let approved_by = request.body.approved_by;

        if (fname == "" || lname == "") {
            jsonData = {
                'type': 'error',
                'message': 'Please enter first name and last name!'
            };
            response.json(jsonData);
        } else {
            var sql = "SELECT * FROM member WHERE fname = '" + fname + "' AND lname = '" + lname + "'";
            dataBase.query(sql, function (error, result) {
                if (error) {
                    jsonData = {
                        'type': 'error',
                        'message': 'Oops, something went wrong, try again later 3' + error
                    };
                    response.json(jsonData);
                } else if (result.length > 0) {
                    jsonData = {
                        'type': 'error',
                        'message': 'Member already exists!'
                    };
                    response.json(jsonData);
                } else {
                    // Insert into Member table
                    sql = "INSERT INTO member(phone, fname, lname, locationID, dob, age, address) VALUES('" + phone + "', '" + fname + "', '" + lname + "', " + location + ", '" + dob + "', " + age + ", '" + address + "')";
                    dataBase.query(sql, function (error, result) {
                        if (error) {
                            jsonData = {
                                'type': 'error',
                                'message': 'Oops, something went wrong, try again later 2' + error
                            };
                            response.json(jsonData);
                        } else {
                            // Insert into Membership Type table
                            let memberID = result.insertId;
                            sql = "INSERT INTO `membership_type` (`name`, `employeeID`, `memberID`, `date_created`, `start_date`, `end_date`, `type`, `status`) VALUES ('" + plan + "', '" + approved_by + "', '" + memberID + "', NOW(), '" + start_date + "', '" + end_date + "', '" + payment_type + "', 'Active')";
                            dataBase.query(sql, function (error, result) {
                                if (error) {
                                    jsonData = {
                                        'type': 'error',
                                        'message': 'Oops, something went wrong, try again later 1' + error
                                    };
                                    response.json(jsonData);
                                } else {
                                    let member_typeID = result.insertId;
                                    let invoice_number = Math.floor(Math.random() * 1000000000);
                                    // Insert into Fee table
                                    sql = "INSERT INTO `fee` (`member_typeID`, `amount`, `payment_type`, `due_date`, `invoice_number`, `discount`) VALUES ('" + member_typeID + "', '" + fee + "', '" + payment_type + "', '" + due_date + "', '" + invoice_number + "', '" + discount + "')";
                                    dataBase.query(sql, function (error, result) {
                                        if (error) {
                                            jsonData = {
                                                'type': 'error',
                                                'message': 'Oops, something went wrong, try again later 0' + error
                                            };
                                            response.json(jsonData);
                                        } else {
                                            jsonData = {
                                                'type': 'success',
                                                'message': 'A new Member has been added!'
                                            };
                                            response.json(jsonData);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}
