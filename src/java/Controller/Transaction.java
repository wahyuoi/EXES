package Controller;

import Util.DatabaseInfo;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 *
 * @author wahyuoi
 */
public class Transaction {
    
    private DatabaseInfo dbInfo;
    
    public Transaction(){
        dbInfo = new DatabaseInfo();
    }
    
    public void add(int idUser, String matauang, double nominal, int kategori, String deskripsi, int jenis) {
        POJO.Transaction trx = new POJO.Transaction();
        trx.setIdUser(idUser);
        trx.setMataUang(matauang);
        trx.setAmount((nominal));
        trx.setIdKategori((kategori));
        trx.setDeskripsi(deskripsi);
        trx.setJenis((jenis));
        
        dbInfo.insert(trx);
    }

    public List<Object> getTransaction(int N) {                
        List<Object> ret = dbInfo.getLimitedRows(POJO.Transaction.class.getName(), N);
        return ret;
    }
    
    public List<POJO.Transaction> getTransactionByUserId(int id_user){
        List<Object> temp = dbInfo.getAllByUserId(POJO.Transaction.class.getName(), id_user);
        List<POJO.Transaction> ret = new ArrayList<>();
        for (Object o : temp)
            ret.add((POJO.Transaction) o);
        return ret;
    }

    public void delete(int _id, int idUser) {
        if (_id>0)
            dbInfo.deleteWithUserId(_id, idUser, POJO.Transaction.class.getName());
    }

    public POJO.Transaction getTrasactionById(int _ids) {
        POJO.Transaction ret = (POJO.Transaction) dbInfo.getById(_ids, POJO.Transaction.class.getName());
        return ret;
    }

    public void update(int id, int idUser, double nominal, String matauang, String deskripsi, int kategori, int jenis) {
        POJO.Transaction trx = (POJO.Transaction) dbInfo.getById(id, POJO.Transaction.class.getName());
        trx.setAmount(nominal);
        trx.setDeskripsi(deskripsi);
        trx.setIdKategori(kategori);
        trx.setJenis(jenis);
        trx.setMataUang(matauang);
        
        dbInfo.update(trx, POJO.Transaction.class.getName());
    }

    void update(POJO.Transaction x) {
        dbInfo.update(x, POJO.Transaction.class.getName());
    }
  
    public List<POJO.Transaction> getTransactionByDate(int idUser, int dateA, int monthA, int yearA, int dateB, int monthB, int yearB){
        Date first = new Date(yearA-1900, monthA-1, dateA);
        Date second = null;
        if (yearB != -1)
            second = new Date(yearB-1900, monthB-1, dateB);        
        
        List<Object> temp = dbInfo.getByMonth(POJO.Transaction.class.getName(), idUser, first, second);
        
        List<POJO.Transaction> ret = new ArrayList<>();
        for (Object o : temp)
            ret.add((POJO.Transaction) o);
        return ret;  
    }
    
    public List<POJO.Transaction> getTransactionByMonth(int idUser, int month, int year) {
        int yearB = year + month/12;
        int monthB = month%12 + 1;
        return this.getTransactionByDate(idUser, 1, month, year, 1, monthB, yearB);  
    }

    public List<POJO.Transaction> getTransactionFromDate(int idUser, int date, int month, int year) {
        return this.getTransactionByDate(idUser, date, month, year, -1, -1, -1);
    }

    public List<POJO.Transaction> getTransactionBetweenDate(int idUser, int dateA, int monthA, int yearA, int dateB, int monthB, int yearB) {
        int[] tgl = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        int add = dateB/tgl[monthB];
        dateB = dateB%tgl[monthB] + 1;
        
        if (add > 0){
            add = monthB/12;
            monthB = monthB%12 + 1;
            yearB += add;
        }
        return this.getTransactionByDate(idUser, dateA, monthA, yearA, dateB, monthB, yearB);
        
    }

    void deleteAllUserId(int id) {
        dbInfo.deleteAllUserId(id, POJO.Transaction.class.getName());
    }

    public List<POJO.Transaction> getTransactionByMonthAndJenisGroupByCategory(int idUser, int month, int year, int idJenis) {
        List<POJO.Transaction> temp = getTransactionByMonth(idUser, month, year);        
        List<POJO.Transaction> ret = new ArrayList<>();
        double all = 0;
        
        for (POJO.Transaction t : temp)
            if (t.getJenis() == idJenis){
                all += t.getAmount();
                boolean found = false;
                for (POJO.Transaction r : ret){
                    if (r.getIdKategori() == t.getIdKategori()) {
                        r.setAmount(r.getAmount() + t.getAmount());
                        found = true;
                    }
                }
                
                if (!found) {
                    ret.add(t);
                }
                    
            }
        POJO.Transaction lastAll = new POJO.Transaction();
        lastAll.setIdKategori(-1);
        lastAll.setAmount(all);
        ret.add(lastAll);
        return ret;
    }
    
}
