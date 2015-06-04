/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

import Util.DatabaseInfo;
import java.util.List;

/**
 *
 * @author wahyuoi
 */
public class Budget {
    private DatabaseInfo dbInfo;
    
    public Budget(){
        dbInfo = new DatabaseInfo();
    }   

    public POJO.Budget getBudgetByCategoryAndUserId(int idKategori, int idUser) {
        List<Object> temp = dbInfo.getBy("idKategori", idKategori, idUser, POJO.Budget.class.getName());
        if (temp == null || temp.size()==0) return null;
        return (POJO.Budget) temp.get(0);
    }

    public int save(POJO.Budget cur) {
        if (cur.getId() == null || cur.getId() == 0)
            return dbInfo.insert(cur);
        dbInfo.update(cur, POJO.Budget.class.getName());
        return cur.getId();
    }

    public List<Object> getById(int idUser) {
        return dbInfo.getAllByUserId(POJO.Budget.class.getName(), idUser);
    }

    void deleteAllUserId(int id) {
        dbInfo.deleteAllUserId(id, POJO.Budget.class.getName());
    }
    
    
}
