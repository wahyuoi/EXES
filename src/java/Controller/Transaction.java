package Controller;

import Util.DatabaseInfo;
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
    
    public void add(int idUser, String matauang, int nominal, int kategori, String deskripsi, int jenis) {
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

    public void delete(int _id, int idUser) {
        if (_id>0)
            dbInfo.deleteWithUserId(_id, idUser, POJO.Transaction.class.getName());
    }

    public POJO.Transaction getTrasactionById(int _ids) {
        POJO.Transaction ret = (POJO.Transaction) dbInfo.getById(_ids, POJO.Transaction.class.getName());
        return ret;
    }

    public void update(int id, int idUser, int nominal, String matauang, String deskripsi, int kategori, int jenis) {
        POJO.Transaction trx = (POJO.Transaction) dbInfo.getById(id, POJO.Transaction.class.getName());
        trx.setAmount(nominal);
        trx.setDeskripsi(deskripsi);
        trx.setIdKategori(kategori);
        trx.setJenis(jenis);
        trx.setMataUang(matauang);
        
        dbInfo.update(trx, POJO.Transaction.class.getName());
    }
    
}
