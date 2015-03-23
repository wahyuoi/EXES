package WS;

import java.io.IOException;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.servlet.ServletException;

/**
 *
 * @author wahyuoi
 */
@WebService(serviceName = "AuthWS")
public class AuthWS {

    /**
     * This is a sample web service operation
     */
    @WebMethod(operationName = "login")
    public String doLogin(@WebParam(name = "email") String email, @WebParam(name = "password") String password) {
        try {
            Controller.User userController = new Controller.User();            
            Map<String, String> ret = userController.doLogin(email, password);
            return ret.get("LSESSID");
        } catch (ServletException ex) {
            Logger.getLogger(AuthWS.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(AuthWS.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
}
