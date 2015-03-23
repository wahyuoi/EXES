<%-- 
    Document   : index
    Created on : Feb 27, 2015, 10:23:52 PM
    Author     : wahyuoi
--%>

<jsp:include page="header.jsp"></jsp:include>
<body>
    <% 
        Cookie[] cookies = request.getCookies();
        String email = null;
        String result = null;
        for(Cookie cook: cookies){
            if ("EMAIL".equals(cook.getName())){
                email = cook.getValue();
            }
        }
        if (null == email) email = "";
    %>
        <%-- start web service invocation --%><hr/>
    <%
    try {
	Auth.Client.AuthWS_Service service = new Auth.Client.AuthWS_Service();
	Auth.Client.AuthWS port = service.getAuthWSPort();
	 // TODO initialize WS operation arguments here
	email = "gedewahyu.ap@gmail.com";
	String password = "asd";
	// TODO process result here
	result = port.login(email, password);	
    } catch (Exception ex) {
	// TODO handle custom exceptions here
    }
    %>
    <%-- end web service invocation --%><hr/>
    <h1>Hello World! <%= email  + result%> -- </h1>

    
        
</body>
</html>
