<%-- 
    Document   : add
    Created on : May 6, 2015, 12:21:44 PM
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
                        <th width="200px"></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label>Overall Spending Limit</label></td>
                        <td><input class="form-control" name="limit" type="number" placeholder="Amount"></td>
                        <td>
                            <input class="form-control" name="kategori" type="hidden" value="-1">                            
                            <select class="selectpicker" name="siklus">
                                <option value="1">per Week</option>
                                <option value="2">per Month</option>
                                <option value="3">per Year</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4"><label>Spending Limit per Category</label></td>
                    </tr>
                    <tr>
                        <td><input class="form-control" name="kategori" type="number" placeholder="Category"></td>
                        <td><input class="form-control" name="limit" type="number" placeholder="Amount"></td>
                        <td>
                            <select class="selectpicker" name="siklus">
                                <option value="1">per Week</option>
                                <option value="2">per Month</option>
                                <option value="3">per Year</option>
                            </select>
                        </td>
                        <td>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="rollover" value="1"> Rollover
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><input class="form-control" name="kategori" type="number" placeholder="Category"></td>
                        <td><input class="form-control" name="limit" type="number" placeholder="Amount"></td>
                        <td>
                            <select class="selectpicker" name="siklus">
                                <option value="1">per Week</option>
                                <option value="2">per Month</option>
                                <option value="3">per Year</option>
                            </select>
                        </td>
                        <td>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="rollover" value="2"> Rollover
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3"><span class="success">${messages.success}</span></td>
                        <td align="right">                            
                            <input name="submit" type="submit" class=" btn btn-primary" id="loginButton" value="Save Budget">
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
</div>

<%@include file="../footer.jsp" %>
