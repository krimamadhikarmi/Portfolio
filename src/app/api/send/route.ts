"use server";
import {Resend} from 'resend';

const resend = new Resend('re_BbkfYco1_NvSf1cr7gt5uNLhXsFPgRL1Q');

export const sendEmail =async(formData: FormData)=>{
    const senderEmail= formData.get('email');
    const message= formData.get('message');

    if(!message ||typeof message!== "string" ){
        return{
            error: "Invalid Message",
        };
    }
    
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'madhikrima20@gmail.com',
        subject: 'Hello World',
        reply_to: senderEmail as string,
        text: message,
    });
}



