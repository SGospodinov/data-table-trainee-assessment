class MonthRecord {
  constructor(month, broadcastingNumbers) {
    this.month = month;
    this.bbcone = broadcastingNumbers['bbcone'];
    this.bbctwo = broadcastingNumbers['bbctwo'];
    this.bbcthree = broadcastingNumbers['bbcthree'];
    this.bbcfour = broadcastingNumbers['bbcfour'];
    this.bbcnews24 = broadcastingNumbers['bbcnews24'];
    this.cbbc = broadcastingNumbers['cbbc'];
    this.cbeebies = broadcastingNumbers['cbeebies'];
  }

  getFormatedMonth() {
    return DateFormatter.format(new Date(this.month));
  }

  toHTML(index){
    let className = ((index % 2) == 0) ? 'even' : 'odd';
    return `
      <tr class="${ className }">
        <td>${ this.getFormatedMonth() }</td>
        <td>${ this.bbcone }</td>
        <td>${ this.bbctwo }</td>
        <td>${ this.bbcthree }</td>
        <td>${ this.bbcfour }</td>
        <td>${ this.bbcnews24 }</td>
        <td>${ this.cbbc }</td>
        <td>${ this.cbeebies }</td>
      </tr>
    `;
  }
}
