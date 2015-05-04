package Route.Transaction;

import Controller.Transaction;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author wahyuoi
 */
@WebServlet(name = "Update", urlPatterns = {"/transaction/update"})
public class Update extends HttpServlet {
  
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
        if (!userController.isLogin(request.getCookies())){
            response.sendRedirect("/Exes");
            return;
        }
        Controller.Transaction trxController = new Controller.Transaction();
        String id = request.getParameter("id");
        int _ids = 0;
        try {
            _ids = Integer.parseInt(id);
        } catch (Exception e){
            _ids = 0;
        }
        
        POJO.Transaction trx = trxController.getTrasactionById(_ids);
        if (trx == null){
            response.sendRedirect("/Exes");
        }   else {
            request.setAttribute("trx", trx);
            request.getRequestDispatcher("/View/Transaction/update.jsp").forward(request, response);
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
        int id = Integer.parseInt(request.getParameter("id"));
        int idUser = Integer.parseInt(request.getParameter("idUser"));
        int nominal = Integer.parseInt(request.getParameter("nominal"));
        String matauang = (request.getParameter("matauang"));
        String deskripsi = (request.getParameter("nominal"));
        int kategori = Integer.parseInt(request.getParameter("kategori"));
        int jenis = Integer.parseInt(request.getParameter("jenis"));
        
        Transaction trx = new Transaction();
        trx.update(id, idUser, nominal, matauang, deskripsi, kategori, jenis);
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
