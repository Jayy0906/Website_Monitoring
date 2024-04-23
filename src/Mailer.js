import nodemailer from 'nodemailer';
import path from 'path';

export const sendNewUserMail = async (data1, data2, data3, difference) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'viscommercesite@gmail.com',
            pass: 'bkfkpwinqgbvullk',
        }
    });

    var mailOptions = {
        from: 'viscommercesite@gmail.com',
        to: ['amitdubey6261@gmail.com', 'Jatpay12@gmail.com'],
        subject: 'Kizen3D test automation tool',
        text: `Image Differnece : ${difference}`,
        // html: `Expected image: <img src="cid:unique1@nodemailer.com"/> <br> Captured image: <img src="cid:unique2@nodemailer.com"/> <br> Image Difference: <img src="cid:unique3@nodemailer.com"/> <br> <h2>Image diffrence value : ${difference} % <h2>`,
        html: ` <h2 style="text-align: center; margin-bottom: 20px;">Image Comparison</h2>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
    
            <img src="cid:unique1@nodemailer.com" alt="Expected Image" style="width: 48%; border: 1px solid #ddd; padding: 5px;">
            <p style="text-align: center; font-weight: bold; margin-bottom: 5px;">Expected Image</p>
    
            <img src="cid:unique2@nodemailer.com" alt="Captured Image" style="width: 48%; border: 1px solid #ddd; padding: 5px;">
            <p style="text-align: center; font-weight: bold; margin-bottom: 5px;">Captured Image</p>
    
        </div>
        <div style="display: flex; justify-content: center; align-items: center;">
            <img src="cid:unique3@nodemailer.com" alt="Image Difference">
            <p style="font-size: 1.2em; font-weight: bold;">Image Difference: ${difference} %</p>
        </div>` ,
        attachments: [
            data1, data2, data3
        ]
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};
