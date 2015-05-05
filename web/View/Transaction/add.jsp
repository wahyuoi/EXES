<%-- 
    Document   : add
    Created on : Mar 24, 2015, 9:42:32 PM
    Author     : wahyuoi
--%>

<%@include file="../navmenu.jsp" %>
<div class="row" style="padding-left: 260px;">
    <div class="col-lg-8">  
        <form action="add" method="post">                          
                <div class="form-group">
                    <label>Jenis Mata Uang</label>
                    <input class="form-control" name="matauang" type="text">                    
                </div>
                <div class="form-group">
                    <label>Nominal</label>
                    <input class="form-control" name="nominal" type="number">                    
                </div>
                <div class="form-group">
                    <label>Kategori</label>
                    <input class="form-control" name="kategori" type="number">                    
                </div>
                <div class="form-group">
                    <label>Deskripsi</label>
                    <input class="form-control" name="deskripsi" type="text">                    
                </div>
                <div class="form-group">
                    <label>Jenis Transaksi</label>
                    <input class="form-control" name="jenis" type="number">                    
                </div>
                       
            <input class="form-control" name="idUser" value="<%= request.getAttribute("idUser") %>" type="hidden">
            <input name="submit" type="submit" class=" btn btn-primary" id="loginButton" value="Submit">
            <span class="success">${messages.success}</span>
        </form>
    </div>
</div>
<%@include file="../footer.jsp" %>

