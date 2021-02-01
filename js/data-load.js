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
    

    

var exampledata;
	$.ajax({
	  type: "GET",  
	  url: "js-tutorials.com_sample_file.csv",
	  dataType: "text",       
	  success: function(response)  
	  {
		data = $.csv.toArrays(response);
		generateHtmlTable(data);
	  }   
    });
    
function generateHtmlTable(data) {
        var html = '<table  class="table table-condensed table-hover table-striped">';
    
          if(typeof(data[0]) === 'undefined') {
            return null;
          } else {
            $.each(data, function( index, row ) {
              //bind header
              if(index == 0) {
                html += '<thead>';
                html += '<tr>';
                $.each(row, function( index, colData ) {
                    html += '<th>';
                    html += colData;
                    html += '</th>';
                });
                html += '</tr>';
                html += '</thead>';
                html += '<tbody>';
              } else {
                html += '<tr>';
                $.each(row, function( index, colData ) {
                    html += '<td>';
                    html += colData;
                    html += '</td>';
                });
                html += '</tr>';
              }
            });
            html += '</tbody>';
            html += '</table>';
            alert(html);
            $('#csv-display').append(html);
          }
        }	