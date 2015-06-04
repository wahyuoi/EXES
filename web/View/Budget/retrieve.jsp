<%-- 
    Document   : retrieve
    Created on : May 6, 2015, 12:36:49 PM
    Author     : NK
--%>

<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<link rel="stylesheet" href="/css/core.css">
<link rel="stylesheet" href="/css/freebirdApp.css">
<script type="text/javascript" src="/js/freebirdApp.js"></script>
<%@include file="../navmenu.jsp" %>
<% 
    List<Object> cats = (List<Object>) request.getAttribute("cats");    
%>
<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Budgets</h1>
    <a href="/budget/add"  class="btn btn-default"><span class="glyphicon glyphicon-pencil"></span> &nbsp Edit</a>
    <div class="UIBudgetChart">
        <div class="budgetListContainer">
            <div autodelegate="false" class="block tttPadding" notify="page-reload">
                <div class="budgetContainer limitOrange">
                    <div class="budgetName">Overall</div>
                    <div>
                        <div class="lF">
                            <div class="noWrap spentAmount layerDetail2 smallFont">SPENT&nbsp;<%= (request.getAttribute("trx-1")!=null)?request.getAttribute("trx-1"):"0" %></div>
                        </div>
                        <div class="rF">
                            <div class="noWrap leftAmount layerDetail2 smallFont"><%= (request.getAttribute("left-1") != null)?(request.getAttribute("left-1"))+" LEFT":"No Budget" %></div>
                        </div>
                        <div class="cF"></div>
                    </div>
                    <div class="progressBarContainer">
                        <div class="UIProgressBar orange UIBudgetProgressBar">
                            <div class="outer">
                                <div class="inner" style="width: <%= request.getAttribute("persen-1") %>%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                            
            <% for(Object o : cats) { 
                POJO.Category cat = (POJO.Category) o;
                if (cat.getJenis() == 0) continue;
                int idc = cat.getId();
            %>
                        
            <div autodelegate="false" class="block tttPadding" notify="page-reload">
                <div class="budgetContainer limitGreen">
                    <div class="budgetName"><%= cat.getNama() %></div>
                    <div>
                        <div class="lF">
                            <div class="noWrap spentAmount layerDetail2 smallFont">SPENT&nbsp;<%= request.getAttribute("trx"+idc) %></div>                            
                        </div>
                        <div class="rF">
                            <div class="noWrap leftAmount layerDetail2 smallFont"><%= (null==request.getAttribute("left"+idc))?"No Limit":request.getAttribute("left"+idc)+" LEFT" %></div>
                        </div>
                        <div class="cF"></div>
                    </div>
                    <div class="progressBarContainer">
                        <div class="UIProgressBar green UIBudgetProgressBar">
                            <div class="outer"><div class="inner" style="width: <%= (null==request.getAttribute("left"+idc))?"100":request.getAttribute("persen"+idc) %>%;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <% } %>
            
            <div class="marker layerDetail today" style="left: <%= request.getAttribute("today") %>%">
                <div class="markerLabel smallerFont">TODAY</div>                
            </div>
        </div>
    </div>
</div>
<%@include file="../footer.jsp" %>
