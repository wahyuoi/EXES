<%-- 
    Document   : resetForm
    Created on : Mar 9, 2015, 1:18:13 PM
    Author     : wahyuoi
--%>

<jsp:include page="../frontheader.jsp"></jsp:include>

<header>
    <div class="header-content">
        <div class="header-content-inner">
            <h2>RESET PASSWORD</h2>
            <hr>
            <form action="reset" method="post">
                <div style="padding-left:300px;padding-right: 300px;">
                    <div class="form-group">
                        <div class="input-group"> <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                            <input name="newPassword" type="password" id="newPassword" class="form-control" placeholder="Password" required>
                            <span class="success">${messages.newPassword}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group"> <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></span>
                            <input name="confirmPassword" type="password" id="confirmPassword" class="form-control" placeholder="Confirm Password" required>
                            <span class="success">${messages.confirmPassword}</span>
                        </div>
                    </div>                    
                    
                    <input name="id" type="hidden" value=${messages.id}/>
                    <input name="token" type="hidden" value=${messages.token}/>
                    <input name="submit" type="submit" id="loginButton" value="Reset" class="btn btn-default">
                    <span class="success">${messages.success}</span>
                </div>
            </form>
        </div>
    </div>
</header>
                    