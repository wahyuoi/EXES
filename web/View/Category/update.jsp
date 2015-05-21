<%-- 
    Document   : update
    Created on : May 8, 2015, 10:11:25 AM
    Author     : novie.kamalia
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<% POJO.Category cat = (POJO.Category)request.getAttribute("cat"); %>
<%@include file="../navmenu.jsp" %>
<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Edit Category</h1>
    <div class="table-responsive">
        <form action="/category/update" method="post">
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
                                <option <%= (cat.getJenis()==0)?"selected":"" %> value="0">Income</option>
                                <option <%= (cat.getJenis()==1)?"selected":"" %> value="1">Expense</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Category</label></td>
                        <td><input class="form-control" name="kategori" type="text" value="<%= cat.getNama()  %>"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td align="right">
                            <input class="form-control" name="id" value="<%= cat.getId() %>" type="hidden">
                            <input name="submit" type="submit" class=" btn btn-primary" id="loginButton" value="Submit">
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
</div>

<%@include file="../footer.jsp" %>
