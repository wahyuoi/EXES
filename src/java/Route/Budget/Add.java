package Route.Budget;

import Controller.Category;
import POJO.Budget;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
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
@WebServlet(name = "AddBudget", urlPatterns = {"/budget/add"})
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
        if (!userController.isLogin(cookies)){
            response.sendRedirect("/");
        }
        int idUser = userController.getUserId(cookies);
        Controller.Category catCon = new Category();        
        List<Object> categories = catCon.getByJenis(1, idUser);
        
        Controller.Budget budgetCon = new Controller.Budget();
        List<Object> budgets = budgetCon.getById(idUser);
        
        // remove categories that have been used
        for (Object o : budgets){
            Budget tempA = (POJO.Budget) o;
            if (tempA.getIdKategori() == -1){
                request.setAttribute("all", o);
                continue;
            }
            for (Object p : categories) {
                POJO.Category tempB = (POJO.Category) p;
                if (tempA.getIdKategori() == tempB.getId()) {
                    request.setAttribute(tempB.getId().toString(), tempB);
                    categories.remove(p);
                    break;
                }
            }
        }
        
        request.setAttribute("budgets", budgets);
        request.setAttribute("cats", categories);
        request.getRequestDispatcher("/View/Budget/add.jsp").forward(request, response);
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
        System.out.println("DEBUG");
        String[] siklus = request.getParameterValues("siklus");
        String[] kategori = request.getParameterValues("kategori");
        String[] limit = request.getParameterValues("limit");
        String[] rollover = request.getParameterValues("rollover");
        int N = limit.length;
        // mark rollover
        boolean[] rolling = new boolean[N];
        for (int ii=0;ii<N; ++ii)
            rolling[ii] = false;
        if (rollover != null)
            for (int ii=0; ii<rollover.length; ++ii)
                rolling[Integer.parseInt(rollover[ii])] = true;
        
        // save 
        Controller.Budget budgetCon = new Controller.Budget();
        for (int ii=0; ii<N; ++ii){
            int idSiklus = Integer.parseInt(siklus[ii]);
            int idKategori = Integer.parseInt(kategori[ii]);
            if (limit[ii].trim().isEmpty())
                limit[ii]="0";
            limit[ii] = limit[ii].replace(",", "");
            double idLimit = Double.parseDouble(limit[ii]);
            int idRollover = (rolling[ii])?1:0;
            
            Budget cur = budgetCon.getBudgetByCategoryAndUserId(idKategori, idUser);
            if (cur == null)
                cur = new POJO.Budget();
            
            cur.setSiklus(idSiklus);
            cur.setIdKategori(idKategori);
            cur.setIdUser(idUser);
            cur.setBatas(idLimit);
            cur.setRollover(idRollover);
            int id = budgetCon.save(cur);
        }
        response.sendRedirect("/budget");
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
