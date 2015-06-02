package Util;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Order;

/**
 *
 * @author wahyuoi
 */
public class DatabaseInfo {

    Session session;
    Transaction tx;

    // before class
    public void beforeClass() {
        session = HibernateUtil.getSessionFactory().openSession();
        tx = session.beginTransaction();
    }

    // After Class
    public void afterClass() {
        tx.commit();
        session.flush();
        session.close();
    }

    // insert object to database
    public int insert(Object obj) {
        beforeClass();
        int id = (int) session.save(obj);
        afterClass();
        return id;
    }

    // update object to database
    public void update(Object obj, String clazz) {
        beforeClass();
        session.update(obj);
        afterClass();
    }

    // delete obj from database
    public void delete(int id, String clazz) {
        beforeClass();
        try {
            Class cls = Class.forName(clazz);
            Object obj = cls.newInstance();
            obj = session.load(cls, id);            
            session.delete(obj);
        } catch (Exception e) {
            e.printStackTrace();
        }
        afterClass();
    }

    // delete object belongs to user
    public void deleteWithUserId(int id, int idUser, String clazz) {
        beforeClass();
        try {
            Class cls = Class.forName(clazz);
            Object obj = cls.newInstance();
            obj = session.load(cls, id);
            
            session.delete(obj);
        } catch (Exception e) {
            e.printStackTrace();
        }
        afterClass();
    }
    // get all rows
    public List<Object> getAll(String clazz) {
        beforeClass();

        List<Object> ret = new ArrayList<Object>();
        String query = "from " + clazz;
        ret = session.createQuery(query).list();

        afterClass();
        return ret;
    }

    // get limited rows
    public List<Object> getLimitedRows(String clazz, int limits) {
        beforeClass();

        List<Object> ret = new ArrayList<Object>();
        
        ret = session.createCriteria(clazz)                
                .addOrder(Order.desc("id"))
                .setMaxResults(limits).list();

        afterClass();
        return ret;
    }
    
    // get row by id
    public Object getById(int id, String clazz) {
        beforeClass();
        String queryString = "from " + clazz + " where id = " + id;
        Query query = session.createQuery(queryString);

        Object obj = query.uniqueResult();

        afterClass();
        return obj;
    }

    // get all rows
    public List<Object> getByEmail(String email, String clazz) {
        beforeClass();

        List<Object> ret = new ArrayList<Object>();
        String query = "from " + clazz + " where email = '" + email + "'";
        ret = session.createQuery(query).list();

        afterClass();
        return ret;
    }

    public List<Object> getAllByUserId(String clazz, int id_user) {
        beforeClass();

        List<Object> ret = new ArrayList<Object>();
        String query = "from " + clazz + " where id_user = '" + id_user + "'";
        ret = session.createQuery(query).list();

        afterClass();
        return ret;
    }

    public List<Object> getBy(String key, int value, int id_user, String clazz) {
        beforeClass();

        List<Object> ret = new ArrayList<Object>();
        String query = "from " + clazz + " where id_user = '" + id_user + "' and " + key + " = '" 
                + value +"'";
        ret = session.createQuery(query).list();

        afterClass();
        return ret;
    }
    // get row by id
    public Object getByToken(String token, String clazz) {
        beforeClass();
        String queryString = "from " + clazz + " where token = '" + token + "'";
        Query query = session.createQuery(queryString);

        Object obj = query.uniqueResult();

        afterClass();
        return obj;
    }

    public List<Object> getByMonth(String clazz, int idUser, Date first, Date second) {
        beforeClass();
        String att = "tgl_transaksi";
        List<Object> ret = new ArrayList<Object>();
        
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        boolean isFirst = false; 
 
        StringBuilder query = new StringBuilder("from " + clazz+ " where idUser = '" + idUser + "'");        
        if (first != null){
            if (isFirst) {
                query.append(" where "+ att +" >= '" + sdf.format(first) + "'");
            } else {
                query.append(" and "+ att +" >= '" + sdf.format(first) + "'");                
            }
            isFirst = false;
        }
        
        if (second != null){
            if (isFirst) {
                query.append(" where "+ att +" < '" + sdf.format(second) + "'");                        
            } else {
                query.append(" and "+ att +" <= '" + sdf.format(second) + "'");
            }
            isFirst = false;
        }
        
        query.append(" order by "+att);
        ret = session.createQuery(query.toString()).list();

        afterClass();
        return ret;
    }
}
