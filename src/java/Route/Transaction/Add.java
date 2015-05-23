package Route.Transaction;

import Controller.Category;
import java.io.IOException;
import java.util.List;
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
            int userId = userController.getUserId(cookies);
            Controller.Category catController = new Category();
            int jenis = 0;
            try {
                jenis = Integer.parseInt(request.getParameter("jenis"));
                if (jenis!=0) jenis = 1;
            } catch (Exception e) {
            }
             
            List<Object> cat = catController.getByJenis(jenis, userId);
                        
            request.setAttribute("cat", cat);
            if (jenis==1)
                request.getRequestDispatcher("/View/Transaction/add.jsp").forward(request, response);
            else 
                request.getRequestDispatcher("/View/Transaction/addInc.jsp").forward(request, response);
        } else { // user does not login
            response.sendRedirect("/");
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
            response.sendRedirect("/");
        }
        int idUser = userController.getUserId(cookies);
        String matauang = request.getParameter("matauang");
        double nominal;
        int kategori = 0;
        try {
            kategori = Integer.parseInt(request.getParameter("kategori"));            
        } catch (Exception e) {
        }
        String deskripsi = request.getParameter("deskripsi");
        int jenis = Integer.parseInt(request.getParameter("jenis"));
        try {
            nominal = Double.parseDouble(request.getParameter("nominal"));   
            if (nominal<0) 
                throw new Exception();
        } catch (Exception e) {
            request.setAttribute("error", "Perhatian! Input nominal harus bilangan bulat positif");
            Controller.Category catController = new Category();
            List<Object> cat = catController.getByJenis(jenis, idUser);                        
            request.setAttribute("cat", cat);
            if (jenis==1)
                request.getRequestDispatcher("/View/Transaction/add.jsp").forward(request, response);
            else 
                request.getRequestDispatcher("/View/Transaction/addInc.jsp").forward(request, response);
            return;
        }                
        
        Controller.Transaction trxController = new Controller.Transaction();
        
        trxController.add(idUser, matauang, nominal, kategori, deskripsi, jenis);  
        
        response.sendRedirect("/transaction");
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
