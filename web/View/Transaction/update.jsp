<%-- 
    Document   : update
    Created on : May 6, 2015, 11:16:15 AM
    Author     : NK
--%>

<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="../navmenu.jsp" %>
<% List<POJO.Category> listCat = (List<POJO.Category>) request.getAttribute("cat"); System.out.println(listCat.size());%>
<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Edit Transaction</h1>
    <div class="table-responsive">
        <%if (request.getAttribute("error")!=null) { %>
        <div class="alert alert-warning" role="alert">${error}</div>
        <% } %>
        <form action="update" method="post">
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
                            <select class="selectpicker" name="matauang" value="${trx.getMataUang()}">
                                <option value="IDR">Indonesian Rupiah</option>
                                <option value="USD">United States Dollar</option>
                                <option value="EUR">Euro</option>
                                <option value="JPY">Japanese Yen</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Amount</label></td>
                        <td><input class="form-control" name="nominal" value="${trx.getAmount()}"></td>
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
                    </tr>
                    <tr>
                        <td><label>Description</label></td>
                        <td><input class="form-control" name="deskripsi" type="text" value="${trx.getDeskripsi()}"></td>
                    </tr>
                    <tr>
                        <td><label>Type</label></td>
                        <td>
                            <input type="hidden" name="jenis" value="${trx.getJenis()}">
                            <input value="${(trx.getJenis()==1)?"Expense":"Income"}" disabled class="form-control">
                            
                        </td>
                    </tr>
                    <tr>
                        <td><span class="success">${messages.success}</span></td>
                        <td align="right">
                            <input name="idUser"  value="${trx.getIdUser()}" type="hidden">
                            <input name="id"  value="${trx.getId()}" type="hidden">
                            <input name="submit" type="submit" class=" btn btn-primary" id="loginButton" value="Submit">
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
</div>

<%@include file="../footer.jsp" %>
