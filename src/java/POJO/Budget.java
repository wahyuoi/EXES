package POJO;
// Generated Mar 6, 2015 3:45:07 PM by Hibernate Tools 4.3.1

/**
 * Budget generated by hbm2java
 */
public class Budget implements java.io.Serializable {

    private Integer id;
    private Integer idKategori;
    private Integer idUser;
    private String siklus;
    private Integer batas;
    private Integer rollover;
    
    public Budget() {
    }

    public Budget(Integer idKategori, Integer idUser, String siklus, Integer batas, Integer rollover) {
        this.idKategori = idKategori;
        this.idUser = idUser;
        this.siklus = siklus;
        this.batas = batas;
        this.rollover = rollover;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdKategori() {
        return this.idKategori;
    }

    public void setIdKategori(Integer idKategori) {
        this.idKategori = idKategori;
    }

    public Integer getIdUser() {
        return this.idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }

    public String getSiklus() {
        return this.siklus;
    }

    public void setSiklus(String siklus) {
        this.siklus = siklus;
    }

    public Integer getBatas() {
        return this.batas;
    }

    public void setBatas(Integer batas) {
        this.batas = batas;
    }

    public Integer getRollover() {
        return rollover;
    }

    public void setRollover(Integer rollover) {
        this.rollover = rollover;
    }
    
    
}
