/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Route.Report;

import Controller.Category;
import Controller.Transaction;
import Controller.User;
import java.io.IOException;
import java.io.PrintWriter;
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
@WebServlet(name = "Income", urlPatterns = {"/report/income"})
public class Income extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Controller.User userCon = new User();
        Cookie[] cookies = request.getCookies();
        if (!userCon.isLogin(cookies)){
            response.sendRedirect("/");
        }
        
        
        Controller.Transaction trxCon = new Transaction();   
        int idUser = userCon.getUserId(cookies);
        Controller.Category catCon = new Category();
        List<POJO.Category> cats = catCon.getAllCategoryByUserId(idUser);
        for (POJO.Category cat : cats){
            request.setAttribute(cat.getId()+"", cat.getNama());
        }
        List<Object> month = trxCon.getTransactionThisMonthByCategories(idUser, 0);
        List<Object> all = trxCon.getAllTransactionByCategories(idUser, 0);
        
        request.setAttribute("month", month);
        request.setAttribute("all", all);
        
        request.getRequestDispatcher("/View/Report/income.jsp").forward(request, response);
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
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
        processRequest(request, response);
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
        processRequest(request, response);
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
