export const getFormattedDate = (dateTime) => {
    const dayObj = new Date(dateTime)
    const options = { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
    };
  let formattedDateStr = dayObj.toLocaleDateString('en-US', options);
  return formattedDateStr;
};