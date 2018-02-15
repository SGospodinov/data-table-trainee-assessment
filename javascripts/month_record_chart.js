const channelNames = ['BBC One', 'BBC Two', 'BBC Three', 'BBC Four', 'BBC News 24', 'CBBC', 'Cbeebies'];
const columnsCount = 7;
const columnWidthPercents = 0.1;
const maxColumnHeightPrecents = 0.85;

class MonthRecordChart {
  constructor(monthRecord, canvasId, width, height) {
    this.monthRecord = monthRecord;
    this.canvasElement = document.getElementById(canvasId);
    this.canvas = this.canvasElement.getContext('2d');
    this.columnWidth = columnWidthPercents * width;
    this.gapWidth = (width - (columnsCount * this.columnWidth))/columnsCount;
    this.maxColumnHeight = height * maxColumnHeightPrecents;
    this.initializeCanvas(width, height);
  }

  initializeCanvas(width, height){
    this.canvasElement.width = width;
    this.canvasElement.height = height;
    this.setCanvasBackground('#EAECFF');
  }

  setCanvasBackground(color){
    this.canvas.beginPath();
    this.canvas.rect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.canvas.fillStyle = color;
    this.canvas.fill();
  }

  render(){
    let numbers = this.monthRecord.getNumbersArray();
    let max = Math.max.apply(null, numbers);
    numbers.forEach(function(count, index){
      this.drawColumn(count, index, max);
    }, this);
  }

  drawColumn(count, index, max){
    this.canvas.beginPath();
    let bottom = this.canvasElement.height;
    let right =  (index + 1) * this.columnWidth + (index + 0.5) * this.gapWidth;
    let heightPercentage = (count/max);
    let height = heightPercentage * this.maxColumnHeight;
    this.canvas.fillStyle = '#7BB9F3';
    this.canvas.fillRect(right, bottom, -this.columnWidth, -height);
    this.canvas.fillStyle = '#545454';
    this.canvas.font = '1em sans-serif';
    this.canvas.fillText(channelNames[index], right-this.columnWidth, bottom-height-34);
    this.canvas.fillText(`${ count } views`, right-this.columnWidth, bottom-height-10);
  }
}
