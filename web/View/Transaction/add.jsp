<%-- 
    Document   : add
    Created on : May 6, 2015, 10:20:20 AM
    Author     : NK
--%>

<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="../navmenu.jsp" %>
<% List<POJO.Category> listCat = (List<POJO.Category>) request.getAttribute("cat"); %>
<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Add Transaction</h1>
    <ul class="nav nav-tabs">
        <li role="presentation" class="active"><a href="/transaction/add?jenis=1">Expense</a></li>
        <li role="presentation"><a href="/transaction/add?jenis=0">Income</a></li>
    </ul>
    <div class="table-responsive">
        
        <% if (request.getAttribute("error")!= null){ %>
        <div><%= request.getAttribute("error") %></div>
        <%}%>
        <form action="add" method="post">
            <table class="table">
                <thead>
                    <tr>
                        <th width="200px"></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label>Currency</label></td>
                        <td>
                            <select class="selectpicker form-control" name="matauang">
                                <option value="IDR">Indonesian Rupiah</option>
                                <option value="USD">United States Dollar</option>
                                <option value="EUR">Euro</option>
                                <option value="JPY">Japanese Yen</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Amount</label></td>
                        <td><input class="form-control" name="nominal"></td>
                    </tr>
                    <tr>
                        <td><label>Category</label></td>
                        <td>
                            <select name="kategori" class="selectpicker form-control">
                                <% for(POJO.Category temp : listCat){ %>
                                <option value="<%= temp.getId() %>"> <%= temp.getNama() %></option>
                                <% } %>
                            </select>
                        </td>
<!--                        <td><input class="form-control" name="kategori" type="number"></td>-->
                    </tr>
                    <tr>
                        <td><label>Description</label></td>
                        <td><input class="form-control" name="deskripsi" type="text"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td align="right">
                            <input class="form-control" name="jenis" value="1" type="hidden">
                            <input name="submit" type="submit" class=" btn btn-primary" id="loginButton" value="Submit">
                            <span class="success">${messages.success}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
</div>

<%@include file="../footer.jsp" %>
