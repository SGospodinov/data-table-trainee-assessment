class BroadcastingRecord {
  constructor(){
    this.records = new Array();
  }

  addRecord(monthRecord){
    this.records.push(monthRecord);
  }

  toHTML(){
    let html = "";
    this.records.forEach(function(record, index){
      html += record.toHTML(index);
    });
    return html;
  }
}
