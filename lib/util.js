
export function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}


export function formatIsoStringDate(stringIsoDate){
    const theDate = new Date(stringIsoDate+' 00:00:00')
    const options = {month: "long", day:"numeric", year:"numeric" }
    return theDate.toLocaleDateString('en-US', options)
}
