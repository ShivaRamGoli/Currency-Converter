document.addEventListener('DOMContentLoaded',() =>{
    
var countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };



// const select = document.querySelector('select');
const dropDowns = document.getElementsByTagName('select');
const button = document.getElementsByTagName('button');
let toClass;
for(let i=0;i<dropDowns.length;i++){
    for(currCode in countryList){
        let newOption = document.createElement('option');
        newOption.innerText = currCode;
        dropDowns[i].append(newOption);
        if(dropDowns[i].name === 'from' && currCode === 'USD'){
            newOption.selected = 'selected';
        }else if(dropDowns[i].name === 'to' && currCode === 'INR'){
            newOption.selected = 'selected';
        }
    }

    dropDowns[i].addEventListener('change',(evt) =>{
        updateFlag(evt.target);
    });
}

const updateFlag = (element) =>{
    let currCode = element.value;
    // if(element.className == 'from')
    // console.log(currCode);
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let parentContainer = element.parentElement;
    let imgTag = parentContainer.getElementsByTagName('img');
    imgTag[0].src = newSrc;
}


button[0].addEventListener('click',async(evt)=>{
    evt.preventDefault();
    let amount = document.getElementsByClassName('amount-text');
    let amountValue = amount[0].value;
    if(amountValue == '' || amountValue < 0){
        amountValue = 1;
        amount.value = 1;
    }
    const fromClass = document.getElementsByClassName('fromC');
    const toClass = document.getElementsByClassName('toC');
    const fromCountry = (fromClass[0].value).toLowerCase();
    console.log(fromCountry);
    const toCountry = (toClass[0].value).toLowerCase();
    // console.log(fromCountry,toCountry);
    const baseURL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json';
    // const toBaseURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCountry}.json`;
    const fromBaseURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCountry}.json`
    // console.log(toBaseURL,fromBaseURL);
    let response1 = await fetch(fromBaseURL);
    let data = await response1.json();
    console.log(data);
    
    console.log(data[fromCountry][toCountry]);
    const message = document.getElementsByClassName('msg');
    console.log(amountValue);
    let finalAmount = amountValue*data[fromCountry][toCountry];
    message[0].innerText = `${amountValue} ${fromCountry.toUpperCase()} = ${finalAmount} ${toCountry.toUpperCase()}`;


})
});
