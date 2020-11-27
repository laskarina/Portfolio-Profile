var SHEET_ID = ""; // Change here: Your Sheet ID
var SHEET_NAME = "";

function doGet(e) {
doPost(e);
}

function doPost(e){
  var response = {
    data: e.parameter,
  };
  try{
    var Contents = SpreadSheetsSQL.open(SHEET_ID, SHEET_NAME)
    Contents.insertRows([e.parameter]);
    response.response = "success";
  } catch(error){
    response.error = error;
    response.response = "failed";
  }
  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON)
}