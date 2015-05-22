<%-- 
    Document   : add
    Created on : May 6, 2015, 12:21:44 PM
    Author     : NK
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@include file="../navmenu.jsp" %>
<!--<script language="javascript">
    $(document).ready(function(){
        $('#add').click(function() {
            //var row = $("<tr><td><input class="form-control" name="kategori" type"number" placeholder="Category"></td><td><input class="form-control" name="limit" type="number" placeholder="Amount"></td><td><select class="selectpicker" name="siklus"><option value="1">per Week</option><option value="2">per Month</option><option value="3">per Year</option></select></td><td><div class="checkbox"><label><input type="checkbox" name="rollover" value="1"> Rollover</label></div></td></tr>");
            $('#dataTable').append("<tr><td><input class="form-control" name="kategori" type"number" placeholder="Category"></td><td><input class="form-control" name="limit" type="number" placeholder="Amount"></td><td><select class="selectpicker" name="siklus"><option value="1">per Week</option><option value="2">per Month</option><option value="3">per Year</option></select></td><td><div class="checkbox"><label><input type="checkbox" name="rollover" value="1"> Rollover</label></div></td></tr>");
        }
    }
</script>-->
<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Add Transaction</h1>
    <div class="table-responsive">
        <form action="add" method="post">
            <table class="table" id="dataTable">
                <thead>
                    <tr>
                        <th width="200px"></th>
                        <th></th>
                        <th width="200px"></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label>Overall Spending Limit</label></td>
                        <td><input class="form-control" name="limit" type="number" placeholder="Amount"></td>
                        <td>
                            <input class="form-control" name="kategori" type="hidden" value="-1">                            
                            <select class="selectpicker" name="siklus">
                                <option value="1">per Week</option>
                                <option value="2">per Month</option>
                                <option value="3">per Year</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4"><label>Spending Limit per Category</label></td>
                    </tr>                    
                    <tr>
                        <td><input class="form-control" name="kategori" type="number" placeholder="Category"></td>
                        <td><input class="form-control" name="limit" type="number" placeholder="Amount"></td>
                        <td>
                            <select class="selectpicker" name="siklus">
                                <option value="1">per Week</option>
                                <option value="2">per Month</option>
                                <option value="3">per Year</option>
                            </select>
                        </td>
                        <td>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="rollover" value="2"> Rollover
                                </label>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="button" class=" btn btn-default" onclick="addRow('dataTable')" id="add" style="margin-left: 10px;">Add Another Budget</button>
            <input name="submit" type="submit" class=" btn btn-primary" id="loginButton" value="Save Budget" style="margin-left: 10px;">
        </form>
    </div>
</div>

<%@include file="../footer.jsp" %>
<script language="javascript">
    function addRow(tableID) {
        var table = document.getElementById(tableID);
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(0);
        var element1 = document.createElement("input");
        element1.className="form-control";
        element1.type = "text";
        element1.name = "kategori";
        element1.placeholder = "Category";
        cell1.appendChild(element1);
        
        var cell2 = row.insertCell(1);
        var element2 = document.createElement("input");
        element2.className="form-control";
        element2.type = "number";
        element2.name = "limit";
        element2.placeholder = "Amount";
        cell2.appendChild(element2);
        
        var cell3 = row.insertCell(2);
        var element2 = document.createElement("select");
        element2.className="selectpicker";
        element2.type = "text";
        element2.name = "siklus";
        
        var option = document.createElement("option");
        option.text = "per Week";
        option.value = "1";
        element2.add(option);
        var option2 = document.createElement("option");
        option2.text = "per Month";
        option2.value = "2";
        element2.add(option2);
        var option3 = document.createElement("option");
        option3.text = "per Year";
        option3.value = "3";
        element2.add(option3);
        
        cell3.appendChild(element2);
        
        var cell2 = row.insertCell(3);
        var element5 = document.createElement("div");
        var element4 = document.createElement("label");
        var element3 = document.createElement("input");
        element3.type = "checkbox";
        element3.name = "rollover";
        element4.appendChild(element3);
        element4.innerHTML += " Rollover";
        element5.className = "checkbox";
        element5.appendChild(element4);
        cell2.appendChild(element5);
        
        $('.selectpicker').selectpicker();

    }
</script>