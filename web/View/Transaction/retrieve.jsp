<%-- 
    Document   : retrieve
    Created on : May 6, 2015, 11:00:54 AM
    Author     : NK
--%>

<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="../navmenu.jsp" %>
<%
    ArrayList<Object> list = (ArrayList<Object>) request.getAttribute("list");
%>    

<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Transaction History</h1>
    <div class="table-responsive">
        <form action="add" method="post">
            <a href="/transaction/add"><div class="btn btn-primary">Add New</div></a>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Currency</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Category</th>                        
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <%  for (int ii = 0; ii < list.size(); ++ii) {
                            POJO.Transaction trx = (POJO.Transaction) list.get(ii);
                    %>
                    <tr>
                        <td><%= ii + 1%></td>
                        <td><%= trx.getTglTransaksi()%></td>
                        <td><%= trx.getDeskripsi()%></td>
                        <td><%= trx.getMataUang()%></td>
                        <td><%= trx.getAmount()%></td>
                        <td><%= trx.getJenis()%></td>
                        <td><%= trx.getIdKategori()%></td>
                        <td><a href="/transaction/update?id=<%= trx.getId()%>"><span class="glyphicon glyphicon-pencil"></span></a></td>
                        <td><a href="/transaction/delete?id=<%= trx.getId()%>"><span class="glyphicon glyphicon-remove"></span></a></td>
                    </tr>
                    <%
                        }
                    %>
                </tbody>
            </table>
        </form>
    </div>
</div>

<%@include file="../footer.jsp" %>
