<%-- 
    Document   : add
    Created on : May 6, 2015, 12:21:44 PM
    Author     : NK
--%>

<%@page import="java.util.List"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<% List<Object> cats = (List<Object>)request.getAttribute("cats"); %>
<% List<Object> budgets = (List<Object>)request.getAttribute("budgets"); %>
<% POJO.Budget all = (POJO.Budget) request.getAttribute("all"); %>
<%@include file="../navmenu.jsp" %>
<!--<script language="javascript">
    $(document).ready(function(){
        $('#add').click(function() {
            //var row = $("<tr><td><input class="form-control" name="kategori" type"number" placeholder="Category"></td><td><input class="form-control" name="limit" type="number" placeholder="Amount"></td><td><select class="selectpicker" name="siklus"><option value="1">per Week</option><option value="2">per Month</option><option value="3">per Year</option></select></td><td><div class="checkbox"><label><input type="checkbox" name="rollover" value="1"> Rollover</label></div></td></tr>");
            $('#dataTable').append("<tr><td><input class="form-control" name="kategori" type"number" placeholder="Category"></td><td><input class="form-control" name="limit" type="number" placeholder="Amount"></td><td><select class="selectpicker" name="siklus"><option value="1">per Week</option><option value="2">per Month</option><option value="3">per Year</option></select></td><td><div class="checkbox"><label><input type="checkbox" name="rollover" value="1"> Rollover</label></div></td></tr>");
        }
    }
</script>-->
<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Set Budget</h1>
    <div class="table-responsive">
        <form action="add" method="post">
            <table class="table" id="dataTable">
                <thead>
                    <tr>
                        <th width="200px"></th>
                        <th></th>
                        <th width="200px"></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label>Overall Spending Limit</label></td>
                        <td><input class="form-control" type="number" name="limit" placeholder="Amount" value=<fmt:formatNumber type="number" groupingUsed="false" maxFractionDigits="0" value="<%=(all!=null)?all.getBatas():0%>" /> ></td>
                        <td>                                                                                   
                            <input class="form-control" name="kategori" type="hidden" value="-1">                            
                            <select class="selectpicker" name="siklus">
                                <!--<option <%= (all!=null && all.getSiklus()==1)?"selected":"" %> value="1">per Week</option>-->
                                <option <%= (all!=null && all.getSiklus()==2)?"selected":"" %> value="2">per Month</option>
                                <!--<option <%= (all!=null && all.getSiklus()==3)?"selected":"" %> value="3">per Year</option>-->
                            </select>
                        </td>
                    </tr>
                    <% if (cats.size() > 0) { %>
                    <tr>
                        <td colspan="4"><label>Spending Limit per Category</label></td>
                    </tr>                    
                    <% } 
                        int ids = 0;
                        for(Object o : budgets) {
                        POJO.Budget budget = (POJO.Budget) o;
                        if (budget.getIdKategori() == -1 ) continue;
                        ++ids;
                    %>
                    <tr>
                        <td>
                            <input class="form-control" name="kategori" type="hidden"  value=<%= budget.getIdKategori() %> >
                            <span class="form-control"> <%= ((POJO.Category)request.getAttribute(String.valueOf(budget.getIdKategori()))).getNama() %> </span>
                        </td>
                        <td><input class="form-control" name="limit" type="number" placeholder="Amount" value=<fmt:formatNumber type="number" maxFractionDigits="3" value="<%=budget.getBatas()%>" /> ></td>
                        <td>
                            <select class="selectpicker" name="siklus">
                                <!--<option <%= (budget.getSiklus() == 1)?"selected":"" %> value="1">per Week</option>-->
                                <option <%= (budget.getSiklus() == 2)?"selected":"" %> value="2">per Month</option>
                                <!--<option <%= (budget.getSiklus() == 3)?"selected":"" %> value="3">per Year</option>-->
                            </select>
                        </td>
                        <td>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" <%= (budget.getRollover()==1)?"checked":"" %> name="rollover" value="<%= ids %>" > Rollover
                                </label>
                            </div>
                        </td>
                    </tr>  
                    <%    
                        } 
                        for(Object o : cats) { 
                        POJO.Category cat = (POJO.Category) o; 
                        ++ids;
                    %>
                    <tr>
                        <td>
                            <input class="form-control" name="kategori" type="hidden"  value=<%= cat.getId() %> >
                            <span class="form-control"> <%= cat.getNama()%> </span>
                        </td>
                        <td><input class="form-control" name="limit" type="number" placeholder="Amount"></td>
                        <td>
                            <select class="selectpicker" name="siklus">
                                <!--<option value="1">per Week</option>-->
                                <option value="2">per Month</option>
                                <!--<option value="3">per Year</option>-->
                            </select>
                        </td>
                        <td>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="rollover" value="<%= ids %>" > Rollover
                                </label>
                            </div>
                        </td>
                    </tr>
                    <% } %>
                    <tr><td><input name="submit" type="submit" class=" btn btn-primary" id="loginButton" value="Save Budget" style="margin-left: 10px;"></td></tr>
                    
                    
                   
                    
                </tbody>
            </table>
                        
        </form>
    </div>
</div>

<%@include file="../footer.jsp" %>
