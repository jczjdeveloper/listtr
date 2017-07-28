 import dotenv from 'dotenv';
dotenv.load({ path: '.env' });

exports.handleEmail = (req, res) => {
  const helper = require('sendgrid').mail;
  const fromEmail = new helper.Email('listtryourlist@gmail.com');
  const toEmail = new helper.Email('jczjdeveloper@gmail.com');
  const subject = 'Sending with SendGrid is Fun';
  const content = new helper.Content('text/html',

  '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <!--[if !mso]><!--> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <!--<![endif]--> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title></title> <style type="text/css"> * { -webkit-font-smoothing: antialiased; } body { Margin: 0; padding: 0; min-width: 100%; font-family: Arial, sans-serif; -webkit-font-smoothing: antialiased; mso-line-height-rule: exactly; } table { border-spacing: 0; color: #333333; font-family: Arial, sans-serif; } img { border: 0; } .wrapper { width: 100%; table-layout: fixed; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; } .webkit { max-width: 800px; } .outer { Margin: 0 auto; width: 100%; max-width: 800px; } .full-width-image img { width: 100%; max-width: 800px; height: auto; } .inner { padding: 10px; } p { Margin: 0; padding-bottom: 10px; } .h1 { font-size: 21px; font-weight: bold; Margin-top: 15px; Margin-bottom: 5px; font-family: Arial, sans-serif; -webkit-font-smoothing: antialiased; } .h2 { font-size: 18px; font-weight: bold; Margin-top: 10px; Margin-bottom: 5px; font-family: Arial, sans-serif; -webkit-font-smoothing: antialiased; } .one-column .contents { text-align: left; font-family: Arial, sans-serif; -webkit-font-smoothing: antialiased; } .one-column p { font-size: 14px; Margin-bottom: 10px; font-family: Arial, sans-serif; -webkit-font-smoothing: antialiased; } .two-column { text-align: center; font-size: 0; } .two-column .column { width: 100%; max-width: 300px; display: inline-block; vertical-align: top; } .contents { width: 100%; } .two-column .contents { font-size: 14px; text-align: left; } .two-column img { width: 100%; max-width: 280px; height: auto; } .two-column .text { padding-top: 10px; } .three-column { text-align: center; font-size: 0; padding-top: 10px; padding-bottom: 10px; } .three-column .column { width: 100%; max-width: 200px; display: inline-block; vertical-align: top; } .three-column .contents { font-size: 14px; text-align: center; } .three-column img { width: 100%; max-width: 180px; height: auto; } .three-column .text { padding-top: 10px; } .img-align-vertical img { display: inline-block; vertical-align: middle; } @media only screen and (max-device-width: 480px) { table[class=hide], img[class=hide], td[class=hide] { display: none !important; } .contents1 { width: 100%; } .contents1 { width: 100%; } </style> <!--[if (gte mso 9)|(IE)]> <style type="text/css"> table {border-collapse: collapse !important;} </style> <![endif]--> </head> <body style="Margin:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;min-width:100%;background-color:#f3f2f0;"> <center class="wrapper" style="width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#f3f2f0;"> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f3f2f0;" bgcolor="#f3f2f0;"> <tr> <td width="100%"><div class="webkit" style="max-width:800px;Margin:0 auto;"> <!--[if (gte mso 9)|(IE)]> <table width="800" align="center" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0" > <tr> <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" > <![endif]--> <!-- ======= start main body ======= --> <table class="outer" align="center" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;Margin:0 auto;width:100%;max-width:800px;"> <tr> <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;"><!-- ======= start header ======= --> <table border="0" width="100%" cellpadding="0" cellspacing="0"  > <tr> <td><table style="width:100%;" cellpadding="0" cellspacing="0" border="0"> <tbody> <tr> <td align="center"><center> <table border="0" align="center" width="100%" cellpadding="0" cellspacing="0" style="Margin: 0 auto;"> <tbody> <tr> <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" bgcolor="#FFFFFF"><!-- ======= start header ======= --> <table cellpadding="0" cellspacing="0" border="0" width="100%"  bgcolor="#f3f2f0"> <tr> </tr> <tr> <td>&nbsp;</td> </tr> </table></td> </tr> </tbody> </table> </center></td> </tr> </tbody> </table></td> </tr> </table> <!-- ======= end header ======= --> <!-- ======= start hero image ======= --> <table class="one-column" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing:0;max-width: 800px; border-left:1px solid #e8e7e5; border-right:1px solid #e8e7e5; border-top:1px solid #e8e7e5" bgcolor="#FFFFFF"> <tr> <td align="center"><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/a0fc05f8-72a9-41be-8049-9463e0da0aad.jpg" width="100%" style="max-width:800px;"  alt=""/></td> </tr> </table> <!-- ======= end hero image ======= --> <!-- ======= start hero article ======= --> <table class="one-column" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing:0; border-left:1px solid #e8e7e5; border-right:1px solid #e8e7e5; border-bottom:1px solid #e8e7e5" bgcolor="#FFFFFF"> <tr> <td align="left" style="padding:40px 40px 60px 40px"><p style="color:#262626; font-size:32px; text-align:center; font-family: Verdana, Geneva, sans-serif, line-height: 2.5">Name of Event</p> <p style={{color: #000000; font-size: 16px; text-align: "left"; font-family: "Verdana, Geneva, sans-serif"; line-height:1px}}><strong>Event Location:</strong> this.event.location </p> <p style={{color: #000000; font-size: 16px; text-align: "left"; font-family: "Verdana, Geneva, sans-serif"; line-height:1px}}><strong>Event Dress Code:</strong> this.event.dressCode </p> <p style={{color: #000000; font-size: 16px; text-align: "left"; font-family: "Verdana, Geneva, sans-serif"; line-height:1px}}><strong>Event Type:</strong> this.event.type </p> <p style={{color: #000000; font-size: 16px; text-align: "left"; font-family: "Verdana, Geneva, sans-serif"; line-height:1px}}><strong>Event Start Date:</strong> this.event.startDate </p> <p style={{color: #000000; font-size: 16px; text-align: "left"; font-family: "Verdana, Geneva, sans-serif"; line-height:1px}}><strong>Event End Date:</strong> this.event.endDate </p> <p style={{color: #000000; font-size: 16px; text-align: "left"; font-family: "Verdana, Geneva, sans-serif"; line-height:1px}}><strong>Event Start Time:</strong> this.event.timeStart </p> <p style={{color: #000000; font-size: 16px; text-align: "left"; font-family: "Verdana, Geneva, sans-serif"; line-height:1px}}><strong>Event End Time:</strong> this.event.timeEnd </p> <p style={{color: #000000; font-size: 16px; text-align: "left"; font-family: "Verdana, Geneva, sans-serif"; line-height:10px; padding-top: 20px;}}><strong>Description:</strong><br/><br/> his.event.description </p> <!-- START BUTTON --> <center> <table cellpadding="0" cellspacing="0" border="0" width="100%"> <tr> <td><table border="0" cellpadding="0" cellspacing="0"> <tr> <td height="20" width="100%" style="font-size: 20px; line-height: 20px;">&nbsp;</td> </tr> </table> <table border="0" align="center" cellpadding="0" cellspacing="0" style="Margin:0 auto;"> <tbody> <tr> <td align="center"><table border="0" cellpadding="0" cellspacing="0" style="Margin:0 auto;"> <tr> <td width="250" height="60" align="center" bgcolor="#2f9780" style="-moz-border-radius: 30px; -webkit-border-radius: 30px; border-radius: 30px;"><a href="#" style="width:250; display:block; text-decoration:none; border:0; text-align:center; font-weight:bold;font-size:18px; font-family: Arial, sans-serif; color: #ffffff" class="button_link">Call to Action<img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/73ac4376-78ab-4d32-a0b5-b8195202e51f.jpg" width="32" height="17" style="padding-top:5px" alt="" border="0"/></a></td> </tr> </table></td> </tr> </tbody> </table></td> </tr> </table> </center> <!-- END BUTTON --></td> </tr> </table> <!-- ======= end hero article ======= --> <!-- ======= start footer ======= --> <table cellpadding="0" cellspacing="0" border="0" width="100%"> <tr> <td height="30">&nbsp;</td> </tr> <tr> <td class="two-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;"><!--[if (gte mso 9)|(IE)]> <table width="100%" style="border-spacing:0" > <tr> <td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" > <![endif]--> <div class="column" style="width:100%;max-width:399px;display:inline-block;vertical-align:top;"> <table class="contents" style="border-spacing:0; width:100%"> <tr> <td width="39%" align="right" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;"><a href="#" target="_blank"><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/13f425ab-c680-4ae0-88de-7b493d95095f.jpg" alt="" width="59" height="59" style="border-width:0; max-width:59px;height:auto; display:block; padding-right:20px" /></a></td> <td width="61%" align="left" valign="middle" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;"><p style="color:#787777; font-size:13px; text-align:left; font-family: Verdana, Geneva, sans-serif"> Powered by Listtr<br /> Listtr © 2017<br /> All rights reserved.</p></td> </tr> </table> </div> <!--[if (gte mso 9)|(IE)]> </td><td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" > <![endif]--> <div class="column" style="width:100%;max-width:399px;display:inline-block;vertical-align:top;"> <table width="100%" style="border-spacing:0"> <tr> <td class="inner" style="padding-top:0px;padding-bottom:10px; padding-right:10px;padding-left:10px;"><table class="contents" style="border-spacing:0; width:100%"> <tr> <td width="32%" align="center" valign="top" style="padding-top:10px"><table width="150" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="33" align="center"><a href="#" target="_blank"><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/51f10cc9-b6d3-409d-9a64-4080a155b8c7.jpg" alt="facebook" width="36" height="36" border="0" style="border-width:0; max-width:36px;height:auto; display:block; max-height:36px"/></a></td> <td width="34" align="center"><a href="#" target="_blank"><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/f910c3b7-2369-4b33-87e8-90ba1748d47a.jpg" alt="twitter" width="36" height="36" border="0" style="border-width:0; max-width:36px;height:auto; display:block; max-height:36px"/></a></td> <td width="33" align="center"><a href="#" target="_blank"><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/0efcd6de-1324-4e05-871b-a93f6056f00e.jpg" alt="linkedin" width="36" height="36" border="0" style="border-width:0; max-width:36px;height:auto; display:block; max-height:36px"/></a></td> </tr> </table></td> </tr> </table></td> </tr> </table> </div> <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]--></td> </tr> <tr> <td height="30">&nbsp;</td> </tr> </table> <!-- ======= end footer ======= --></td> </tr> </table> <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]--> </div></td> </tr> </table> </center> </body> </html>'

);
  const mail = new helper.Mail(fromEmail, subject, toEmail, content);

  const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function (error, response) {
    if (error) {
      console.log('Error response received');
    }
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
    res.json(response)
  });
}

// '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
// <html xmlns="http://www.w3.org/1999/xhtml">
// <head>
// <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
// <!--[if !mso]><!-->
// <meta http-equiv="X-UA-Compatible" content="IE=edge" />
// <!--<![endif]-->
// <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// <title></title>
// <style type="text/css">
// * {
//   -webkit-font-smoothing: antialiased;
// }
// body {
//   Margin: 0;
//   padding: 0;
//   min-width: 100%;
//   font-family: Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   mso-line-height-rule: exactly;
// }
// table {
//   border-spacing: 0;
//   color: #333333;
//   font-family: Arial, sans-serif;
// }
// img {
//   border: 0;
// }
// .wrapper {
//   width: 100%;
//   table-layout: fixed;
//   -webkit-text-size-adjust: 100%;
//   -ms-text-size-adjust: 100%;
// }
// .webkit {
//   max-width: 800px;
// }
// .outer {
//   Margin: 0 auto;
//   width: 100%;
//   max-width: 800px;
// }
// .full-width-image img {
//   width: 100%;
//   max-width: 800px;
//   height: auto;
// }
// .inner {
//   padding: 10px;
// }
// p {
//   Margin: 0;
//   padding-bottom: 10px;
// }
// .h1 {
//   font-size: 21px;
//   font-weight: bold;
//   Margin-top: 15px;
//   Margin-bottom: 5px;
//   font-family: Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
// }
// .h2 {
//   font-size: 18px;
//   font-weight: bold;
//   Margin-top: 10px;
//   Margin-bottom: 5px;
//   font-family: Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
// }
// .one-column .contents {
//   text-align: left;
//   font-family: Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
// }
// .one-column p {
//   font-size: 14px;
//   Margin-bottom: 10px;
//   font-family: Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
// }
// .two-column {
//   text-align: center;
//   font-size: 0;
// }
// .two-column .column {
//   width: 100%;
//   max-width: 300px;
//   display: inline-block;
//   vertical-align: top;
// }
// .contents {
//   width: 100%;
// }
// .two-column .contents {
//   font-size: 14px;
//   text-align: left;
// }
// .two-column img {
//   width: 100%;
//   max-width: 280px;
//   height: auto;
// }
// .two-column .text {
//   padding-top: 10px;
// }
// .three-column {
//   text-align: center;
//   font-size: 0;
//   padding-top: 10px;
//   padding-bottom: 10px;
// }
// .three-column .column {
//   width: 100%;
//   max-width: 200px;
//   display: inline-block;
//   vertical-align: top;
// }
// .three-column .contents {
//   font-size: 14px;
//   text-align: center;
// }
// .three-column img {
//   width: 100%;
//   max-width: 180px;
//   height: auto;
// }
// .three-column .text {
//   padding-top: 10px;
// }
// .img-align-vertical img {
//   display: inline-block;
//   vertical-align: middle;
// }
// @media only screen and (max-device-width: 480px) {
// table[class=hide], img[class=hide], td[class=hide] {
//   display: none !important;
// }
// .contents1 {
//   width: 100%;
// }
// .contents1 {
//   width: 100%;
// }
// </style>
// <!--[if (gte mso 9)|(IE)]>
//   <style type="text/css">
//     table {border-collapse: collapse !important;}
//   </style>
//   <![endif]-->
// </head>
// <body style="Margin:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;min-width:100%;background-color:#f3f2f0;">
// <center class="wrapper" style="width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#f3f2f0;">
//   <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f3f2f0;" bgcolor="#f3f2f0;">
//     <tr>
//       <td width="100%"><div class="webkit" style="max-width:800px;Margin:0 auto;">
//
//           <!--[if (gte mso 9)|(IE)]>
//
//             <table width="800" align="center" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0" >
//               <tr>
//                 <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
//                 <![endif]-->
//
//           <!-- ======= start main body ======= -->
//           <table class="outer" align="center" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;Margin:0 auto;width:100%;max-width:800px;">
//             <tr>
//               <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;"><!-- ======= start header ======= -->
//
//                 <table border="0" width="100%" cellpadding="0" cellspacing="0"  >
//                   <tr>
//                     <td><table style="width:100%;" cellpadding="0" cellspacing="0" border="0">
//                         <tbody>
//                           <tr>
//                             <td align="center"><center>
//                                 <table border="0" align="center" width="100%" cellpadding="0" cellspacing="0" style="Margin: 0 auto;">
//                                   <tbody>
//                                     <tr>
//                                       <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" bgcolor="#FFFFFF"><!-- ======= start header ======= -->
//
//                                         <table cellpadding="0" cellspacing="0" border="0" width="100%"  bgcolor="#f3f2f0">
//                                           <tr>
//                                           </tr>
//                                           <tr>
//                                             <td>&nbsp;</td>
//                                           </tr>
//                                         </table></td>
//                                     </tr>
//                                   </tbody>
//                                 </table>
//                               </center></td>
//                           </tr>
//                         </tbody>
//                       </table></td>
//                   </tr>
//                 </table>
//
//                 <!-- ======= end header ======= -->
//
//                 <!-- ======= start hero image ======= -->
//
//                 <table class="one-column" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing:0;max-width: 800px; border-left:1px solid #e8e7e5; border-right:1px solid #e8e7e5; border-top:1px solid #e8e7e5" bgcolor="#FFFFFF">
//                   <tr>
//                     <td align="center"><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/a0fc05f8-72a9-41be-8049-9463e0da0aad.jpg" width="100%" style="max-width:800px;"  alt=""/></td>
//                   </tr>
//                 </table>
//
//                 <!-- ======= end hero image ======= -->
//
//                 <!-- ======= start hero article ======= -->
//
//                 <table class="one-column" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing:0; border-left:1px solid #e8e7e5; border-right:1px solid #e8e7e5; border-bottom:1px solid #e8e7e5" bgcolor="#FFFFFF">
//                   <tr>
//                     <td align="left" style="padding:40px 40px 60px 40px"><p style="color:#262626; font-size:32px; text-align:center; font-family: Verdana, Geneva, sans-serif, line-height: 2.5">Name of Event</p>
//                     <p style={{color: #000000; font-size: 16px; text-align: 'left'; font-family: 'Verdana, Geneva, sans-serif'; line-height:1px}}><strong>Event Location:</strong> 'this.event.location' </p>
//                     <p style={{color: #000000; font-size: 16px; text-align: 'left'; font-family: 'Verdana, Geneva, sans-serif'; line-height:1px}}><strong>Event Dress Code:</strong> 'this.event.dressCode' </p>
//                     <p style={{color: #000000; font-size: 16px; text-align: 'left'; font-family: 'Verdana, Geneva, sans-serif'; line-height:1px}}><strong>Event Type:</strong> 'this.event.type' </p>
//                     <p style={{color: #000000; font-size: 16px; text-align: 'left'; font-family: 'Verdana, Geneva, sans-serif'; line-height:1px}}><strong>Event Start Date:</strong> 'this.event.startDate' </p>
//                     <p style={{color: #000000; font-size: 16px; text-align: 'left'; font-family: 'Verdana, Geneva, sans-serif'; line-height:1px}}><strong>Event End Date:</strong> 'this.event.endDate' </p>
//                     <p style={{color: #000000; font-size: 16px; text-align: 'left'; font-family: 'Verdana, Geneva, sans-serif'; line-height:1px}}><strong>Event Start Time:</strong> 'this.event.timeStart' </p>
//                     <p style={{color: #000000; font-size: 16px; text-align: 'left'; font-family: 'Verdana, Geneva, sans-serif'; line-height:1px}}><strong>Event End Time:</strong> 'this.event.timeEnd' </p>
//                     <p style={{color: #000000; font-size: 16px; text-align: 'left'; font-family: 'Verdana, Geneva, sans-serif'; line-height:10px; padding-top: 20px;}}><strong>Description:</strong><br/><br/> 'this.event.description' </p>
//                       <!-- START BUTTON -->
//
//                       <center>
//                         <table cellpadding="0" cellspacing="0" border="0" width="100%">
//                           <tr>
//                             <td><table border="0" cellpadding="0" cellspacing="0">
//                                 <tr>
//                                   <td height="20" width="100%" style="font-size: 20px; line-height: 20px;">&nbsp;</td>
//                                 </tr>
//                               </table>
//                               <table border="0" align="center" cellpadding="0" cellspacing="0" style="Margin:0 auto;">
//                                 <tbody>
//                                   <tr>
//                                     <td align="center"><table border="0" cellpadding="0" cellspacing="0" style="Margin:0 auto;">
//                                         <tr>
//                                           <td width="250" height="60" align="center" bgcolor="#2f9780" style="-moz-border-radius: 30px; -webkit-border-radius: 30px; border-radius: 30px;"><a href="#" style="width:250; display:block; text-decoration:none; border:0; text-align:center; font-weight:bold;font-size:18px; font-family: Arial, sans-serif; color: #ffffff" class="button_link">Call to Action<img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/73ac4376-78ab-4d32-a0b5-b8195202e51f.jpg" width="32" height="17" style="padding-top:5px" alt="" border="0"/></a></td>
//                                         </tr>
//                                       </table></td>
//                                   </tr>
//                                 </tbody>
//                               </table></td>
//                           </tr>
//                         </table>
//                       </center>
//
//                       <!-- END BUTTON --></td>
//                   </tr>
//                 </table>
//
//                 <!-- ======= end hero article ======= -->
//
//                 <!-- ======= start footer ======= -->
//
//                 <table cellpadding="0" cellspacing="0" border="0" width="100%">
//                   <tr>
//                     <td height="30">&nbsp;</td>
//                   </tr>
//                   <tr>
//                     <td class="two-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;"><!--[if (gte mso 9)|(IE)]>
//                           <table width="100%" style="border-spacing:0" >
//                           <tr>
//                           <td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
//                           <![endif]-->
//
//                       <div class="column" style="width:100%;max-width:399px;display:inline-block;vertical-align:top;">
//                         <table class="contents" style="border-spacing:0; width:100%">
//                           <tr>
//                             <td width="39%" align="right" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;"><a href="#" target="_blank"><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/13f425ab-c680-4ae0-88de-7b493d95095f.jpg" alt="" width="59" height="59" style="border-width:0; max-width:59px;height:auto; display:block; padding-right:20px" /></a></td>
//                             <td width="61%" align="left" valign="middle" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;"><p style="color:#787777; font-size:13px; text-align:left; font-family: Verdana, Geneva, sans-serif"> Powered by Listtr<br />
//                                 Listtr © 2017<br />
//                                 All rights reserved.</p></td>
//                           </tr>
//                         </table>
//                       </div>
//
//                       <!--[if (gte mso 9)|(IE)]>
//                           </td><td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
//                           <![endif]-->
//
//                       <div class="column" style="width:100%;max-width:399px;display:inline-block;vertical-align:top;">
//                         <table width="100%" style="border-spacing:0">
//                           <tr>
//                             <td class="inner" style="padding-top:0px;padding-bottom:10px; padding-right:10px;padding-left:10px;"><table class="contents" style="border-spacing:0; width:100%">
//                                 <tr>
//                                   <td width="32%" align="center" valign="top" style="padding-top:10px"><table width="150" border="0" cellspacing="0" cellpadding="0">
//                                     <tr>
//                                       <td width="33" align="center"><a href="#" target="_blank"><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/51f10cc9-b6d3-409d-9a64-4080a155b8c7.jpg" alt="facebook" width="36" height="36" border="0" style="border-width:0; max-width:36px;height:auto; display:block; max-height:36px"/></a></td>
//                                       <td width="34" align="center"><a href="#" target="_blank"><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/f910c3b7-2369-4b33-87e8-90ba1748d47a.jpg" alt="twitter" width="36" height="36" border="0" style="border-width:0; max-width:36px;height:auto; display:block; max-height:36px"/></a></td>
//                                       <td width="33" align="center"><a href="#" target="_blank"><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/0efcd6de-1324-4e05-871b-a93f6056f00e.jpg" alt="linkedin" width="36" height="36" border="0" style="border-width:0; max-width:36px;height:auto; display:block; max-height:36px"/></a></td>
//                                     </tr>
//                                   </table></td>
//                                 </tr>
//                               </table></td>
//                           </tr>
//                         </table>
//                       </div>
//
//                       <!--[if (gte mso 9)|(IE)]>
//                           </td>
//                           </tr>
//                           </table>
//                           <![endif]--></td>
//                   </tr>
//                   <tr>
//                     <td height="30">&nbsp;</td>
//                   </tr>
//                 </table>
//
//                 <!-- ======= end footer ======= --></td>
//             </tr>
//           </table>
//           <!--[if (gte mso 9)|(IE)]>
//           </td>
//         </tr>
//       </table>
//       <![endif]-->
//         </div></td>
//     </tr>
//   </table>
// </center>
// </body>
// </html>'
