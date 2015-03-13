package Util;

import POJO.User;
import org.hibernate.Session;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

/**
 *
 * @author wahyuoi
 */
public class HibernateUtilTest {

    private static DatabaseInfo dbInfo;
    private static Session session;

    public HibernateUtilTest() {
    }

    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    // @Test
    // public void hello() {}
    @BeforeClass
    public static void setUpClass() throws Exception {
        dbInfo = new DatabaseInfo();

    }

    @AfterClass
    public static void tearDownClass() throws Exception {

    }

    @BeforeMethod
    public void setUpMethod() throws Exception {
    }

    @AfterMethod
    public void tearDownMethod() throws Exception {
    }

    @Test
    public void testHibernate() {
        DatabaseInfo db = new DatabaseInfo();
        System.err.println(((User) db.getById(2, "User")).getNama());
    }
}
