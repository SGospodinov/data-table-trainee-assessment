const months = [
'January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December'
]

class DateFormatter {
  static format(date){
    return `${months[date.getMonth()]} ${ date.getFullYear() }`;
  }
}
