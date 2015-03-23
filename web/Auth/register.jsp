<%-- 
    Document   : register
    Created on : Feb 27, 2015, 10:25:17 PM
    Author     : wahyuoi
--%>
<jsp:include page="../header.jsp"></jsp:include>
    <body>
        <h1>Hello World!</h1>
        <form action="register" method="post">
            <table>
                <tr>
                    <td>Nama</td>
                    <td><input name="name" type="text" id="name"></td>
                    <td><span class="success">${messages.name}</span></td>
            </tr>
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
</body>
</html>
