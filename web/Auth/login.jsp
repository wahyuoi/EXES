<%-- 
    Document   : login
    Created on : Mar 8, 2015, 6:03:32 PM
    Author     : wahyuoi
--%>

<jsp:include page="header.jsp"></jsp:include>
    <body>
        <h1>Hello World!</h1>
        <form action="login" method="post">
            <table>               
                <tr>
                    <td>Email</td>
                    <td><input name="email" type="text" id="email"></td>
                    <td><span class="success">${messages.email}</span></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input name="password" type="password" id="password"></td>
                <td><span class="success">${messages.password}</span></td>
            </tr>
        </table>            
        <input name="submit" type="submit" class="submit" id="loginButton" value="Login">
        <span class="success">${messages.success}</span>
    </form>
    <br>
    <form action="logout" method="post">                        
        <input name="submit" type="submit" class="submit" id="loginButton" value="Logout">
        <span class="success">${messages.success}</span>
    </form>
</body>
</html>
