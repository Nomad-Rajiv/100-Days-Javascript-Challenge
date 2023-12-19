// JavaScript Program to Format Numbers as Currency Strings

  const formatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD'
  });
  

  let currencyString = formatter.format(2500);
  console.log(currencyString);