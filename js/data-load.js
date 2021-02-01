var data;
	$.ajax({
	  type: "GET",  
	  url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQgPMWcGuo-xm-gh_JQ5GfioS55gsxaKiy32gICLPnjZA_Bola9VH9_J4vPGSV31Q7YSWYXAMO_q_Td/pub?gid=1031938726&single=true&output=csv",
	  dataType: "text",       
	  success: function(response)  
	  {
		data = $.csv.toArrays(response);
		generateHtmlTable(data);
	  }   
    });
    
    