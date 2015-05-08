<%-- 
    Document   : update
    Created on : May 6, 2015, 11:16:15 AM
    Author     : NK
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="../navmenu.jsp" %>
<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Edit Transaction</h1>
    <div class="table-responsive">
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
                        <td><input class="form-control" name="nominal" type="number" value="${trx.getAmount()}"></td>
                    </tr>
                    <tr>
                        <td><label>Category</label></td>
                        <td><input class="form-control" name="kategori" type="number" value="${trx.getIdKategori()}"></td>
                    </tr>
                    <tr>
                        <td><label>Description</label></td>
                        <td><input class="form-control" name="deskripsi" type="text" value="${trx.getDeskripsi()}"></td>
                    </tr>
                    <tr>
                        <td><label>Type</label></td>
                        <td>
                            <select class="selectpicker" name="jenis" value="${trx.getJenis()}">
                                <option value="0">Income</option>
                                <option value="1">Expense</option>
                            </select>
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
