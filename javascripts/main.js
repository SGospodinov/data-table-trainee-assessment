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
  let tableRows = document.querySelectorAll('#broadcasts-data-table tbody tr[data-row-index]');
  tableRows.forEach(function(row){
    row.addEventListener('click', function(event){
      selectRow(event.srcElement.parentElement, broadcastingRecord);
    })
  });
}

function selectRow(row, broadcastingRecord){
  document.querySelectorAll('#broadcasts-data-table tr.selected').forEach(function(selectdRow){
    selectdRow.classList.remove('selected');
  });
  row.classList.add('selected');
  let index = parseInt(row.getAttribute('data-row-index'));
  showChartFor(broadcastingRecord.getMonthRecord(index));
}

function showChartFor(monthRecord){
  let chartTitle = document.getElementById('chart-title');
  let chartWrapper = document.getElementById('chart-wrapper');
  chartTitle.innerHTML = monthRecord.getFormatedMonth();
  let chart = new MonthRecordChart(monthRecord, 'chart-canvas',
      chartWrapper.parentElement.offsetWidth,
      chartWrapper.parentElement.offsetWidth * 0.5);
  chart.render();
  chartWrapper.style.display = 'block';
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
