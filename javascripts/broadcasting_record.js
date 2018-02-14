class BroadcastingRecord {
  constructor(){
    this.records = new Array();
  }

  addRecord(monthRecord){
    this.records.push(monthRecord);
  }

  toHTML(){
    let html = "";
    this.records.forEach(function(record){
      html += record.toHTML();
    });
    return html;
  }
}
