window.onload = function(evt) {
  
  function worksheets(){
    $.get("worksheets.txt", function(data) {
      //Putting quotation marks on ethier side of the data
      var quoMark ="\""+data+"\"";
      var period = quoMark.replace(/.\//g," ");
      //Splicing the data at the commas
      var fileNames = period.split(' ');
      //adding files
      var i;
      for (i = 1; i < fileNames.length; i++) { 
      	var tr = document.createElement("tr");
      	var worksheet = document.createElement("td");
      	worksheet.appendChild(document.createTextNode("Worksheet "+i));
      	
      	var pdf1 = fileNames.indexOf(i+".pdf");
      	  var pdf = document.createElement("a");
      	  pdf.setAttribute("href","worksheets/"+fileNames[pdf1]);
      	  pdf.appendChild(document.createTextNode("pdf"));
      	  var pdf2 = document.createElement("td");
      	  pdf2.appendChild(pdf);
      	  
      	var tex1 = fileNames.indexOf(i+".tex");
      	  var tex = document.createElement("a");
      	  tex.setAttribute("href","worksheets/"+fileNames[tex1]);
      	  tex.appendChild(document.createTextNode("tex"));
      	  var tex2 = document.createElement("td");
      	  tex2.appendChild(tex);
      	  
      	var solutions1 = fileNames.indexOf(i+"s.pdf");
      	  var solutions = document.createElement("a");
      	  solutions.setAttribute("href","worksheets/"+fileNames[solutions1]);
      	  solutions.appendChild(document.createTextNode("solutions"));
      	  var solutions2 = document.createElement("td");
      	  solutions2.appendChild(solutions);
      	  
      	tr.appendChild(worksheet);
      	tr.appendChild(pdf2);
      	tr.appendChild(tex2);
      	tr.appendChild(solutions2);
      	
      	document.getElementById("target").appendChild(tr);
      
      }
    });
  }
  
  worksheets();
};
