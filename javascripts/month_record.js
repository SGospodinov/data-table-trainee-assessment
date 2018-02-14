class MonthRecord {
  constructor(month, broadcastingNumbers) {
    this.month = month;
    this.broadcastingNumbers = broadcastingNumbers;
  }

  getFormatedMonth() {
    return DateFormatter.format(new Date(this.month));
  }

  getBBCOne() {
    return this.broadcastingNumbers['bbcone'];
  }

  getBBCTwo() {
    return this.broadcastingNumbers['bbctwo'];
  }

  getBBCThree() {
    return this.broadcastingNumbers['bbcthree'];
  }

  getBBCFour() {
    return this.broadcastingNumbers['bbcfour'];
  }

  getBBCNews() {
    return this.broadcastingNumbers['bbcnews24'];
  }

  getCBBC() {
    return this.broadcastingNumbers['cbbc'];
  }

  getCbeebies(){
    return this.broadcastingNumbers['cbeebies'];
  }

  toHTML(index){
    let className = ((index % 2) == 0) ? 'even' : 'odd';
    return `
      <tr class="${ className }">
        <td>${ this.getFormatedMonth() }</td>
        <td>${ this.getBBCOne() }</td>
        <td>${ this.getBBCTwo() }</td>
        <td>${ this.getBBCThree() }</td>
        <td>${ this.getBBCFour() }</td>
        <td>${ this.getBBCNews() }</td>
        <td>${ this.getCBBC() }</td>
        <td>${ this.getCbeebies() }</td>
      </tr>
    `;
  }
}
