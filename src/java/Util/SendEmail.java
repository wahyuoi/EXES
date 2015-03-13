package Util;

import com.sendgrid.SendGrid;
import com.sendgrid.SendGridException;

/**
 *
 * @author wahyuoi
 */
public class SendEmail {

    private static String USERNAME = "userAPI";
    private static String PASSWORD = "passwordAPI";
    private static String FROM = "gede.wahyu@ui.ac.id";
    private SendGrid sendgrid;
    SendGrid.Email email;

    public SendEmail() {
        sendgrid = new SendGrid("wahyuoi", "emaillaw");
        email = new SendGrid.Email();
    }

    public String sendEmail(String toEmail, String subject, String text) throws SendGridException {

        email.addTo(toEmail);
        email.setFrom(FROM);
        email.setSubject(subject);
        email.setText(text);

        SendGrid.Response sendgridResponse = sendgrid.send(email);
        return sendgridResponse.getMessage();
    }
}
