/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Route.Budget;

import Controller.Budget;
import Controller.Category;
import Controller.Transaction;
import Controller.User;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
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
@WebServlet(name = "Retrieve", urlPatterns = {"/budget"})
public class Retrieve extends HttpServlet {

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
        Controller.Transaction trxCon = new Transaction();
        Controller.Budget budgetCon = new Budget();
        Controller.Category catCon = new Category();
        
        Cookie[] cookies = request.getCookies();
        int idUser = userCon.getUserId(cookies);
        
        Calendar calendar = new GregorianCalendar();
        int month = calendar.get(Calendar.MONTH)+1;
        int year = calendar.get(Calendar.YEAR);                
        
        List<POJO.Category> cats = catCon.getAllCategoryByUserId(idUser);        
        request.setAttribute("cats", cats);
        
        int idJenis = 1; // EXPENSE
        List<POJO.Transaction> trx = trxCon.getTransactionByMonthAndJenisGroupByCategory(idUser, month, year, idJenis);
        for (POJO.Transaction t : trx ){
            request.setAttribute("trx"+t.getIdKategori(), t.getAmount());
        }
        
        List<Object> budgets = budgetCon.getById(idUser);
        for (Object o : budgets) {
            POJO.Budget b = (POJO.Budget) o;
            request.setAttribute("left"+b.getIdKategori(), b.getBatas()-((Double)(request.getAttribute("trx"+b.getIdKategori()))));
            request.setAttribute("persen"+b.getIdKategori(), (((Double)(request.getAttribute("trx"+b.getIdKategori())))) * 100.0 / b.getBatas());
        }
        int date = calendar.get(Calendar.DATE);
        request.setAttribute("today", date*100.0/30);
        request.setAttribute("trx", trx);
        request.getRequestDispatcher("/View/Budget/retrieve.jsp").forward(request, response);
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
