function today() {
  var today=new Date();  
  return today.getDay()+"/"+(today.getMonth()+1)+"/"+(today.getYear()+1900);
}

function printContent(id, title){
    str=document.getElementById(id).innerHTML;
    newwin=window.open('','printwin','left=100,top=100,width=400,height=400');
    newwin.document.write('<HTML>\n<HEAD>\n');
    newwin.document.write('<TITLE>'+title+'</TITLE>\n');
    newwin.document.write('<link rel="stylesheet"   type="text/css" media="all" href="print.css" />');
    newwin.document.write('<script>\n');
    newwin.document.write('function chkstate(){\n');
    newwin.document.write('if(document.readyState=="complete"){\n');
    newwin.document.write('window.close()\n');
    newwin.document.write('}\n');
    newwin.document.write('else{\n');
    newwin.document.write('setTimeout("chkstate()",2000)\n');
    newwin.document.write('}\n');
    newwin.document.write('}\n');
    newwin.document.write('function print_win(){\n');
    newwin.document.write('window.print();\n');
    newwin.document.write('chkstate();\n');
    newwin.document.write('}\n');
    newwin.document.write('<\/script>\n');
    newwin.document.write('</HEAD>\n');
    newwin.document.write('<BODY onload="print_win()">\n');
    newwin.document.write('<h1>גליון ציונים</h1>');    
    newwin.document.write(str);
    newwin.document.write('<div class="footer">הופק ע"י - CM - בתאריך '+today()+'<br />http://tx.technion.ac.il/gai/~cm/</div>');        
    newwin.document.write('</BODY>\n');
    newwin.document.write('</HTML>\n');
    newwin.document.close();
}
