<%-- 
    Document   : retrieve
    Created on : Mar 31, 2015, 6:57:05 PM
    Author     : wahyuoi
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
    ArrayList<Object> list = (ArrayList<Object>) request.getAttribute("list");    
%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Retrieve</title>
    </head>
    <body>        
        <table>
            <tr>
                <td>No</td>
                <td>Tanggal Transaksi</td>
                <td>Deskripsi</td>
                <td>Mata Uang</td>
                <td>Nominal</td>
                <td>Jenis Transaksi</td>
                <td>Kategori</td>
            </tr>
        <%  for(int ii=0; ii<list.size(); ++ii){
                POJO.Transaction trx = (POJO.Transaction) list.get(ii);
        %>
                <tr>
                    <td><%= ii + 1 %></td>
                    <td><%= trx.getTglTransaksi() %></td>
                    <td><%= trx.getDeskripsi() %></td>
                    <td><%= trx.getMataUang() %></td>
                    <td><%= trx.getAmount()%></td>
                    <td><%= trx.getJenis()%></td>
                    <td><%= trx.getIdKategori()%></td>
                    <td><a href="transaction/delete?id=<%= trx.getId() %>">Delete</a></td>
                </tr>
        
        <%
            }
        %>
        </table>
    </body>
</html>
