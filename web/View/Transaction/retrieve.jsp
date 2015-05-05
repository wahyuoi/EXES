<%-- 
    Document   : retrieve
    Created on : Mar 31, 2015, 6:57:05 PM
    Author     : wahyuoi
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@include file="../navmenu.jsp" %>
<%
    ArrayList<Object> list = (ArrayList<Object>) request.getAttribute("list");
%>       
<div class="row" style="padding-left: 260px;">
    <div class="col-lg-12">        
        <div class="panel panel-default">
            <div class="panel-heading">
                <div class="col-md-3">
                    <h4>Transaction History </h4>
                </div>
                <div class="col-md-offset-10">
                    <a href="/Exes/transaction/add"><div class="btn btn-primary">Add New</div></a>
                </div>                  
            </div>
            <!-- /.panel-heading -->
            <div class="panel-body">
                <div class="dataTable_wrapper">
                    <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                        <tr>
                            <td>No</td>
                            <td>Date</td>
                            <td>Description</td>
                            <td>Currency</td>
                            <td>Amount</td>
                            <td>Type</td>
                            <td>Category</td>
                            <td>Delete</td>
                            <td>Edit</td>
                        </tr>
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
                            <td><a href="/Exes/transaction/delete?id=<%= trx.getId()%>">Delete</a></td>
                            <td><a href="/Exes/transaction/update?id=<%= trx.getId()%>">Edit</a></td>
                        </tr>

                        <%
                            }
                        %>
                    </table>  
                </div>
                <!-- /.table-responsive -->
            </div>
            <!-- /.panel-body -->
        </div>
        <!-- /.panel -->
    </div>
    <!-- /.col-lg-12 -->
</div>

<%@include file="../footer.jsp" %>
