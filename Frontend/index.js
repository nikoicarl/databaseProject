$(document).ready(function() {

    //Submit form
    $('.gym_membership_submit_btn').submit(function(e){
        e.preventDefault();
        
        alert("submitting");
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

        $('.gym_membership_submit_btn').html('<span class="bx bx-loader-alt spinner"></span>');
        $('.gym_membership_submit_btn').attr('disabled');

        setTimeout(function(){
            //Start ajax
            $.ajax({
                type: "POST",
                url: '/insertMembership',
                async: false,
                data: {
                    "fname":fname,
                    "lname": lname,
                    "phone": phone,
                    "dob": dob,
                    "age": age,
                    "address": address,
                    "location": location,
                    "start_date": start_date,
                    "end_date,": end_date,
                    "plan": plan,
                    "fee": fee,
                    "due_date": due_date,
                    "discount": discount,
                    "payment_type": payment_type,
                    "approved_by": approved_by
                },
                success:function(data) {
                    if (data.type == "error") {
                        alert('danger', data.message, 'gym_membership_alert');
                        console.log(data.message);
                    } else {
                        alert('success', data.message, 'gym_membership_alert');
                    }
                    $('.gym_membership_submit_btn').html('Submit');
                    $('.gym_membership_submit_btn').removeAttr('disabled');
                }
            });
        }, 500);
    });
});