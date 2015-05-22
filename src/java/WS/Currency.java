package WS;

import java.util.LinkedList;
import java.util.List;
import javax.jws.WebService;
import javax.jws.WebMethod;
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
}
