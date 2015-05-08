<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="../navmenu.jsp" %>
<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Categories</h1>
    <div class="table-responsive">
        <form action="add" method="post">
            <a href="add.jsp"><div class="btn btn-primary">Add Category</div></a>
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
                    <tr>
                        <td>Expense</td>
                        <td>Food</td>
                        <td><a href="update.jsp"><span class="glyphicon glyphicon-pencil"></span></a></td>
                        <td><a href="#"><span class="glyphicon glyphicon-remove"></span></a></td>
                    </tr>
                    <tr>
                        <td>Expense</td>
                        <td>Transportation</td>
                        <td><a href="update.jsp"><span class="glyphicon glyphicon-pencil"></span></a></td>
                        <td><a href="#"><span class="glyphicon glyphicon-remove"></span></a></td>
                    </tr>
                    <tr>
                        <td>Income</td>
                        <td>Salary</td>
                        <td><a href="update.jsp"><span class="glyphicon glyphicon-pencil"></span></a></td>
                        <td><a href="#"><span class="glyphicon glyphicon-remove"></span></a></td>
                    </tr>
                    <tr>
                        <td>Income</td>
                        <td>Invest</td>
                        <td><a href="update.jsp"><span class="glyphicon glyphicon-pencil"></span></a></td>
                        <td><a href="#"><span class="glyphicon glyphicon-remove"></span></a></td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
</div>

<%@include file="../footer.jsp" %>
