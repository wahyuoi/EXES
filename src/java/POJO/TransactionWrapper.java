/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package POJO;

import java.util.List;

/**
 *
 * @author wahyuoi
 */
public class TransactionWrapper {
    public List<POJO.Transaction> all;

    public List<Transaction> getList() {
        return all;
    }

    public void setList(List<Transaction> list) {
        this.all = list;
    }
    
}
