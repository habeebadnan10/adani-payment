
// query params should contain pageId, source, psid, country, province, 
// data = { pageId: 'kjasdhkjhsdfkjjaksdf', psid: 'kjasdhfjksdf', source: 'yellowmessenger', country: ['India', 'Afganistan', 'China'], province: ['Chennai', 'abudhabi', 'bengaluru'] }


let htmlpage = "<html><head><title>Merchant Check Out Page</title></head><body><center><h1>Please do not refresh this page</h1></center><form method='post' action='https://securegw-stage.paytm.in/theia/processTransaction?orderid=Z2NG0FO2PDOYADE' name='f1'><table border='1'><tbody><input type='hidden' name='MID' value='RGTJDS11503797050217'><input type='hidden' name='CHANNEL_ID' value='WEB'><input type='hidden' name='INDUSTRY_TYPE_ID' value='Retail'><input type='hidden' name='WEBSITE' value='WEBSTAGING'><input type='hidden' name='EMAIL' value='nidhi.paneri@advaiya.com'><input type='hidden' name='MOBILE_NO' value='9460826482'><input type='hidden' name='CUST_ID' value='100008213'><input type='hidden' name='ORDER_ID' value='Z2NG0FO2PDOYADE'><input type='hidden' name='TXN_AMOUNT' value='1010.00'><input type='hidden' name='CALLBACK_URL' value='https://preprod.adanielectricity.com/PaymentGateway/paytm_Callback'><input type='hidden' name='MERC_UNQ_REF' value='100008213_100008213'><input type='hidden' name='CHECKSUMHASH' value='Bh/Qji5ZHpA3JOr70W0f053awJtKCHMdaGfWzK37eYbHv+nbS4mp94+ytMBMqWelHv7IVXhlcNS9nktwHnQnS53VOvTSHe/KiWPR6HF+mUM='></tbody></table><script type='text/javascript'>document.f1.submit();</script></form></body></html>"

const getQueryParams = (params, url) => {

    let href = url;
    console.log(params,"params");
    //this expression is to get the query strings
    let reg = new RegExp('[?&]' + params + '=([^&#]*)', 'i');
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
};

window.onload = () => {

    const paramString = getQueryParams('data', window.location.href);
    const decodedString = decodeURIComponent(paramString);
    document.getElementById("htmlcontent").innerHTML = decodedString
}
