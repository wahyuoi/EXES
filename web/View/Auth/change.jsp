<%-- 
    Document   : change
    Created on : Mar 8, 2015, 10:48:48 PM
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
        <h1>Change Password!</h1>
        <form action="change" method="post">
            <table>               
                <tr>
                    <td>Old Password</td>
                    <td><input name="oldPassword" type="password" id="oldPassword"></td>
                    <td><span class="success">${messages.oldPassword}</span></td>
                </tr>
                <tr>
                    <td>New Password</td>
                    <td><input name="newPassword" type="password" id="newPassword"></td>
                    <td><span class="success">${messages.newPassword}</span></td>
                </tr>
                <tr>
                    <td>Retype New Password</td>
                    <td><input name="confirmPassword" type="password" id="confirmPassword"></td>
                    <td><span class="success">${messages.confirmPassword}</span></td>
                </tr>
            </table>            
            <input name="submit" type="submit" class="submit" id="loginButton" value="Change">
            <span class="success">${messages.success}</span>
        </form>
    </body>
</html>
