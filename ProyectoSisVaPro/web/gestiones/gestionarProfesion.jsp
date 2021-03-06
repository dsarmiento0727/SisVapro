<%-- 
    Document   : profesion
    Created on : 10-06-2017, 06:09:47 PM
    Author     : carlos
--%>

<%@page import="com.modelo.CrudProfesion"%>
<%@page import="com.modelo.Profesion"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="../CSS/style.css">
        <link rel="stylesheet" type="text/css" href="CSS/style.css">
        <title>Gestionar Profesión</title>
        <script src="../JavaScript/Procesos.js"></script>
    </head>
    <%
    CrudProfesion crud=new CrudProfesion();
    %>
    <body>
         <jsp:include page="navGestiones.jsp" />
        <center>
        <div class="p-3 mb-2 bg-light text-black"><h1>Registro de Profesión</h1></div>
        <br><br>
        <table>
            <div class="container">
            <form action="../procesarProfesion" method="POST" name="frmProfesion">
                <div class="form-group row">
                    <label for="idprofesion" class="col-sm-2 col-form-label">Id Profesión</label>
                <div class="col-sm-3">
                    <input type="text" class="form-control" id="txtIdProfesion" name="txtIdProfesion"placeholder="Id Profesion">
                </div>
                </div>
                <div class="form-group row">
                    <label for="nombreprofesion" class="col-sm-2 col-form-label">Profesion</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="txtNombre" name="txtNombre"placeholder="Profesion">
                </div>
                </div> 
                
                <tr>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <td colspan="2">
                        
                            <input type="submit" name="btnInsertar" class="btn btn-success" value="Insertar">
                            <input type="submit" name="btnModificar" class="btn btn-warning" value="Modificar" onclick="Modificar()">
                            <input type="submit" name="btnEliminar"  class="btn btn-danger" value="Eliminar" onclick="Eliminar()">
                            <input type="reset" name="btnLimpiar" class="btn btn-secondary" value="Limpiar">
                        </div>
                    </td>
                </tr>
            </form>
        </table>
        <br>
        <table class="table table-bordered" style="text-align: center; width: 1200px">
            <thead class="thead-inverse">
                <tr>
                    <th style="text-align: center">Id Profesión</th>
                    <th style="text-align: center">Profesión</th>
                    <th style="text-align: center">Seleccionar</th>
                </tr>
            </thead>
            <tbody>
                <%
                    List<Profesion> lst=crud.mostrarProfesion();
                    for(Profesion pro:lst){
                %>
                <tr class="table-primary">
                    <td><%=pro.getIdProfesion()%></td>
                    <td><%=pro.getNombreProfesion()%></td>
                    <td><a href="javascript:cargarProfesion(<%=pro.getIdProfesion()%>,
                           '<%=pro.getNombreProfesion()%>')">Seleccionar</a></td>
                </tr>
                <%
                    }
                %>
            </tbody>
        </table>
    </body>
</html>
