package Route.Auth;

import Util.EmailValidator;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author wahyuoi
 */
@WebServlet(name = "Reset", urlPatterns = {"/reset"})
public class Reset extends HttpServlet {

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
        String id = request.getParameter("id");
        // tanpa parameter
        if (id == null || id.trim().isEmpty()){            
            request.getRequestDispatcher("Auth/reset.jsp").forward(request, response);
        } else {
            // dengan parameter token
            Controller.User userController = new Controller.User();
            userController.doValidateResetToken(request, response);
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
        String email = request.getParameter("email");
        if (email != null){
            userController.doSendResetToken(request, response);
        }
        
        String id = request.getParameter("id");
        String token = request.getParameter("token");
        if (id != null && token != null){
            userController.doSaveNewPassword(request, response);
        }
        
        response.sendRedirect("Auth/reset.jsp");
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
