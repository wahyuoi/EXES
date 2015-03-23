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
        for(Cookie cook: cookies){
            if ("EMAIL".equals(cook.getName())){
                email = cook.getValue();
            }
        }
        if (null == email) email = "";
    %>
    <h1>Hello World! <%= email %> -- </h1>
        
</body>
</html>
