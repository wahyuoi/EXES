/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package POJO;

import java.util.ArrayList;

/**
 *
 * @author wahyuoi
 */
public class MataUangWrapper {
    ArrayList<Tupple> list;
    public MataUangWrapper(){
        list = new ArrayList<>();
        list.add(new Tupple("Indonesian Rupiah", "IDR"));
        list.add(new Tupple("United States Dollar", "USD"));
        list.add(new Tupple("Japanese Yen", "YEN"));
        list.add(new Tupple("Euro", "EUR"));                
    }

    public ArrayList<Tupple> getList() {
        return list;
    }
    
    private class Tupple {
        String nama;
        String matauang;

        public Tupple(String nama, String matauang) {
            this.nama = nama;
            this.matauang = matauang;
        }
        
        public String getNama() {
            return nama;
        }

        public void setNama(String nama) {
            this.nama = nama;
        }

        public String getMatauang() {
            return matauang;
        }

        public void setMatauang(String matauang) {
            this.matauang = matauang;
        }
        
    }
}
