$(document).ready(function() {

    // Get data from form
    $(".gym_membership_submit_btn").submit(function() {
        var fname = $(".gym_membership_fname").val();
        var lname = $(".gym_membership_lname").val();
        var phone = $(".gym_membership_phone").val();
        var dob = $(".gym_membership_dob").val();
        var age = $(".gym_membership_age").val();
        var address = $(".gym_membership_address").val();
        var location = $(".gym_membership_location").val();
        var start_date = $(".gym_membership_st_date").val();
        var end_date = $(".gym_membership_end_date").val();
        var plan = $(".gym_membership_plan").val();
        var fee = $(".gym_membership_fee").val();
        var due_date = $(".gym_membership_due_date").val();
        var discount = $(".gym_membership_discount").val();
        var payment_type = $(".gym_membership_payment_type").val();
        var approved_by = $(".gym_membership_approved_by").val()
        alert("Submit");
    });
});