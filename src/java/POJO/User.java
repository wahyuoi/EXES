package POJO;
// Generated Mar 6, 2015 3:45:07 PM by Hibernate Tools 4.3.1

/**
 * User generated by hbm2java
 */
public class User implements java.io.Serializable {

    private Integer id;
    private String nama;
    private String email;
    private String password;
    private String token;

    public User() {
    }

    public User(String nama, String email, String password) {
        this.nama = nama;
        this.email = email;
        this.password = password;
    }

    public User(String nama, String email, String password, String token) {
        this.nama = nama;
        this.email = email;
        this.password = password;
        this.token = token;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNama() {
        return this.nama;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getToken() {
        return this.token;
    }

    public void setToken(String token) {
        this.token = token;
    }

}
