const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.setRequestInterception(true);
  page.on('request', (request) => {
    if (request.resourceType() === 'image') request.abort();
    else request.continue();
  }); 

  await page.goto('https://twitter.com/rodrigofee2');
  //await page.waitFor(3000);

  await page.evaluate(() => {
    const nodList = document.getElementsByClassName("css-1dbjc4n r-j7yic r-qklmqi r-1adg3ll r-1ny4l3l")
    const tweetsArray = [...nodList]

    console.log(tweetsArray)

    /*const list = tweetsArray.map( ({src}) => ({
        src
    }))

    console.log(list)*/
});

})();