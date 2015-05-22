package WS;

import java.io.IOException;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.servlet.ServletException;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * @author NK
 */
@WebService(serviceName = "Currency")
public class Currency {

    /**
     * Web service operation
     */
    @WebMethod(operationName = "getCurrency")
    public JSONObject getCurrency() {
        JSONObject obj = new JSONObject();
        obj.put("status", new Integer(200));

        JSONObject obj1 = new JSONObject();
        obj1.put("IDR", "Indonesian Rupiah");
        obj1.put("USD", "United States Dollar");
        obj1.put("EUR", "Euro");
        obj1.put("JPY", "Japanese Yen");

        JSONArray array = new JSONArray();
        array.put(obj1);
        obj.put("detail", array);

        return obj;
    }
    
    @WebMethod(operationName = "login")
    public String doLogin(@WebParam(name = "email") String email, @WebParam(name = "password") String password) {
        try {
            Controller.User userController = new Controller.User();            
            Map<String, String> ret = userController.doLogin(email, password);
            return ret.get("LSESSID");
        } catch (ServletException ex) {
            Logger.getLogger(Currency.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(Currency.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
}
