<%-- 
    Document   : reset
    Created on : Mar 9, 2015, 11:46:32 AM
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
        <h1>Hello World!</h1>
        <form action="reset" method="post">
            <table>                               
                <tr>
                    <td>Enter Your Email Address</td>
                    <td><input name="email" type="text" id="email"></td>
                    <td><span class="success">${messages.email}</span></td>
                </tr>
            </table>            
            <input name="submit" type="submit" class="submit" id="loginButton" value="Reset">
            <span class="success">${messages.success}</span>
        </form>
    </body>
</html>
