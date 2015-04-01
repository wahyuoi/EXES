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
        <title>Add Transaction</title>
    </head>
    <body>
        <form action="add" method="post">
            <table>               
                <tr>
                    <td>Jenis Mata Uang</td>
                    <td><input name="matauang" type="text"></td>                    
                </tr>
                <tr>
                    <td>Nominal</td>
                    <td><input name="nominal" type="number"></td>                    
                </tr>
                <tr>
                    <td>Kategori</td>
                    <td><input name="kategori" type="number"></td>                    
                </tr>
                <tr>
                    <td>Deskripsi</td>
                    <td><input name="deskripsi" type="text"></td>                    
                </tr>
                <tr>
                    <td>Jenis Transaksi</td>
                    <td><input name="jenis" type="number"></td>                    
                </tr>
            </table>            
            <input name="idUser" value="<%= request.getAttribute("idUser") %>" type="hidden">
            <input name="submit" type="submit" class="submit" id="loginButton" value="Submit">
            <span class="success">${messages.success}</span>
        </form>
    </body>
</html>
