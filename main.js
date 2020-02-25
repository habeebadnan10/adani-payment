
// query params should contain pageId, source, psid, country, province, 
// data = { pageId: 'kjasdhkjhsdfkjjaksdf', psid: 'kjasdhfjksdf', source: 'yellowmessenger', country: ['India', 'Afganistan', 'China'], province: ['Chennai', 'abudhabi', 'bengaluru'] }
const getQueryParams = (params, url) => {
    let href = url;
    console.log(params);
    //this expression is to get the query strings
    let reg = new RegExp('[?&]' + params + '=([^&#]*)', 'i');
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
};
let paramData = '';
// const masterAddress;