This is an application for finding the correct and appropriate locations around you to ditch your old belongings.

Server deployed on Heroku: https://limitless-woodland-38268.herokuapp.com/   
React-app deployed on Netlify: https://suspicious-chandrasekhar-bf5b27.netlify.com

There is currently one POST route that can be accessed at this server which is to get a list of locations based on whether the quiz results determine that items are good to donate or not.   
   

### Sample POST request: https://limitless-woodland-38268.herokuapp.com/ditchit/recommendations with body:
```
{
	"location": {"city":"Toronto","address":"4700 Keele St","province":"ON","radius":10000},
	"itemType": "Clothing",
	"canDonate": "true"
}
```
### Sample response returns 5 of each eligible category:
```
{
    "initialCoordinates": {
        "lat": 43.774282,
        "lng": -79.4931409
    },
    "categories": [
        "clothing+donation+centres",
        "homeless+shelters"
    ],
    "options": [
        {
            "category": "clothing+donation+centres",
            "name": "SECOND CHANCE Clothing and More",
            "address": "31 Wood Dale Rd, Concord, ON L4K 5M1, Canada",
            "coordinates": {
                "lat": 43.835014,
                "lng": -79.495503
            },
            "isOpen": {
                "open_now": false
            },
            "phone": "(416) 818-3974",
            "url": "https://maps.google.com/?cid=13333050065804087630",
            "website": "http://www.secondchanceclothingandmore.com/"
        },
        {
            "category": "clothing+donation+centres",
            "name": "Jessie's - The June Callwood Centre for Young Women",
            "address": "205 Parliament St, Toronto, ON M5A 2Z4, Canada",
            "coordinates": {
                "lat": 43.6563651,
                "lng": -79.3646031
            },
            "isOpen": {
                "open_now": false
            },
            "phone": "(416) 365-1888",
            "url": "https://maps.google.com/?cid=16686050738384576829",
            "website": "http://jessiescentre.org/"
        },
        {
            "category": "clothing+donation+centres",
            "name": "Ontario Federation For Cerebral Palsy",
            "address": "1630 Lawrence Ave W #104, North York, ON M6L 1C5, Canada",
            "coordinates": {
                "lat": 43.7062648,
                "lng": -79.4915676
            },
            "isOpen": {
                "open_now": false
            },
            "phone": "(416) 244-9686",
            "url": "https://maps.google.com/?cid=3628933790286548346",
            "website": "http://www.ofcp.ca/"
        },
        {
            "category": "clothing+donation+centres",
            "name": "Dress For Success Toronto",
            "address": "5150 Yonge Street Concourse Level, Toronto, ON M2N 6L8, Canada",
            "coordinates": {
                "lat": 43.76846399999999,
                "lng": -79.414017
            },
            "isOpen": {
                "open_now": false
            },
            "phone": "(416) 901-6022",
            "url": "https://maps.google.com/?cid=9391548470966579741",
            "website": "https://toronto.dressforsuccess.org/"
        },
        {
            "category": "clothing+donation+centres",
            "name": "The Salvation Army Thrift Store",
            "address": "2291 Kipling Ave, Etobicoke, ON M9W 4L6, Canada",
            "coordinates": {
                "lat": 43.7297247,
                "lng": -79.57438929999999
            },
            "isOpen": {
                "open_now": false
            },
            "phone": "(416) 749-1923",
            "url": "https://maps.google.com/?cid=15891626207186154773",
            "website": "http://www.thriftstore.ca/"
        },
        {
            "category": "homeless+shelters",
            "name": "Eva's Satellite",
            "address": "25 Canterbury Pl, North York, ON M2N 0E3, Canada",
            "coordinates": {
                "lat": 43.772794,
                "lng": -79.4147679
            },
            "isOpen": {
                "open_now": true
            },
            "phone": "(416) 229-1874",
            "url": "https://maps.google.com/?cid=3288185670364839324",
            "website": "http://www.evas.ca/"
        },
        {
            "category": "homeless+shelters",
            "name": "Marcrussel Landayan's Homeless Shelter",
            "address": "Vaughan, ON L4H 2Z7, Canada",
            "coordinates": {
                "lat": 43.8360396,
                "lng": -79.5595154
            },
            "url": "https://maps.google.com/?cid=2073076157341024358"
        },
        ...
    ]
}
```

## Home Page:
![Home Page](https://github.com/hyx131/ditchit/blob/master/public/Screen%20Shot%202020-02-02%20at%202.01.29%20AM.png)

## Enter where you are located:
![Location Survey Page](https://github.com/hyx131/ditchit/blob/master/public/Screen%20Shot%202020-02-02%20at%202.01.50%20AM.png)

## Choose the type of item(s) you want to ditch:
![Item Page](https://github.com/hyx131/ditchit/blob/master/public/Screen%20Shot%202020-02-02%20at%202.02.04%20AM.png)

## Report the condition of your item(s):
![Item(s) Conditions Page](https://github.com/hyx131/ditchit/blob/master/public/Screen%20Shot%202020-02-02%20at%203.46.13%20AM.png)

## List of resulting options based on your location and item(s) condition:
![Results Page](https://github.com/hyx131/ditchit/blob/master/public/Screen%20Shot%202020-02-02%20at%202.02.26%20AM.png)

## Expansion panels showing extra details about each option:
![Result Detail Page](https://github.com/hyx131/ditchit/blob/master/public/Screen%20Shot%202020-02-02%20at%202.02.44%20AM.png)


