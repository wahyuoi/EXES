<%-- 
    Document   : add
    Created on : May 8, 2015, 9:43:15 AM
    Author     : novie.kamalia
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="../navmenu.jsp" %>
<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Add Category</h1>
    <div class="table-responsive">
        <form action="/category/add" method="post">
            <table class="table">
                <thead>
                    <tr>
                        <th width="200px"></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label>Type</label></td>
                        <td>
                            <select class="selectpicker" name="jenis">
                                <option value="0">Income</option>
                                <option value="1">Expense</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Category</label></td>
                        <td><input class="form-control" name="kategori" type="text"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td align="right">
                            <input class="form-control" name="#" value="#" type="hidden">
                            <input name="submit" type="submit" class=" btn btn-primary" id="loginButton" value="Submit">
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
</div>

<%@include file="../footer.jsp" %>
