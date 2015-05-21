<%-- 
    Document   : retrieve
    Created on : May 6, 2015, 12:36:49 PM
    Author     : NK
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<link rel="stylesheet" href="/css/core.css">
<link rel="stylesheet" href="/css/freebirdApp.css">
<script type="text/javascript" src="/js/freebirdApp.js"></script>
<%@include file="../navmenu.jsp" %>

<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Budgets</h1>
    <a href="update.jsp"  class="btn btn-default"><span class="glyphicon glyphicon-pencil"></span> &nbsp Edit</a>
    <div class="UIBudgetChart">
        <div class="budgetListContainer">
            <div autodelegate="false" class="block tttPadding" notify="page-reload">
                <div class="budgetContainer limitOrange">
                    <div class="budgetName">Overall</div>
                    <div>
                        <div class="lF">
                            <div class="noWrap spentAmount layerDetail2 smallFont">SPENT&nbsp;1,234.00</div>
                        </div>
                        <div class="rF">
                            <div class="noWrap leftAmount layerDetail2 smallFont">2,018.00&nbsp;LEFT</div>
                        </div>
                        <div class="cF"></div>
                    </div>
                    <div class="progressBarContainer">
                        <div class="UIProgressBar orange UIBudgetProgressBar">
                            <div class="outer">
                                <div class="inner" style="width: 37.95%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div autodelegate="false" class="block tttPadding" notify="page-reload">
                <div class="budgetContainer limitGreen">
                    <div class="budgetName">Food</div>
                    <div>
                        <div class="lF">
                            <div class="noWrap spentAmount layerDetail2 smallFont">SPENT&nbsp;0.00</div>                            
                        </div>
                        <div class="rF">
                            <div class="noWrap leftAmount layerDetail2 smallFont">33.00&nbsp;LEFT</div>
                        </div>
                        <div class="cF"></div>
                    </div>
                    <div class="progressBarContainer">
                        <div class="UIProgressBar green UIBudgetProgressBar">
                            <div class="outer"><div class="inner" style="width: 0%;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div autodelegate="false" class="block tttPadding" notify="page-reload">
                <div class="budgetContainer limitGreen">
                    <div class="budgetName">Entertainment</div>
                    <div>
                        <div class="lF">
                            <div class="noWrap spentAmount layerDetail2 smallFont">SPENT&nbsp;0.00</div>
                        </div>
                        <div class="rF">
                            <div class="noWrap leftAmount layerDetail2 smallFont">20.00&nbsp;LEFT</div>
                        </div>
                        <div class="cF"></div>
                    </div>
                    <div class="progressBarContainer">
                        <div class="UIProgressBar green UIBudgetProgressBar">
                            <div class="outer">
                                <div class="inner" style="width: 0%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div autodelegate="false" class="block tttPadding" notify="page-reload">
                <div class="budgetContainer limitGreen">
                    <div class="budgetName">Transportation</div>
                    <div>
                        <div class="lF">
                            <div class="noWrap spentAmount layerDetail2 smallFont">SPENT&nbsp;0.00</div>
                        </div>
                        <div class="rF">
                            <div class="noWrap leftAmount layerDetail2 smallFont">32.00&nbsp;LEFT</div>
                        </div>
                        <div class="cF"></div>
                    </div>
                    <div class="progressBarContainer">
                        <div class="UIProgressBar green UIBudgetProgressBar">
                            <div class="outer">
                                <div class="inner" style="width: 0%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="UIBudgetPeriod">
                <div class="periodDescriptionContainer">
                    <div class="lF">MAY</div>
                    <div class="rF">MAY</div>
                    <div class="cF"></div>                    
                </div>
                <table cellspacing="0" cellpadding="0" class="UIGrid fullWidth dateListContainer">
                    <tr>
                        <td class="firstRow firstColumn lastRow">
                            <div class="tickContainer">01</div>
                        </td>
                        <td class="firstRow lastRow">
                            <div class="tickContainer">04</div>
                        </td>
                        <td class="firstRow lastRow">
                            <div class="tickContainer">07</div>
                        </td>
                        <td class="firstRow lastRow">
                            <div class="tickContainer">10</div>
                        </td>
                        <td class="firstRow lastRow">
                            <div class="tickContainer">13</div>
                        </td>
                        <td class="firstRow lastRow">
                            <div class="tickContainer">16</div>
                        </td>
                        <td class="firstRow lastRow">
                            <div class="tickContainer">19</div>
                        </td>
                        <td class="firstRow lastRow">
                            <div class="tickContainer">22</div>
                        </td>
                        <td class="firstRow lastRow">
                            <div class="tickContainer">25</div>
                        </td>
                        <td class="firstRow lastRow">
                            <div class="tickContainer">28</div>
                        </td>
                        <td class="firstRow lastColumn lastRow">
                            <div class="tickContainer">31</div>
                        </td>
                    </tr>
                </table>                
            </div>
            <div class="marker layerDetail today" style="left: 19%">
                <div class="markerLabel smallerFont">TODAY</div>                
            </div>
        </div>
    </div>
</div>
<%@include file="../footer.jsp" %>
