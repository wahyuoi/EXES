package Route.Auth;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
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
@WebServlet(name = "Login", urlPatterns = {"/login"})
public class Login extends HttpServlet {

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
        request.getRequestDispatcher("Auth/login.jsp").forward(request, response);
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
        String email = request.getParameter("email");
        String password = request.getParameter("password");

        Controller.User userController = new Controller.User();        
        Cookie[] cookies = request.getCookies();
        
        if (userController.isLogin(cookies)){
            response.sendRedirect("/Exes");
        }
        
        Map<String, String> messages = userController.doLogin(email, password);
        request.setAttribute("messages", messages);
        
        if (messages.containsKey("LSESSID")){
            Cookie cook = new Cookie("LSESSID", messages.get("LSESSID"));
            response.addCookie(cook);
            cook = new Cookie("EMAIL", messages.get("EMAIL"));
            response.addCookie(cook);
            response.sendRedirect("index.jsp");
        } else {
            request.getRequestDispatcher("Auth/login.jsp").forward(request, response);
        }        
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
