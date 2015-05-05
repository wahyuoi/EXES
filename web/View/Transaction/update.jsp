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
                    <label>Currency</label>
                    <input class="form-control" name="matauang" type="text" value="${trx.getMataUang()}">                    
                </div>
                <div class="form-group">
                    <label>Amount</label>
                    <input class="form-control" name="nominal" type="number" value="${trx.getAmount()}">                    
                </div>
                <div class="form-group">
                    <label>Category</label>
                    <input class="form-control" name="kategori" type="number" value="${trx.getIdKategori()}">                    
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <input class="form-control" name="deskripsi" type="text" value="${trx.getDeskripsi()}">                    
                </div>
                <div class="form-group">
                    <label>Type</label>
                    <input class="form-control" name="jenis" type="number" value="${trx.getJenis()}">                    
                </div>
                       
            <input name="idUser"  value="${trx.getIdUser()}" type="hidden">
            <input name="id"  value="${trx.getId()}" type="hidden">
            <input name="submit" type="submit" class=" btn btn-primary" id="loginButton" value="Submit">
            <span class="success">${messages.success}</span>
        </form>
    </div>
</div>
<%@include file="../footer.jsp" %>
