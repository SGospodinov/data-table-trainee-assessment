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

  sort(columnName, sort){
    let comp = Comparator.getComparator(sort);
    for(let i = this.records.length; i > 1; i--) {
      for (var j = 0; j < i-1; j++) {
        if (comp.compare(this.records[j][columnName], this.records[j+1][columnName])) {
          let temp = this.records[j];
          this.records[j] = this.records[j+1];
          this.records[j+1] = temp;
        }
      }
    }
  }
}
