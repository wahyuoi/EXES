<%-- 
    Document   : profile.jsp
    Created on : May 4, 2015, 1:23:46 PM
    Author     : givana.sandita
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="navmenu.jsp" %>

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Profile</h1>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-body">

                    <div class="col-lg-12">                                                 

                        <div class="col-lg-5">
                            <div class="form-group">
                                <label> Username</label>
                                <input type="text" class="form-control" placeholder="Andi" readonly>
                            </div>
                            <div class="form-group">
                                <label> Email</label>
                                <input type="text" class="form-control" placeholder="Andi@gmail.com" readonly>
                            </div>

                            <div class="form-group">
                                <table>
                                    <th width="300"></th><th width="100"></th>
                                    <tr>
                                        <td colspan="2">
                                            <label> Password </label>
                                        </td>
                                    </tr> 
                                    <tr>
                                        <td >
                                            <input type="text" class="form-control" placeholder="*****" readonly>

                                        </td><td align="center">
                                            <a data-toggle="modal" href="#reset"  class="btn btn-default btn-circle" ><i class="fa fa-pencil"></i></a>                                                
                                        </td>
                                    </tr>                                        
                                    <tr> <td>
                                            <br/>
                                            <span class="success">${messages.oldPassword}</span>
                                            <span class="success">${messages.newPassword}</span>
                                            <span class="success">${messages.confirmPassword}</span>
                                            <span class="success">${messages.success}</span>
                                            <br>
                                        </td> 
                                    </tr> 
                                    <tr> 
                                        <td>      
                                            <a data-toggle="modal" href="#delete"  class="btn btn-danger" ><i class="fa fa-warning"></i> Delete Account</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <form action="profile" role="form" method="post">   
                                <input type="hidden" value="delete" name="act">
                                <!-- Modal -->
                                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="delete" class="modal fade">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                <h4 class="modal-title"><i class="fa fa-warning"></i> &nbsp&nbsp&nbsp Are you sure?</h4>
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
                                <!-- modal -->
                            </form>
                        </div>

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
                                            <input name="oldPassword" type="password" class="form-control" placeholder="Old Password">
                                            <input name="newPassword" type="password" class="form-control" placeholder="New Password">
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
                    <!-- /.col-lg-6 (nested) -->

                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->



</div>
<!-- /#page-wrapper -->

<%@include file="footer.jsp" %>