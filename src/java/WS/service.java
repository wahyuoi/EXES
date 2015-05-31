/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package WS;

import Controller.Category;
import Controller.User;
import POJO.CategoryWrapper;
import java.util.List;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;

/**
 *
 * @author wahyuoi
 */
@WebService(serviceName = "service")
public class service {

    /**
     * This is a sample web service operation
     */
    @WebMethod(operationName = "hello")
    public String hello(@WebParam(name = "name") String txt) {
        return "Hello " + txt + " !";
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "getUser")
    public String getUser(@WebParam(name = "token") String token) {
        Controller.User userCon = new User();
        POJO.User user = userCon.getUser(token);
        return user.getNama();
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "getCategory")
    public POJO.CategoryWrapper getCategory(@WebParam(name = "token") final String token) {
        Controller.User userCon = new User();
        int id = userCon.getUserId(token);
        Controller.Category catCon = new Category();
        List<POJO.Category> ret = catCon.getAllCategoryByUserId(id);
        CategoryWrapper retu = new POJO.CategoryWrapper();
        retu.setList(ret);
        return retu;
    }

}
