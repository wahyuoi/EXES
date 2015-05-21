<%-- 
    Document   : login
    Created on : Mar 8, 2015, 6:03:32 PM
    Author     : wahyuoi
--%>

<jsp:include page="../frontheader.jsp"></jsp:include>
<header>
    <div class="header-content">
        <div class="header-content-inner">
            <h2>LOGIN</h2>
            <hr>
            <div style="padding-left:300px;padding-right: 300px;">
                <form action="/login" method="post">
                    <div class="form-group">
                        <div class="input-group"> <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                            <input class="form-control" placeholder="Email" name="email" type="text" id="email" required autofocus="">
                            <span class="success">${messages.email}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group"> <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                            <input type="password" class="form-control" name="password" id="password" placeholder="Password" required >
                            <span class="success">${messages.password}</span>
                        </div>
                    </div>
                    <span class="pull-right">
                        <a href="/reset"> Forgot Password?</a>
                    </span>
                    <br>
                    <input class="btn btn-default" name="submit" type="submit" id="loginButton" value="Login">
                    <br>
                    <span class="success">${messages.error}</span>
                </form>
            </div>     
        </div>
    </div>
</header>
<!--
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
</body>-->
</html>
