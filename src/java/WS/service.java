/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package WS;

import Controller.Category;
import Controller.Transaction;
import Controller.User;
import POJO.CategoryWrapper;
import POJO.TransactionWrapper;
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
        if (id==-1) return null;
        
        Controller.Category catCon = new Category();
        List<POJO.Category> ret = catCon.getAllCategoryByUserId(id);
        CategoryWrapper retu = new POJO.CategoryWrapper();
        retu.setList(ret);
        return retu;
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "addCategory")
    public int addCategory(@WebParam(name = "token") String token, @WebParam(name = "idJenis") int idJenis, @WebParam(name = "nama") String nama) {
        Controller.User userCon = new User();
        int id = userCon.getUserId(token);
        if (id == -1) return -1;
        Controller.Category catCon = new Category();
        int ret = catCon.add(idJenis, id, nama);
        return ret;        
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "updateCategory")
    public int updateCategory(@WebParam(name = "token") String token, @WebParam(name = "idCategory") int idCategory, @WebParam(name = "idJenis") int idJenis, @WebParam(name = "nama") String nama) {
        Controller.User userCon = new User();
        int id = userCon.getUserId(token);
        if (id == -1) return -1;
        Controller.Category catCon = new Category();
        catCon.update(idCategory, idJenis, nama, id);
        return 0;
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "deleteCategory")
    public int deleteCategory(@WebParam(name = "token") String token, @WebParam(name = "idCategory") int idCategory) {
        //TODO write your implementation code here:
        Controller.User userCon = new User();
        int id = userCon.getUserId(token);
        if (id == -1) return -1;
        Controller.Category catCon = new Category();
        catCon.delete(idCategory, id);
        return 0;
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "addTransaction")
    public int addTransaction(@WebParam(name = "token") String token,@WebParam(name = "nominal") double nominal, @WebParam(name = "deskripsi") String deskripsi, @WebParam(name = "idJenis") int idJenis, @WebParam(name = "idCategory") int idCategory, @WebParam(name = "matauang") String matauang) {
        Controller.User userCon = new User();
        int id = userCon.getUserId(token);
        if (id == -1) return -1;
        Controller.Transaction trx = new Transaction();
        Controller.Category catCon = new Category();
        if (!catCon.isExists(idCategory, idJenis))
            idCategory = 0;
        trx.add(id, matauang, nominal, idCategory, deskripsi, idJenis);
        return 1;
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "updateTransaction")
    public int updateTransaction(@WebParam(name = "token") String token, @WebParam(name = "id") int id, @WebParam(name = "matauang") String matauang, @WebParam(name = "nominal") double nominal, @WebParam(name = "deskripsi") String deskripsi, @WebParam(name = "idCategory") int idCategory, @WebParam(name = "idJenis") int idJenis) {
        Controller.User userCon = new User();
        int idUser = userCon.getUserId(token);
        if (idUser == -1) return -1;
        Controller.Transaction trx = new Transaction();
        Controller.Category catCon = new Category();
        if (!catCon.isExists(idCategory, idJenis))
            idCategory = 0;
        trx.update(id, idUser, nominal, matauang, deskripsi, idCategory, idJenis);
        return 0;
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "deleteTransaction")
    public int deleteTransaction(@WebParam(name = "token") String token, @WebParam(name = "id") int id) {
        Controller.User userCon = new User();
        int idUser = userCon.getUserId(token);
        if (idUser == -1) return -1;
        Controller.Transaction trx = new Transaction();
        trx.delete(id, idUser);
        return 0;
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "operation")
    public POJO.TransactionWrapper operation(@WebParam(name = "token") String token) {
        Controller.User userCon = new User();
        int idUser = userCon.getUserId(token);
        if (idUser == -1) return null;
        Controller.Transaction trx = new Transaction();
        List<POJO.Transaction> all = trx.getTransactionByUserId(idUser);
        TransactionWrapper ret = new TransactionWrapper();
        ret.setList(all);
        return ret;
    }
    
    
    

}
