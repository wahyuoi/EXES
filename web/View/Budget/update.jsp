<%-- 
    Document   : update
    Created on : May 6, 2015, 12:29:28 PM
    Author     : NK
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="../navmenu.jsp" %>
<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Edit Transaction</h1>
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
                        <td><label>Overall Spending Limit</label></td>
                        <td><input class="form-control" name="limit" type="number" value="Amount"></td>
                        <td>
                            <select class="selectpicker" name="siklus">
                                <option>per Week</option>
                                <option>per Month</option>
                                <option>per Year</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4"><label>Spending Limit per Category</label></td>
                    </tr>
                    <tr>
                        <td><input class="form-control" name="limit" type="number" value=""></td>
                        <td><input class="form-control" name="nominal" type="number" value=""></td>
                        <td>
                            <select class="selectpicker" name="siklus">
                                <option>per Week</option>
                                <option>per Month</option>
                                <option>per Year</option>
                            </select>
                        </td>
                        <td>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" value=""> Rollover
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><input class="form-control" name="limit" type="number" value=""></td>
                        <td><input class="form-control" name="nominal" type="number" value=""></td>
                        <td>
                            <select class="selectpicker" name="siklus">
                                <option>per Week</option>
                                <option>per Month</option>
                                <option>per Year</option>
                            </select>
                        </td>
                        <td>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox"> Rollover
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4" align="right">
                            <a>Add another budget</a>
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
