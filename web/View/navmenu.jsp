<%-- 
    Document   : navmenu
    Created on : May 6, 2015, 9:52:24 AM
    Author     : NK
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <meta name="description" content="">
        <meta name="author" content="">

        <title>EXES</title>

        <!-- Bootstrap core CSS -->
        <link href="/Exes/css/bootstrap.min.css" rel="stylesheet">

        <!-- Custom styles for this template -->
        <link href="/Exes/css/dashboard.css" rel="stylesheet">

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>

    <body>
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">EXES</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="/Exes/profile">Profile</a></li>
                        <li><a href="/Exes/logout">Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3 col-md-2 sidebar">
                    <ul class="nav nav-sidebar">
                        <li><a href="#">Transaction</a></li>
                        <li><a href="#">Reports</a></li>
                        <li><a href="#">Budgets</a></li>
                        <li><a href="#">Category</a></li>
                    </ul>
                </div>