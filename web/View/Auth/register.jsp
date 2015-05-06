<%-- 
    Document   : register
    Created on : Feb 27, 2015, 10:25:17 PM
    Author     : wahyuoi
--%>
<jsp:include page="../frontheader.jsp"></jsp:include>

<header>
    <div class="header-content">
        <div class="header-content-inner">
            <h2>SIGN UP</h2>
            <hr>
            <form action="register" method="post">
                <div style="padding-left:300px;padding-right: 300px;">
                    <div class="form-group">
                        <div class="input-group"> <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                            <input name="name" type="text" id="name" class="form-control" placeholder="Name" required>
                            <span class="success">${messages.name}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group"> <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></span>
                            <input name="email" type="text" id="email" class="form-control" placeholder="Email" required>
                            <span class="success">${messages.email}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group"> <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                            <input type="password" class="form-control" name="password" id="password" placeholder="Password" required >
                            <span class="success">${messages.password}</span>
                        </div>
                    </div>
                    <!--    
                    <div class="form-group">
                        <div class="input-group"> <span class="input-group-addon"><span class="glyphicon glyphicon-resize-vertical"></span></span>
                            <input type="password" class="form-control" name="confirm" id="confirm" placeholder="Confirm Password" required>
                        </div>
                    </div>
                    -->
                    <input name="submit" type="submit" id="loginButton" value="Login" class="btn btn-default">
                    <span class="success">${messages.success}</span>
                </div>
            </form>
        </div>
    </div>
</header>
<!--
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
-->
</html>
