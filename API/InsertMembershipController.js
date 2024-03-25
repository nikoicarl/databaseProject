let dateformat = require('dateformat');
let mailer = require('nodemailer');

module.exports = function(start) {
    start.post('/insertContactUs', function(reqest, response){
        let stma_contact_us_name = reqest.body.stma_contact_us_name;
        let stma_contact_us_form_email = reqest.body.stma_contact_us_form_email;
        let stma_contact_us_subject = reqest.body.stma_contact_us_subject;
        let stma_contact_us_messg = reqest.body.stma_contact_us_messg;

        let date = new Date();
        date = date.getUTCFullYear()+'-'+(date.getUTCMonth()+1)+'-'+date.getUTCDate()+' '+date.getUTCHours()+':'+date.getUTCMinutes()+':'+date.getUTCSeconds();
        let todayDate = new Date(date);
        todayDate = dateformat(todayDate, 'yyyy-mm-dd HH:MM:ss');

        if(stma_contact_us_name === "" || stma_contact_us_form_email === "" || stma_contact_us_subject === "" || stma_contact_us_messg === "") {
            jsonData = {
                'type': 'error',
                'message': 'All fields are required'
            };
            response.json(jsonData);
        } else{
            let mailAuth = mailer.createTransport({
                host: "costsekondi-takoradigh.org",
                port: 465,
                secure: true,
                auth: {
                    user: 'noreply@costsekondi-takoradigh.org',
                    pass: 'noreply@@costsekondi20'
                },
                tls:{
                    rejectUnauthorized: false
                }
            });
            
            let mssg = `
                Fullname: `+stma_contact_us_name+` \n
                Subject: `+stma_contact_us_subject+` \n
                Email: `+stma_contact_us_form_email+` \n
                Message: `+stma_contact_us_messg+` \n
            `;

            let options = {
                from: 'noreply@costsekondi-takoradigh.org',
                to: 'info@costsekondi-takoradigh.org',
                subject: 'MESSAGE FROM WEBSITE',
                text: mssg
            };
            
            mailAuth.sendMail(options, function(error, info){
                if (error) {
                    jsonData = {
                        'type': 'error',
                        'message': 'Sorry, something went wrong. Please try again later: '+error
                    }
                    console.log(error);
                } else {
                    console.log(info);
                }
            }); 
            jsonData = {
                'type': 'success',
                'message': 'Thank you for getting in touch with us, you will be contacted very soon via email'
            }
            response.json(jsonData);
        }
    })
    
}