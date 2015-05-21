package Controller;

import Util.DatabaseInfo;
import java.util.List;

/**
 *
 * @author wahyuoi
 */
public class Category {
    private DatabaseInfo dbInfo;
    
    public Category(){
        dbInfo = new DatabaseInfo();
    }    
    
    public List<Object> getAllCategoryByUserId(int userId){
        return dbInfo.getAllByUserId(POJO.Category.class.getName(), userId);
    }

    public void add(int jenis, int id, String kategori) {
        POJO.Category cat = new POJO.Category();
        cat.setIdUser(id);
        cat.setJenis(jenis);
        cat.setNama(kategori);
        
        dbInfo.insert(cat);
    }

    public void delete(int id, int userId) {
        if (id>0)
            dbInfo.deleteWithUserId(id, userId, POJO.Category.class.getName());
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

    
}
