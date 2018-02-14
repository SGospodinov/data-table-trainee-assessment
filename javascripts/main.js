document.addEventListener('DOMContentLoaded', onLoad);

function onLoad(){
  let broadcastingRecord;
  $.getJSON('data.json')
    .done(function(data){
      renderTable(createBroadcastingRecord(data));
    }).
    fail(function(){
      console.log("TODO: Show error message");
    });
}

function createBroadcastingRecord(data){
  let broadcastingRecord = new BroadcastingRecord();
  Object.keys(data).forEach(function(key){
    let monthRecord = new MonthRecord(key, data[key]);
    broadcastingRecord.addRecord(monthRecord);
  });
  return broadcastingRecord;
}

function renderTable(broadcastingRecord){
  $("#broadcasts-data-table tbody").html(broadcastingRecord.toHTML()).parent().show();
}
