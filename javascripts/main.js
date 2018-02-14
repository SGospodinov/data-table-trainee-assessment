document.addEventListener('DOMContentLoaded', onLoad);

function onLoad(){
  let broadcastingRecord;
  $.getJSON('data.json')
    .done(function(data){
      broadcastingRecord = createBroadcastingRecord(data);
      renderTable(broadcastingRecord);
    }).
    fail(function(){
      console.log("TODO: Show error message");
    });

  let columnsHeaders = document.querySelectorAll('#broadcasts-data-table thead th');
  columnsHeaders.forEach(function(header){
    header.addEventListener('click', function(event){
      headerClicked(event.srcElement, broadcastingRecord)
    });
  });
}

function createBroadcastingRecord(data){
  let broadcastingRecord = new BroadcastingRecord();
  Object.keys(data).forEach(function(key){
    let monthRecord = new MonthRecord(key, data[key]);
    broadcastingRecord.addRecord(monthRecord);
  });
  broadcastingRecord.sort('month', 'asc');
  return broadcastingRecord;
}

function renderTable(broadcastingRecord){
  $("#broadcasts-data-table tbody").html(broadcastingRecord.toHTML()).parent().show();
}

function headerClicked(item, broadcastingRecord){
  let sort = toggleSorting(item);
  let columnName;
  if(sort == null){
    sort = 'asc';
    columnName = 'month'
  } else {
    columnName = item.getAttribute('data-col-name');
  }
  broadcastingRecord.sort(columnName, sort);
  renderTable(broadcastingRecord);
}

function toggleSorting(item){
  sort = item.getAttribute('data-sort');
  document.querySelectorAll('#broadcasts-data-table thead th').forEach(function(header){
    header.removeAttribute('data-sort');
  });
  if(sort == null){
    item.setAttribute('data-sort', 'asc');
    return 'asc';
  }else if(sort == 'asc'){
    item.setAttribute('data-sort', 'desc');
    return 'desc';
  }else{
    item.removeAttribute('data-sort');
    return null;
  }
}
