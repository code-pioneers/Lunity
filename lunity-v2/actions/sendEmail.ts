import React from "react";
import ReactDOMServer from "react-dom/server";
import ContactFormEmail from '@/email/contact-form-email';
import {validateString,getErrorMessage} from '@/components/lib/utils';

export const senderEmail=async(formaData:FormData)=>{
  const senderName=formaData.get("senderName")
  const senderEmail=formaData.get("senderEmail")
  const subject=formaData.get("subject")
  const message=formaData.get("message")

  if(!validateString(senderName,500)){
    return {
      error:"Invalid name"
    }
  }

  if(!validateString(senderEmail,500)){
    return {
      error:"Invalid sender email"
    }
  }

  if(!validateString(subject,500)){
    return {
      error:"Invalid subject"
    }
  }

  if(!validateString(message,5000)){
    return {
      error:"Invalid message"
    }
  }

  const requestData = {
    subject,
    html: ReactDOMServer.renderToString(React.createElement(ContactFormEmail, {
      message: message as string,
      senderEmail: senderEmail as string,
      senderName: senderName as string,
      subject:subject as string
    })),
  }

  let data;
  try {
    data = await fetch('https://rprbjxsbitsfsvkyawve.supabase.co/functions/v1/resend', {
      method: 'POST',
      body: JSON.stringify(requestData) // Converts the JavaScript object into a JSON string
    })
    .then(response => response.json()) // Parses the JSON response into a JavaScript object
    .then(data => {
      return {
        data,
      }
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
}
