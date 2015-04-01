package Route.Transaction;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author wahyuoi
 */
@WebServlet(name = "AddTransaction", urlPatterns = {"/transaction/add"})
public class Add extends HttpServlet {

    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Controller.User userController = new Controller.User();
        Cookie[] cookies = request.getCookies();
        if (userController.isLogin(cookies)) {                                
            request.getRequestDispatcher("/View/Transaction/add.jsp").forward(request, response);
        } else { // user does not login
            response.sendRedirect("/Exes");
        }
        
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Controller.User userController = new Controller.User();
        Cookie[] cookies = request.getCookies();
        if (!userController.isLogin(cookies)){
            response.sendRedirect("/Exes");
        }
        int idUser = userController.getUserId(cookies);
        String matauang = request.getParameter("matauang");
        int nominal = Integer.parseInt(request.getParameter("nominal"));
        int kategori = Integer.parseInt(request.getParameter("kategori"));
        String deskripsi = request.getParameter("deskripsi");
        int jenis = Integer.parseInt(request.getParameter("jenis"));
        
        Controller.Transaction trxController = new Controller.Transaction();
        
        trxController.add(idUser, matauang, nominal, kategori, deskripsi, jenis);  
        
        response.sendRedirect("/Exes/transaction");
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
