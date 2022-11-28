
const obj = {
    payment_method : 'cod',
    weightinKgs : 100 ,
    billing : {
        first_name : 'John',
        last_name : 'Doe',
        address_1 : '969 Market',
        address_2 : '',
        city : 'San Francisco',
        state : 'CA',
        postcode : '94103',
        country : 'US',
    }, 
    orderPurchases : [
        {
            date : '2020-01-01',
            amount : 100,
        }, 
        {
            date : '2020-03-02',
            amount : 200,
        }, 
        {
            date : '2020-02-06',
            amount : 210,
        }
    ]
}


    // JavaScript program to illustrate 
    // calculation of no. of days between two date 
      
    // To set two dates to two variables
   



const formgenerator=(data)=>{
    const numoforders = data.orderPurchases.length;
    let element = 0;
    for(let i = 0 ; i < numoforders ; i++){
        element = element + data.orderPurchases[i].amount;
    }
    var date1 = new Date(data.orderPurchases[0].date);
    var date2 = new Date(data.orderPurchases[1].date);
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    let days = 0;
    let lastelemetn = 0
    for(let i = 1 ; i < numoforders ; i++){
        var date1 = new Date(data.orderPurchases[0].date);
        var date2 = new Date(data.orderPurchases[i].date);
        var Difference_In_Time = date2.getTime() - date1.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        lastelemetn = i;
        days = days+Difference_In_Days;
    }
    
    
return {
"paymentMethod" : data.payment_method,
"name": data.billing.first_name+" "+data.billing.last_name,
"address" : data.billing.address_1+" , "+data.billing.city+" , "+data.billing.city+" , "+data.billing.state+" , "+data.billing.postcode+" , " + data.billing.country,
"weightinLbs" : data.weightinKgs*2.2046,
"customerAgeInDays" : Difference_In_Days,
"customerRepeatFrequencyInDays" : parseInt(days),
"avgOrderValue" : element/numoforders,
"firstOrderDate":data.orderPurchases[0].date,
"lastOrderDate" : data.orderPurchases[numoforders-1].date
}
}

const data = formgenerator(obj);

console.log(data)

const expectedOutput = {
    paymentMethod : 'cod',
    name : 'John Doe',
    address : '969 Market, San Francisco, CA 94103, US', 
    weightinLbs : 0, 
    customerAgeInDays : 0,
    customerRepeatFrequencyInDays : 0,
    avgOrderValue : 0 , 
    firstOrderDate : '', 
    lastOrderDate : '',
}