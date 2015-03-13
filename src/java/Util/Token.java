package Util;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.net.URLEncoder;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author wahyuoi
 */
public class Token {

    public static String generateToken(String seed) {
        try {
            byte[] bytesOfMessage = seed.getBytes("UTF-8");
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] thedigest = md.digest(bytesOfMessage);

            BigInteger bigInt = new BigInteger(1, thedigest);
            String hash = bigInt.toString(16);

            // full 32 char
            while (hash.length() < 16) {
                hash = "0" + hash;
            }

            // get last 16 char
            if (hash.length() > 16) {
                hash = hash.substring(hash.length() - 16);
            }

            return hash;

        } catch (UnsupportedEncodingException ex) {
            Logger.getLogger(Token.class.getName()).log(Level.SEVERE, null, ex);
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(Token.class.getName()).log(Level.SEVERE, null, ex);
        }
        return ""; // no token available
    }

    public static String generateSessionId() throws UnsupportedEncodingException {
        String uid = new java.rmi.server.UID().toString(); // guaranteed unique
        return URLEncoder.encode(uid, "UTF-8"); // encode any special chars
    }
}
