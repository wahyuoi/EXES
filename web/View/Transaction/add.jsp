<%-- 
    Document   : add
    Created on : May 6, 2015, 10:20:20 AM
    Author     : NK
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="../navmenu.jsp" %>
<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Add Transaction</h1>
    <div class="table-responsive">
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
                        <td><input class="form-control" name="matauang" type="text"></td>
                    </tr>
                    <tr>
                        <td><label>Amount</label></td>
                        <td><input class="form-control" name="nominal" type="number"></td>
                    </tr>
                    <tr>
                        <td><label>Category</label></td>
                        <td><input class="form-control" name="kategori" type="number"></td>
                    </tr>
                    <tr>
                        <td><label>Description</label></td>
                        <td><input class="form-control" name="deskripsi" type="text"></td>
                    </tr>
                    <tr>
                        <td><label>Type</label></td>
                        <td><input class="form-control" name="jenis" type="number"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td align="right">
                            <input class="form-control" name="idUser" value="<%= request.getAttribute("idUser")%>" type="hidden">
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
