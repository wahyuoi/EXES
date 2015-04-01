<%-- 
    Document   : add
    Created on : Mar 24, 2015, 9:42:32 PM
    Author     : wahyuoi
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Update Transaction</title>
    </head>
    <body>
        <form action="update" method="post">
            <table>               
                <tr>
                    <td>Jenis Mata Uang</td>
                    <td><input name="matauang" type="text" value="${trx.getMataUang()}"></td> 
                </tr>
                <tr>
                    <td>Nominal</td>
                    <td><input name="nominal" type="number" value="${trx.getAmount()}"> </td>                    
                </tr>
                <tr>
                    <td>Kategori</td>
                    <td><input name="kategori" type="number"  value="${trx.getIdKategori()}"></td>                    
                </tr>
                <tr>
                    <td>Deskripsi</td>
                    <td><input name="deskripsi" type="text"  value="${trx.getDeskripsi()}"></td>
                </tr>
                <tr>
                    <td>Jenis Transaksi</td>
                    <td><input name="jenis" type="number"  value="${trx.getJenis()}"></td>                    
                </tr>
            </table>            
            <input name="idUser"  value="${trx.getIdUser()}" type="hidden">
            <input name="id"  value="${trx.getId()}" type="hidden">
            <input name="submit" type="submit" class="submit" id="loginButton" value="Submit">
            <span class="success">${messages.success}</span>
        </form>
    </body>
</html>
