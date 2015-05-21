<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="../navmenu.jsp" %>
<%@page import="java.util.ArrayList"%>
<% ArrayList<Object> list = (ArrayList<Object>) request.getAttribute("list"); %>

<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Categories</h1>
    <div class="table-responsive">
        <form action="add" method="post">
            <a href="category/add"><div class="btn btn-primary">Add Category</div></a>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <% for(Object o : list){
                        POJO.Category cat = (POJO.Category)o;
                        String jenis = (cat.getJenis()==1)?"Expense":"Income";
                    %>
                    <tr>
                        <td><%= jenis %></td>
                        <td><%= cat.getNama() %></td>
                        <td><a href="/category/update?id=<%=cat.getId()%>"><span class="glyphicon  glyphicon-pencil"></span></a></td>
                        <td><a href="/category/delete?id=<%=cat.getId()%>"><span class="glyphicon glyphicon-remove"></span></a></td>
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
