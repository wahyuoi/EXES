package Controller;

import Util.DatabaseInfo;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author wahyuoi
 */
public class Category {
    public static String UNCATEGORIZED = "UNCATEGORIZED";
    private DatabaseInfo dbInfo;
    
    public Category(){
        dbInfo = new DatabaseInfo();
    }    
    
    public String getName(int id, int userId){
        POJO.Category temp = this.getCategoryByIdAndUserId(id, userId);
        if (temp == null) return Controller.Category.UNCATEGORIZED;
        return temp.getNama();
    }
    
    public List<POJO.Category> getAllCategoryByUserId(int userId){
        List<Object> temp = dbInfo.getAllByUserId(POJO.Category.class.getName(), userId);
        List<POJO.Category> ret = new ArrayList<POJO.Category>();
        for(Object o : temp)
            ret.add((POJO.Category)o);
        return ret;
    }

    public void add(int jenis, int id, String kategori) {
        POJO.Category cat = new POJO.Category();
        cat.setIdUser(id);
        cat.setJenis(jenis);
        cat.setNama(kategori);
        
        dbInfo.insert(cat);
    }

    public void delete(int id, int userId) {
        if (id>0){
            POJO.Category x = (POJO.Category) dbInfo.getById(id, POJO.Category.class.getName());
            if (x.getIdUser() == userId){
                dbInfo.deleteWithUserId(id, userId, POJO.Category.class.getName());
                updateToDefault(id, userId);
            }
        }
    }

    public POJO.Category getCategoryByIdAndUserId(int id, int userId) {
        POJO.Category temp = (POJO.Category) dbInfo.getById(id, POJO.Category.class.getName());
        if (temp.getIdUser() != userId) 
            return null;
        return temp;
    }

    public void update(int id, int jenis, String nama, int userId) {
        POJO.Category cat = (POJO.Category) dbInfo.getById(id, POJO.Category.class.getName());
        if (cat.getIdUser() != userId)
            return;
        cat.setJenis(jenis);
        cat.setNama(nama);
        dbInfo.update(cat, POJO.Category.class.getName());
    }

    public List<Object> getByJenis(int jenis, int userId) {
        return dbInfo.getBy("jenis", jenis, userId, POJO.Category.class.getName());        
    }

    private void updateToDefault(int id, int idUser) {
        // TRANSAKSI
        Controller.Transaction trx = new Transaction();
        List<Object> temp = trx.getTransactionByUserId(idUser);
        for(Object o : temp){
            POJO.Transaction x = (POJO.Transaction) o;
            if (x.getIdKategori() == id){
                x.setIdKategori(0);
                trx.update(x);
            }
        }
        // TODO KE BUDGET JUGA
    }

    
}
