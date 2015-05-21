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
}
