<%-- 
    Document   : profile.jsp
    Created on : May 4, 2015, 1:23:46 PM
    Author     : givana.sandita
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="navmenu.jsp" %>
<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Profile</h1>    
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th width="150px;"></th>
                    <th></th>
                    <th width="40px;"></th>
                </tr>
            </thead>
            <% Controller.User userCon = new Controller.User();
                POJO.User user = (POJO.User) userCon.getUser(request.getCookies());
                String email = user.getEmail();
                String token = user.getToken();
            %>
            <tbody>                                
                <tr>
                    <td><label>Email</label></td>
                    <td colspan="2"><input type="text" class="form-control" placeholder="<%= email %>" readonly></td>
                </tr>
                <tr>
                    <td><label>Password</label></td>
                    <td><input type="text" class="form-control" placeholder="*****" readonly></td>
                    <td><a data-toggle="modal" href="#reset"  class="btn btn-default"><span class="glyphicon glyphicon-pencil"></span></a></td>
                </tr>
                <tr>
                    <td><label>Token</label></td>
                    <td><%= token %></td>
                    <td><div align="right"><a href="/change/token"  class="btn btn-info" ><i class="fa fa-warning"></i> Change Token</a></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <span class="alert alert-success" role="alert">${messages.success}</span>
                        <span class="alert alert-danger" role="alert">${messages.oldPassword}</span>
                        <span class="alert alert-danger" role="alert">${messages.newPassword}</span>
                        <span class="alert alert-danger" role="alert">${messages.confirmPassword}</span>
                    </td>
                    <td>
                        <input class="form-control" name="idUser" value="<%= request.getAttribute("idUser")%>" type="hidden">
                        <div align="right"><a data-toggle="modal" href="#delete"  class="btn btn-danger" ><i class="fa fa-warning"></i> Delete Account</a></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Modal -->
    <form action="profile" role="form" method="post">   
        <input type="hidden" value="delete" name="act">
        <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="delete" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title"> Are you sure?</h4>
                    </div>
                    <div class="modal-body">
                        You are going to delete your account. All the data associated with your account will be lost forever. Continue?
                    </div>
                    <div class="modal-footer">
                        <button data-dismiss="modal" class="btn btn-primary" type="button">Cancel</button>
                        <input type="submit" class="btn btn-default" value="Yes">
                    </div>
                </div>
            </div>
        </div>
    </form>
    <!-- modal -->

    <!-- Modal -->
    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="reset" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">Reset Password</h4>
                </div>
                <form action="change" method="post" style="padding-left:20px;padding-right:20px;">
                    <div class="modal-body">
                        <input name="oldPassword" type="password" class="form-control" placeholder="Old Password"></br>
                        <input name="newPassword" type="password" class="form-control" placeholder="New Password"></br>
                        <input name="confirmPassword" type="password" class="form-control" placeholder="Retype New Password">
                    </div>
                    <div class="modal-footer">
                        <button data-dismiss="modal" class="btn btn-default" type="button">Cancel</button>
                        <input class="btn btn-primary" type="submit" value="Save">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- modal -->
</div>

<%@include file="footer.jsp" %>
