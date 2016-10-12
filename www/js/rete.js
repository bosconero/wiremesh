function controllo(){
if (document.getElementById('spesspav').value==""){
alert('Insert floor thickness');
document.getElementById('spesspav').focus();
}else{
controllo2()}
}
function controllo2(){
if(document.getElementById('digiucont').value==""){
alert('insert distance between joints');
document.getElementById('digiucont').focus();
}else{
controllo3()}
}
function controllo3(){
if (document.getElementById('Rck').value==""){
alert("Insert concrete compressive strength");
doccument.getElementById('Rck').focus();
}else{
controllo4()}
}
function controllo4(){
if (document.getElementById('uniformi').value==""){
alert('insert uniforms loads');
document.getElementById('uniformi').focus();
}else{
calcolorete();
}
}

function calcolorete(){
 document.getElementById('pinserimento').style.display="none";
document.getElementById('risultati').style.display="block";
var distcont=document.getElementById('digiucont').value;
var spess=document.getElementById('spesspav').value;
var kwinkler=document.getElementById('portanza').value;
var rck=document.getElementById('Rck').value;
var caricou=document.getElementById('uniformi').value;
var sottofondo=document.getElementById('sotto').value;
var alert=document.getElementById('alert');
if (sottofondo=="polyethylene"){
var ksott=4;}
if (sottofondo=="planar"){
var ksott=5.5;}
if (sottofondo=="not good"){
var ksott=8;}
areaf=Math.round(((ksott*distcont*(24*spess))/4400)*100)/100;
areaferro.innerHTML= "the wire area will be: <span style='font:bold 20px arial; color:#ff2200;'> "+areaf+" mmq </span>";
if (areaf<=1.635){
ferromezzeria.innerHTML="which corresponds to a welded mesh <span style='font:bold 20px arial;color:#ff2200;'> &Phi; 6 mm and mesh size 200 X 200 mm</span><br /><br />WARNING: as the mesh  will be trampled by the operators will require at least an &Phi;8 mm wire to prevent deformation and disorder in the mesh";
}
 if (areaf >1.635 && areaf<=2.185){
ferromezzeria.innerHTML="which corresponds to a welded mesh <span style='font:bold 20px arial;color:#ff2200;'>&Phi; 6 mm  and mesh size 150 X 150 mm</span> <br /><br />WARNING: as the mesh  will be trampled by the operators will require at least an &Phi;8 mm wire to prevent deformation and disorder in the mesh";
} 

 if (areaf>2.185 && areaf<=2.91){
ferromezzeria.innerHTML="which corresponds to a welded mesh <span style='font:bold 20px arial;color:#ff2200;'>&Phi; 6 mm and mesh size  100 X 100 mm</span> <br>or a welded mesh<span style='font:bold 20px arial; color:#ff2200;'> &Phi; 8 mm and mesh size 200 X 200 mm</span><br /><br />WARNING: as the mesh  will be trampled by the operators will require at least an &Phi;8 mm wire to prevent deformation and disorder in the mesh";
}
if (areaf>2.91 && areaf <= 4.165){
ferromezzeria.innerHTML="which corresponds to a welded mesh <span style='font:bold 20px arial;color:#ff2200;'>&Phi; 8 mm and mesh size 150 X 150 mm</span>  ";
}

if (areaf>4.165){
ferromezzeria.innerHTML="which corresponds to a welded mesh <span style='font:bold 20px arial; color:#ff2200;'> &Phi; 8 mm and mesh size 100 X 100 </span>  ";
}
if (spess<16){
alert.innerHTML="<span style='color:#990000;'>ATTENTION: with a thickness of less than 16 cm reduce the overlaps as more as possible</span>";}
modelast=5700*Math.sqrt(rck);
coslam1=(kwinkler*3)*100;
coslam2=((Math.pow(spess,3))*modelast);
coslam3=coslam1/coslam2;
lambda=Math.pow(coslam3,(1/4));
coeffm=0.1682*caricou/Math.pow(lambda,2);
cosigma=100*Math.pow(spess,2)/6;
coeffsigma=(coeffm/cosigma)/100;

minf=coeffsigma*(100*(spess/6));
coefafi=0.897*(spess-2)*220;
afix=(minf/coefafi)*2;
afi=Math.round(afix*100)/100;
sigmafondo.innerHTML="When there is uncertainty on the bearing capacity of the support is done with a static armor that, for the entered data, is reported to be <span style='font:bold 20px arial;color:#ff2200'>"+afi+" mmq</span>";
if (afi<=1.635){
ferrofondo.innerHTML="which corresponds to a welded mesh <span style='font:bold 20px arial;color:#ff2200;'> &Phi; 6 mm and mesh size 200 X 200</span>  ";
}

 if (afi >1.635 && afi<=2.185){
ferrofondo.innerHTML="which corresponds to a welded mesh <span style='font:bold 20px arial;color:#ff2200;'>&Phi; 6 mm  and mesh size 150 X 150</span>  ";
} 

 if (afi>2.185 && afi<=2.91){
ferrofondo.innerHTML="which corresponds to a welded mesh <span style='font:bold 20px arial;color:#ff2200;'>&Phi; 6 mm and mesh size 100 X 100</span> <br>or a welded mesh <span style='font:bold 20px arial; color:#ff2200;'>&#157; 8 mm and mesh size 200 X 200</span> ";
}
if (afi>2.91 && afi <= 4.165){
ferrofondo.innerHTML="which corresponds to a welded mesh <span style='font:bold 20px arial;color:#ff2200;'>&Phi; 8 mm and mesh size 150 X 150</span>  ";
}

if (afi>4.165){
ferrofondo.innerHTML="which corresponds to a welded mesh <span style='font:bold 20px arial; color:#ff2200;'> &Phi; 8 mm and mesh size 100 X 100 </span>  ";
}
}
function init(){
document.getElementById('intro').style.display="block";
document.getElementById('risultati').style.display="none";
document.getElementById('pinserimento').style.display="none";
}
function fineintro(){
document.getElementById('intro').style.display="none";
document.getElementById('pinserimento').style.display="block";
}
function esci(){
 navigator.app.exitApp();
}
function ripeti(){
window.location="index.html";
}
function gocalcolo(){
 window.location = "wiremesh.html";

} 
