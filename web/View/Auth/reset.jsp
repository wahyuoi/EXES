<%-- 
    Document   : reset
    Created on : Mar 9, 2015, 11:46:32 AM
    Author     : wahyuoi
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="../frontheader.jsp" %>

<header>
    <div class="header-content">
        <div class="header-content-inner">
            <h2>RESET PASSWORD</h2>
            <hr>

            <p>Enter your email address below to reset your password.</p>
            <form method="post" action="/reset">
                <div style="padding-left:280px;padding-right: 280px;">
                    <input type="text" name="email" placeholder="Email" autocomplete="off" class="form-control">
                </div>
                <div style="padding-left:280px;padding-right: 280px;">
                    <div class="modal-footer">                        
                        <input name="submit" type="submit" class="btn btn-default" value="Reset Password">
                         <span class="success">${messages.success}</span>
                    </div>
                </div>
            </form>
        </div>
    </div>
</header>
