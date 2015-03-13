<%-- 
    Document   : resetForm
    Created on : Mar 9, 2015, 1:18:13 PM
    Author     : wahyuoi
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Reset Form</h1>
        <form action="reset" method="post">
            <table>                               
                <tr>
                    <td>Enter Your New Password</td>
                    <td><input name="newPassword" type="password" id="newPassword"></td>
                    <td><span class="success">${messages.newPassword}</span></td>
                </tr>
                <tr>
                    <td>Re-enter Your Email Address</td>
                    <td><input name="confirmPassword" type="password" id="confirmPassword"></td>
                    <td><span class="success">${messages.confirmPassword}</span></td>
                </tr>
            </table>   
                <input name="id" type="hidden" value=${messages.id}>
                <input name="token" type="hidden" value=${messages.token}>
            <input name="submit" type="submit" class="submit" id="loginButton" value="Save">
            <span class="success">${messages.success}</span>
        </form>
    </body>
</html>
