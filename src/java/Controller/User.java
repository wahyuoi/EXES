package Controller;

import POJO.UnverifiedUser;
import Util.DatabaseInfo;
import Util.EmailValidator;
import Util.SendEmail;
import Util.Token;
import com.sendgrid.SendGridException;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author wahyuoi
 */
public class User {

    DatabaseInfo dbInfo;
    Map<String, String> messages;

    public User() {
        dbInfo = new DatabaseInfo();
        messages = new HashMap<String, String>();
    }

    public Map<String, String> doRegister(String name, String email, String password) throws ServletException, IOException {
        try {                        
            if (name == null || name.trim().isEmpty()) {
                messages.put("name", "Fill your name, please!");
            }
           
            if (email == null || email.trim().isEmpty() || !EmailValidator.validate(email)) {
                messages.put("email", "Enter valid email!");
            } else if (dbInfo.getByEmail(email, "POJO.UnverifiedUser").size() > 0) {
                messages.put("email", "Already registered, please activate your account. Check your email for instructions!");
            } else if (dbInfo.getByEmail(email, "POJO.User").size() > 0) {
                messages.put("email", "Email already registered, please login!");
            }

            if (password == null || password.trim().isEmpty()) {
                messages.put("password", "Fill your password, please!");
            }

            // if any errors occur
            if (messages.isEmpty()) {
                // no error then create an unverifiedUser object
                POJO.UnverifiedUser unverifiedUser = new UnverifiedUser();
                String token = Token.generateToken(System.currentTimeMillis() + "");
                password = Token.generateToken(password);
                unverifiedUser.setEmail(email);
                unverifiedUser.setNama(name);
                unverifiedUser.setPassword(password);
                unverifiedUser.setToken(token);

                int idUser = dbInfo.insert(unverifiedUser);
                messages.put("success", "Please check your email to activate your account, thanks!");

                // send token email to user
                SendEmail sendEmail = new SendEmail();
                String subject = "Activate Your EXES Account";
                String body = "http://localhost:8084/Exes/activate?token=" + token + "&id=" + idUser;
                sendEmail.sendEmail(email, subject, body);
            }

            // whatever the result, just redirect to Register page            
        } catch (SendGridException ex) {
            Logger.getLogger(User.class.getName()).log(Level.SEVERE, null, ex);
        }
        return messages;
    }

    /**
     * To activate user account, user have to request using GET method with
     * parameter ?action=activate&token=userToken&id=idUser
     *
     * @param request
     * @param response
     */
    public Map<String, String> doActivate(String token, String id) throws ServletException, IOException {        

        DatabaseInfo dbInfo = new DatabaseInfo();
        // get user info from unverified user, based on id
        UnverifiedUser user = (UnverifiedUser) dbInfo.getById(Integer.parseInt(id), "POJO.UnverifiedUser");

        // if user token equals to token in database
        if (user != null && user.getToken().equals(token)) {
            // create user for USER Model, all values are same (except id and token)
            POJO.User newUser = new POJO.User();
            newUser.setEmail(user.getEmail());
            newUser.setNama(user.getNama());
            newUser.setPassword(user.getPassword());
            token = Token.generateToken(System.currentTimeMillis() + "");
            newUser.setToken(token);
            // insert new user and delete old one
            dbInfo.insert(newUser);
            dbInfo.delete(user.getId(), "POJO.UnverifiedUser");
            messages.put("success", "You can login now!");
        } else {
            messages.put("success", "Sorry, your account not found or had been activated!");
        }
        return messages;
    }

    public Map<String, String> doLogin(String email, String password) throws ServletException, IOException {
        
        if (email == null || email.trim().isEmpty() || !EmailValidator.validate(email)) {
            messages.put("email", "Enter valid email!");
        }

        if (password == null || password.trim().isEmpty()) {
            messages.put("password", "Fill your password, please!");
        }

        if (messages.isEmpty()) {
            List<Object> user = dbInfo.getByEmail(email, "POJO.User");
            if (user.isEmpty()) {
                messages.put("error", "Wrong email or password");
            } else if (Token.generateToken(password).equals(((POJO.User) user.get(0)).getPassword())) {                
                messages.put("LSESSID", Token.generateToken(System.currentTimeMillis() + ""));                
                messages.put("EMAIL", email);                                
                
                // update token
                // if user login, token will automatically updated
                POJO.User curUser = (POJO.User) user.get(0);
                curUser.setToken(messages.get("LSESSID"));
                dbInfo.update(curUser, "POJO.User");
            } else {
                messages.put("error", "Wrong email or password");
            }
        }
        return messages;
    }

    public Cookie[] doLogout(Cookie[] cookies) {
        for (Cookie cooky : cookies) {
            if ("LSESSID".equals(cooky.getName())) {
                cooky.setMaxAge(0);
            } else if ("EMAIL".equals(cooky.getName())) {
                cooky.setMaxAge(0);
            }
        }
        return cookies;
    }

    public boolean isLogin(Cookie[] cookies) {
        for (Cookie cooky : cookies) {
            if ("LSESSID".equals(cooky.getName())) {
                return true;
            }
        }
        return false;
    }

    public Map<String, String> changePassword(String oldPassword, 
            String newPassword, String confirmPassword, String email) 
            throws ServletException, IOException {

        if (oldPassword == null || oldPassword.trim().isEmpty()) {
            messages.put("oldPassword", "Fill your old password!");
        }

        if (newPassword == null || newPassword.trim().isEmpty()) {
            messages.put("newPassword", "Fill your new password");
        }

        if (confirmPassword == null || confirmPassword.trim().isEmpty() || !newPassword.equals(confirmPassword)) {
            messages.put("confirmPassword", "Your new password is mismatch!");
        }

        if (messages.isEmpty()) {
            oldPassword = Token.generateToken(oldPassword);
            confirmPassword = Token.generateToken(confirmPassword);
            newPassword = Token.generateToken(newPassword);
            if (email != null) {
                List<Object> users = dbInfo.getByEmail(email, "POJO.User");
                if (!users.isEmpty()) {
                    POJO.User user = (POJO.User) users.get(0);
                    if (oldPassword.equals(user.getPassword())) {
                        user.setPassword(newPassword);
                        dbInfo.update(user, "POJO.User");
                        messages.put("success", "Password changed!");
                    } else {
                        messages.put("oldPassword", "Wrong password!");
                    }
                }
            }
        }

        return messages;
    }

    public void doValidateResetToken(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        request.setAttribute("messages", messages);

        String id = request.getParameter("id");
        String token = request.getParameter("token");

        if (id == null || token == null) {

            response.sendRedirect("Auth/reset.jsp");

        } else {
            // both exists
            POJO.User user = (POJO.User) dbInfo.getById(Integer.parseInt(id), "POJO.User");
            if (user == null) {
                // no id in database
                response.sendRedirect("Auth/reset.jsp");
            }
            // valid id
            if (token.equals(user.getToken())) {
                // valid token

                // use id in form
                messages.put("id", id);
                messages.put("token", token);

                // show form
                request.getRequestDispatcher("Auth/resetForm.jsp").forward(request, response);

            } else {
                // invalid token
                messages.put("success", "Expired token!");
                try {
                    request.getRequestDispatcher("Auth/reset.jsp").forward(request, response);
                } catch (ServletException ex) {
                    Logger.getLogger(User.class.getName()).log(Level.SEVERE, null, ex);
                } catch (IOException ex) {
                    Logger.getLogger(User.class.getName()).log(Level.SEVERE, null, ex);
                }

            }
        }
    }

    public void doSendResetToken(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("messages", messages);

        String email = request.getParameter("email");
        if (email == null || email.trim().isEmpty() || !EmailValidator.validate(email)) {
            messages.put("email", "Enter valid email");
        } else {
            // valid email
            List<Object> users = dbInfo.getByEmail(email, "POJO.User");
            if (users.isEmpty()) {
                messages.put("email", "Email not registered");
            } else {
                try {
                    // user registered
                    POJO.User user = (POJO.User) users.get(0);
                    int idUser = user.getId();

                    // generate new token
                    String token = Token.generateToken(System.currentTimeMillis() + "");

                    // save new token
                    user.setToken(token);
                    dbInfo.update(user, "POJO.User");
                    // send token to user
                    SendEmail sendEmail = new SendEmail();
                    String subject = "Reset Your EXES Password";
                    String body = "http://localhost:8084/Exes/reset?token=" + token + "&id=" + idUser;
                    sendEmail.sendEmail(email, subject, body);

                    // show notif
                    messages.put("success", "Check your email to reset password!");

                } catch (SendGridException ex) {
                    Logger.getLogger(User.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
        }

        // forward page       
        request.getRequestDispatcher("Auth/reset.jsp").forward(request, response);

    }

    public void doSaveNewPassword(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        request.setAttribute("messages", messages);

        String id = request.getParameter("id");
        String token = request.getParameter("token");
        String newPassword = request.getParameter("newPassword");
        String confirmPassword = request.getParameter("confirmPassword");

        if (id == null || token == null) {
            response.sendRedirect("Auth/reset.jsp");
        } else if (newPassword == null || !newPassword.equals(confirmPassword)) {
            messages.put("newPassword", "Mismatch password!");
            messages.put("id", id);
            messages.put("token", token);
            request.getRequestDispatcher("Auth/resetForm.jsp").forward(request, response);
        } else {
            // both exists
            POJO.User user = (POJO.User) dbInfo.getById(Integer.parseInt(id), "POJO.User");
            if (user == null) {
                // no id in database
                response.sendRedirect("Auth/reset.jsp");

            }
            // valid id
            if (token.equals(user.getToken())) {
                // valid token

                user.setPassword(Token.generateToken(newPassword));
                user.setToken(Token.generateToken(System.currentTimeMillis() + ""));
                dbInfo.update(user, "POJO.User");
                // show form
                messages.put("success", "Reset berhasil, silakan login");
                request.getRequestDispatcher("Auth/login.jsp").forward(request, response);

            } else {
                // invalid token
                messages.put("success", "Expired token!");
                request.getRequestDispatcher("Auth/login.jsp").forward(request, response);
            }
        }

    }
}
