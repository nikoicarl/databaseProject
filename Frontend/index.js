$(document).ready(function () {

    // Fetch Employee Data
    var settings = {
        "url": "http://localhost:5010/getEmployee",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Cache-Control": "no-cache",
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate",
            "Connection": "keep-alive"
        },
    };

    // Response from API
    $.ajax(settings).done(function (response) {
        let employee = response;
        let employee_list = '<option value="" >Select Employee</option>';
        employee.forEach(element => {
            employee_list += '<option value="' + element.employeeID + '">' + element.fname + ' ' + element.lname + '</option>';
        });
        $('.gym_membership_approved_by').html(employee_list);
    });

    // Fetch Location Data
    var settings = {
        "url": "http://localhost:5010/getLocation",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Cache-Control": "no-cache",
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate",
            "Connection": "keep-alive"
        },
    };

    // Response from API
    $.ajax(settings).done(function (response) {
        let location = response;
        let location_list = '<option value="">Select Location</option>';
        location.forEach(element => {
            location_list += '<option value="' + element.locationID+ '">' + element.street_number + ' ' + element.street_name + ' -(Phone) ' + element.phone_number + '</option>';
        });
        $('.gym_membership_location').html(location_list);
    });

    //Submit form
    $('.gym_membership_form').submit(function (e) {
        e.preventDefault();
        //Get data from html
        let fname = $('.gym_membership_fname', this).val();
        let lname = $('.gym_membership_lname', this).val();
        let phone = $('.gym_membership_phone', this).val();
        let dob = $('.gym_membership_dob', this).val();
        let age = $('.gym_membership_age', this).val();
        let address = $('.gym_membership_address', this).val();
        let location = $('.gym_membership_location', this).val();
        let start_date = $('.gym_membership_st_date', this).val();
        let end_date = $('.gym_membership_end_date', this).val();
        let plan = $('.gym_membership_plan', this).val();
        let fee = $('.gym_membership_fee', this).val();
        let due_date = $('.gym_membership_due_date', this).val();
        let discount = $('.gym_membership_discount', this).val();
        let payment_type = $('.gym_membership_payment_type', this).val();
        let approved_by = $('.gym_membership_approved_by', this).val();

        $('.gym_membership_submit_btn').attr('disabled');

        setTimeout(function () {

            // insert data into membership table
            $.ajax({
                type: "POST",
                url: 'http://localhost:5010/insertMembership',
                async: false,
                headers: {
                    "accept": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                data: {
                    "fname": fname,
                    "lname": lname,
                    "phone": phone,
                    "dob": dob,
                    "age": age,
                    "address": address,
                    "location": location,
                    "start_date": start_date,
                    "end_date": end_date,
                    "plan": plan,
                    "fee": fee,
                    "due_date": due_date,
                    "discount": discount,
                    "payment_type": payment_type,
                    "approved_by": approved_by
                },
                success: function (data) {
                    if (data.type == "error") {
                        alert('An error has occured. Please try again');
                    } else {
                        alert('A new member has been added successfully');
                    }
                    // clear form data
                    $('.gym_membership_form').trigger('reset');
                }
            });

            
        }, 500);
    });
});