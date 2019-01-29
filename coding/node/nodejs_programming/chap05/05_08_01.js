const https = require('https');

const crawlData = [];

https.get('https://nodejs.org/dist/latest-v5.x/docs/api/index.json', (res) => {
  let body = '';

  res.on('data', (d) => {
    body += d;
  });

  res.on('end', () => {
    const indexData = JSON.parse(body).desc;

    for (let i = 0; i < indexData.length; i++) {
      if (indexData[i].type == 'text') {
        let str = indexData[i].text;
        str = str.substr(str.indexOf('[') + 1);
        const tempIdx = str.indexOf(']');
        const title = str.substr(0, tempIdx);

        str = str.substr(tempIdx + 1);
        const link = str.slice(1, -1);

        crawlData.push({
          title,
          link,
        });
      }
    }
    console.log(crawlData);
  });
}).on('error', (e) => {
  console.log('Error:', e);
});
