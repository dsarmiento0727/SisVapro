/* 
 * 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */function cargarTipoUsuario(id,nivel){
    document.frmTipoUsuario.txtIdTipoU.value=id;

    document.frmTipoUsuario.txtNivel.value=nivel;
}
function cargarPais(id,nombre){
    document.frmPais.txtIdPais.value=id;
    document.frmPais.txtNombre.value=nombre;
}
function cargarDepartamento(id,nombre){
    document.frmDepartamento.txtIdDepartamento.value=id;
    document.frmDepartamento.txtNombre.value=nombre;
}
function cargarMunicipio(id,nombre){
    document.frmMunicipio.txtIdMunicipio.value=id;
    document.frmMunicipio.txtNombre.value=nombre;
}
function cargarArea(id,nombre){
    document.frmArea.txtIdArea.value=id;
    document.frmArea.txtNombre.value=nombre;
}
function cargarEmpresa(id,nombre,razon,nit,direccion,pais, depa,logo,pagina,sector){
    document.frmEmpresa.txtIdEmpresa.value=id;
    document.frmEmpresa.txtNombre.value=nombre;
    document.frmEmpresa.txtRazon.value=razon;
    document.frmEmpresa.txtNit.value=nit;
    document.frmEmpresa.txtDireccion.value=direccion;
    document.frmEmpresa.lstPais.value=pais;
    document.frmEmpresa.lstDepartamento.value=depa; 
    document.frmEmpresa.logo.value=logo;
    document.frmEmpresa.txtPagina.value=pagina;
    document.frmEmpresa.lstSector.value=sector;
}
function cargarIdioma(id,nombre){
    document.frmIdioma.txtIdIdioma.value=id;
    document.frmIdioma.txtNombre.value=nombre;
}
function cargarMunicipio(id,nombre){
    document.frmMunicipio.txtIdMunicipio.value=id;
    document.frmMunicipio.txtNombre.value=nombre;
}
function cargarHabilidad(id,nombre){
    document.frmHabilidad.txtIdHabilidad.value=id;
    document.frmHabilidad.txtNombre.value=nombre;
}
function cargarAreaProfesional(id,nombre){
    document.frmProfesion.txtIdProfesion.value=id;
    document.frmProfesion.txtNombre.value=nombre;
}
function cargarRanking(id,clasi,usuario){
    document.frmRanking.txtIdRanking.value=id;
    document.frmRanking.txtClasificacion.value=clasi;
    document.frmRanking.lstUsuario.value=usuario;
}
function cargarExperienciaLaboral(id,empresa,jefe,telefono,puesto,desde, hasta,tipo){
    document.frmExperienciaLaboral.txtIdExperienciaLaboral.value=id;
    document.frmExperienciaLaboral.txtNombreEmpresa.value=empresa;
    document.frmExperienciaLaboral.txtJefe.value=jefe;
    document.frmExperienciaLaboral.txtTelefono.value=telefono;
    document.frmExperienciaLaboral.txtPuesto.value=puesto;
    document.frmExperienciaLaboral.txtDesde.value=desde;
    document.frmExperienciaLaboral.txtHasta.value=hasta;
    document.frmExperienciaLaboral.lstTipoContrato.value=tipo;
}
function cargarOferta(id,puesto,tipo,genero,edad,salario,empresa,pais,departamento,descripcion,experiencia){
    document.frmOferta.txtIdOferta.value=id;
    document.frmOferta.txtPuesto.value=puesto;
    document.frmOferta.lstContratacion.value=tipo;
    document.frmOferta.genero.value=genero;
    document.frmOferta.txtedad.value=edad;
    document.frmOferta.txtsalario.value=salario;
    document.frmOferta.lstEmpresa.value=empresa;
    document.frmOferta.lstPais.value=pais;
    document.frmOferta.lstDepartamento.value=departamento;
    document.frmOferta.txtDescripcion.value=descripcion;
    document.frmOferta.experiencia.value=experiencia;
}
function cargarContacto(id,nombres,apellidos,cargo,telefono1,telefono2,empresa){
    document.frmContratador.txtIdContacto.value=id;
    document.frmContratador.txtNombres.value=nombres;
    document.frmContratador.txtApellidos.value=apellidos;
    document.frmContratador.txtCargo.value=cargo;
    document.frmContratadortxtTelefono1.value=telefono1;
    document.frmContratadortxtTelefono2.value=telefono2;
    document.frmContratador.lstEmpresa.value=empresa;
}

function Modificar(){ 
confirmar=confirm("¿Desea Modificar el registro?"); 
if (confirmar) 
// si pulsamos en aceptar
alert('Datos Modificados correctamente');
else 
// si pulsamos en cancelar
alert('No se ha realizado ningun cambio'); 
} 
function Eliminar(){ 
confirmar=confirm("¿Desea Eliminar el registro?"); 
if (confirmar) 
// si pulsamos en aceptar
alert('Datos Eliminado correctamente');
else 
// si pulsamos en cancelar
alert('No se ha realizado ningun cambio'); 
}

