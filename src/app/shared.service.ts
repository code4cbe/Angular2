import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
 
@Injectable()
export class SharedService {

    locatorUrl2="&zip="
    locatorUrl1="http://api.walmartlabs.com/v1/stores?format=json";
    apiKey="&apiKey=5z3u9rvpmvpf55tczc949nhp";
    //http://api.walmartlabs.com/v1/items/34938915?format=json&apiKey=5z3u9rvpmvpf55tczc949nhp
    catalogUrl2="&query="
    catalogUrl1="http://api.walmartlabs.com/v1/search?format=json";

    
    productUrl1="http://api.walmartlabs.com/v1/items/";
    productUrl2="?format=json";

    
    totReqsMade: number = 0;
    constructor(private _http: Http) { }
    
    getProductDetails(id){
        return this._http
                    .get(this.productUrl1+id+this.productUrl2+this.apiKey)
    .map(response => {{console.log(response.json());
            return response.json()};})
                    .catch(error=> Observable.throw(error.json()));
    }
 
    findStore(zip){
        this.totReqsMade = this.totReqsMade + 1;
        return this._http
                    .get(this.locatorUrl1+this.apiKey+this.locatorUrl2+zip)
            .map(response => {{//console.log(response.json());
            return response.json()};})
                    .catch(error=> Observable.throw(error.json()));
    }
 
    /*findProduct(query){
        this.totReqsMade = this.totReqsMade + 1;
        return this._http
                    .get(this.catalogUrl1+this.apiKey+this.catalogUrl2+query)
            .map(response => {{//console.log(response.json());
            return response.json()};})
                    .catch(error=> Observable.throw(error.json()));
                    
                    
                    return "{"query":"ipod","sort":"relevance","responseGroup":"base","to

talResults":25416,"start":1,"numItems":10,"items":

[{"itemId":42608121,"parentItemId":42608121,"name":"Apple 

iPod touch 16GB, Assorted 

Colors","msrp":193.0,"salePrice":189.99,"upc":"888462350624",

"categoryPath":"Electronics/Portable Audio/Apple iPods/iPod 

Touch","shortDescription":"&lt;p&gt;Whether you're an avid 

gamer looking for a more powerful way to play, a music 

devotee seeking a better portable music experience, or a 

hobbyist photographer with an adventurous streak, the Apple 

16 GB iPod touch packs a host of awesome features into a 

sleek package. A stunningly crisp 4-inch Retina display, a 

powerful A8 chip and M8 motion coprocessor make for a 

beautifully detailed, highly responsive gaming experience. 

Connect to Wi-Fi to FaceTime with friends and family, 

download music and games, send messages to your friends or 

post to social media. Capture the fun of impromptu gatherings 

with the iPod's 8-megapixel iSight camera with exposure 

control and improved HDR and face detection. And of course, 

the iPod touch is a sleek way to keep your music with you, 

and access the iTunes Store to grab your next favorite album. 

Attractive and designed to go with you everywhere, the iPod 

touch is available in 5 stunning colors to suit anyone's 

taste.&lt;/p&gt;","longDescription":"&lt;b&gt;Apple iPod 

touch 16GB, Assorted Colors:&lt;/b&gt;&lt;div 

style=&quot;margin-left: 2em&quot;&gt;&lt;b&gt;Key 

Features:&lt;/b&gt;&lt;/div&gt;&lt;ul&gt;&lt;li&gt;4-inch 

Retina display&lt;/li&gt;&lt;li&gt;A8 with M8 motion 

coprocessor&lt;/li&gt;&lt;li&gt;8MP iSight &amp; FaceTime 

cameras&lt;/li&gt;&lt;li&gt;1080p HD video 

recording&lt;/li&gt;&lt;li&gt;802.11ac Wi-Fi &amp; Bluetooth 

4.1&lt;/li&gt;&lt;li&gt;Up to 40 hours audio 

playback&lt;/li&gt;&lt;/ul&gt;&lt;div style=&quot;margin-

left: 2em&quot;&gt;&lt;b&gt;Legal&lt;/b&gt;&lt;br&gt;iPod 

models are not available in all colors at all 

resellers.&lt;br&gt;Membership required. Requires initial 

sign-up. At the end of the trial period, the membership will 

automatically renew and payment method will be charged on a 

monthly basis until autorenewal is turned off in account 

settings.&lt;br&gt;FaceTime calling requires a FaceTime-

enabled device with a Wi-Fi connection.&lt;br&gt; Display 

size is measured diagonally.&lt;br&gt;Rechargeable batteries 

have a limited number of charge cycles and may eventually 

need to be replaced. Battery life and number of charge cycles 

vary by use and settings. See www.apple.com/batteries for 

more information.&lt;br&gt;TM and (C) 2015 Apple Inc. All 

rights 

reserved.&lt;/div&gt;","thumbnailImage":"https://i5.walmartim

ages.com/asr/bdb29314-3a3e-49a1-b694-

34dff0461693_1.869b329817f9d9f35aadb656177cd8b2.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/bdb29314-3a3e-49a1-b694-

34dff0461693_1.869b329817f9d9f35aadb656177cd8b2.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/bdb29314-3a3e-49a1-b694-

34dff0461693_1.869b329817f9d9f35aadb656177cd8b2.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","productTrackingUrl"

:"http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip

%252FApple-iPod-touch-16GB-Assorted-Colors

%252F42608121%253Faffp1%253DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%2526affilsrc

%253Dapi","standardShipRate":0.0,"marketplace":false,"modelNu

mber":"MKH62LL/A","productUrl":"http://c.affil.walmart.com/t/

api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FApple-iPod-

touch-16GB-Assorted-Colors

%2F42608121%3Faffp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","customerRating":"4.671","numReviews":146,"cu

stomerRatingImage":"http://i2.walmartimages.com/i/CustRating/

4_7.gif","categoryNode":"3944_96469_1231508","bundle":false,"

stock":"Available","addToCartUrl":"http://c.affil.walmart.com

/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart

%3Fitems

%3D42608121%7C1%26affp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","affiliateAddToCartUrl":"http://linksynergy.w

almart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart

%252FaddToCart%253Fitems

%253D42608121%257C1%2526affp1%253DkZWWK28HYe3THWF5eR0beb_mHYx

jnc-b3TOUal__uQ0%2526affilsrc%253Dapi","giftOptions":

{"allowGiftWrap":false,"allowGiftMessage":false,"allowGiftRec

eipt":false},"imageEntities":

[{"thumbnailImage":"https://i5.walmartimages.com/asr/e8b292ba

-04f1-454f-a629-

e41bba6c79ab_1.acd37096b0d504f6a93251180266c834.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/e8b292ba-04f1-454f-a629-

e41bba6c79ab_1.acd37096b0d504f6a93251180266c834.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/e8b292ba-04f1-454f-a629-

e41bba6c79ab_1.acd37096b0d504f6a93251180266c834.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/bdb29314

-3a3e-49a1-b694-

34dff0461693_1.869b329817f9d9f35aadb656177cd8b2.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/bdb29314-3a3e-49a1-b694-

34dff0461693_1.869b329817f9d9f35aadb656177cd8b2.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/bdb29314-3a3e-49a1-b694-

34dff0461693_1.869b329817f9d9f35aadb656177cd8b2.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"PRIMAR

Y"}],"offerType":"ONLINE_AND_STORE","isTwoDayShippingEligible

":true,"availableOnline":true},

{"itemId":46088111,"parentItemId":46088111,"name":"Apple iPod 

touch 64GB (6th Generation - Latest Model), Assorted 

Colors","salePrice":289.0,"upc":"888462351775","categoryPath"

:"Electronics/Portable Audio/Apple iPods/iPod 

Touch","shortDescription":"&lt;div style=&quot;margin-left: 

2em&quot;&gt;iPod touch is the perfect way to carry your 

music collection in your pocket. Now in 5 stunning colors. 

Listen to your favorite songs from Apple Music1 and iTunes. 

iPod touch offers the ultimate mobile gaming experience. Take 

great photos and videos with the new 8MP iSight camera and 

make video calls with the improved FaceTime HD camera.2 And 

stay connected with Messages and the most popular social 

networking apps. All on a 4-inch Retina 

display.3&lt;/div&gt;","longDescription":"&lt;div 

style=&quot;margin-left: 2em&quot;&gt;&lt;b&gt;Key 

Features&lt;/b&gt;&lt;/div&gt;&lt;ul&gt;&lt;li&gt;4-inch 

Retina display3&lt;/li&gt;&lt;li&gt;A8 with M8 motion 

coprocessor&lt;/li&gt;&lt;li&gt;8MP iSight &amp; FaceTime 

cameras&lt;/li&gt;&lt;li&gt;1080p HD video 

recording&lt;/li&gt;&lt;li&gt;802.11ac Wi-Fi &amp; Bluetooth 

4.1&lt;/li&gt;&lt;li&gt;Up to 40 hours audio 

playback4&lt;/li&gt;&lt;/ul&gt;&lt;div style=&quot;margin-

left: 2em&quot;&gt;&lt;b&gt;Legal&lt;/b&gt;&lt;br&gt;iPod 

models are not available in all colors at all 

resellers.&lt;br&gt;1 Membership required. Requires initial 

sign-up. At the end of the trial period, the membership will 

automatically renew and payment method will be charged on a 

monthly basis until autorenewal is turned off in account 

settings.&lt;br&gt;2 FaceTime calling requires a FaceTime-

enabled device with a Wi-Fi connection.&lt;br&gt;3 Display 

size is measured diagonally.&lt;br&gt;4 Rechargeable 

batteries have a limited number of charge cycles and may 

eventually need to be replaced. Battery life and number of 

charge cycles vary by use and settings. See 

www.apple.com/batteries for more information.&lt;br&gt;TM and 

&copy; 2015 Apple Inc. All rights 

reserved.&lt;/div&gt;","thumbnailImage":"https://i5.walmartim

ages.com/asr/d364771d-6954-44bc-a9fe-

19168da8e618_1.b5c2c953db103d317ac0b2bf307c9b99.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/d364771d-6954-44bc-a9fe-

19168da8e618_1.b5c2c953db103d317ac0b2bf307c9b99.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/d364771d-6954-44bc-a9fe-

19168da8e618_1.b5c2c953db103d317ac0b2bf307c9b99.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","productTrackingUrl"

:"http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip

%252FApple-iPod-touch-64GB-6th-Generation-Latest-Model-

Assorted-Colors

%252F46088111%253Faffp1%253DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%2526affilsrc

%253Dapi","standardShipRate":0.0,"marketplace":false,"modelNu

mber":"MKHL2LL/A","productUrl":"http://c.affil.walmart.com/t/

api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FApple-iPod-

touch-64GB-6th-Generation-Latest-Model-Assorted-Colors

%2F46088111%3Faffp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","customerRating":"4.351","numReviews":57,"cus

tomerRatingImage":"http://i2.walmartimages.com/i/CustRating/4

_4.gif","categoryNode":"3944_96469_1231508","bundle":false,"s

tock":"Available","addToCartUrl":"http://c.affil.walmart.com/

t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart

%3Fitems

%3D46088111%7C1%26affp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","affiliateAddToCartUrl":"http://linksynergy.w

almart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart

%252FaddToCart%253Fitems

%253D46088111%257C1%2526affp1%253DkZWWK28HYe3THWF5eR0beb_mHYx

jnc-b3TOUal__uQ0%2526affilsrc%253Dapi","giftOptions":

{"allowGiftWrap":false,"allowGiftMessage":false,"allowGiftRec

eipt":false},"imageEntities":

[{"thumbnailImage":"https://i5.walmartimages.com/asr/41cfb369

-ebbd-48f5-b81d-

1f9794f98c83_1.3152b48ae8fd3ade40627edafe5c341a.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/41cfb369-ebbd-48f5-b81d-

1f9794f98c83_1.3152b48ae8fd3ade40627edafe5c341a.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/41cfb369-ebbd-48f5-b81d-

1f9794f98c83_1.3152b48ae8fd3ade40627edafe5c341a.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/7123190b-

9d3d-4a39-a2dd-

597703dbad3a_1.2aaf9e6bc68ab25c1d027c9143fed00b.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/7123190b-9d3d-4a39-a2dd-

597703dbad3a_1.2aaf9e6bc68ab25c1d027c9143fed00b.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/7123190b-9d3d-4a39-a2dd-

597703dbad3a_1.2aaf9e6bc68ab25c1d027c9143fed00b.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/5fdb56f0

-78f9-4e95-a430-

9a54437066a6_1.b2150b16f8dc4c9a57c389c0745b2287.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/5fdb56f0-78f9-4e95-a430-

9a54437066a6_1.b2150b16f8dc4c9a57c389c0745b2287.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/5fdb56f0-78f9-4e95-a430-

9a54437066a6_1.b2150b16f8dc4c9a57c389c0745b2287.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/a964e523

-d6f8-4b3a-9217-

aa619645f28d_1.45d8fa70b5390b6c1a4b084f7cf0f40b.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/a964e523-d6f8-4b3a-9217-

aa619645f28d_1.45d8fa70b5390b6c1a4b084f7cf0f40b.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/a964e523-d6f8-4b3a-9217-

aa619645f28d_1.45d8fa70b5390b6c1a4b084f7cf0f40b.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/6addc021

-c4d5-4eb1-a09e-

b9a4848ad9fe_1.514fe44ccd2b87a53e5ec156918d38e6.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/6addc021-c4d5-4eb1-a09e-

b9a4848ad9fe_1.514fe44ccd2b87a53e5ec156918d38e6.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/6addc021-c4d5-4eb1-a09e-

b9a4848ad9fe_1.514fe44ccd2b87a53e5ec156918d38e6.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/9e981d92

-51df-489c-a3ff-

d3c10bd26d2e_1.6d03fb8c213e531537d60588d6529f4b.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/9e981d92-51df-489c-a3ff-

d3c10bd26d2e_1.6d03fb8c213e531537d60588d6529f4b.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/9e981d92-51df-489c-a3ff-

d3c10bd26d2e_1.6d03fb8c213e531537d60588d6529f4b.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/d364771d-

6954-44bc-a9fe-

19168da8e618_1.b5c2c953db103d317ac0b2bf307c9b99.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/d364771d-6954-44bc-a9fe-

19168da8e618_1.b5c2c953db103d317ac0b2bf307c9b99.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/d364771d-6954-44bc-a9fe-

19168da8e618_1.b5c2c953db103d317ac0b2bf307c9b99.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"PRIMAR

Y"}],"offerType":"ONLINE_ONLY","isTwoDayShippingEligible":tru

e,"availableOnline":true},

{"itemId":42608106,"parentItemId":42608106,"name":"Apple iPod 

nano 16GB, Assorted 

Colors","msrp":145.0,"salePrice":139.99,"upc":"888462471756",

"categoryPath":"Electronics/Portable Audio/Apple iPods/iPod 

Nano","shortDescription":"&lt;p&gt;The Apple iPod Nano comes 

in five stunning Assorted Colors. It is designed to provide 

hours of entertainment with maximum portability. This 16GB 

iPod nano has a clear multi-touch display that lets you see 

more of the things that you love. It has a built-in FM radio 

as well as support for Fitness Walk + Run and Nike+. This 

Bluetooth iPod nano provides up to 30 hours of audio 

playback. Plug in a pair of ear buds or headphones to enjoy 

your favorite song lists. It also provides access to your 

videos and your photos. It has plenty of storage space for 

all of your apps and 

media.&lt;br&gt;&lt;/p&gt;","longDescription":"&lt;b&gt;&lt;b

r&gt;Apple iPod Nano 16GB, Assorted 

Colors:&lt;br&gt;&lt;/b&gt;&lt;ul&gt;&lt;li&gt;2.5&quot; 

multi-touch display1&lt;/li&gt;&lt;li&gt;Bluetooth iPod nano 

plays FM radio and video&lt;/li&gt;&lt;li&gt;Built-in 

pedometer and Nike+&lt;/li&gt;&lt;li&gt;16GB iPod nano 

features Bluetooth 4.0&lt;/li&gt;&lt;li&gt;Up to 30 hours 

audio playback2&lt;/li&gt;&lt;li&gt;Available colors: space 

gray, pink, blue, gold, white and 

silver&lt;/li&gt;&lt;/ul&gt; &lt;b&gt;Legal:&lt;/b&gt; 

&lt;br&gt;&lt;ul&gt;&lt;li&gt;iPod models are not available 

in all colors at all resellers&lt;/li&gt;&lt;li&gt;1 Display 

size is measured diagonally&lt;/li&gt;&lt;li&gt;2 

Rechargeable batteries have a limited number of charge cycles 

and may eventually need to be replaced. Battery life and 

number of charge cycles vary by use and 

settings&lt;/li&gt;&lt;li&gt;See www.apple.com/batteries for 

more information&lt;/li&gt;&lt;/ul&gt;&lt;br&gt; &lt;br&gt; 

TM and &copy; 2015 Apple Inc. All rights reserved.&lt;br&gt; 

&lt;br&gt;","thumbnailImage":"https://i5.walmartimages.com/as

r/8b9148da-b519-4eb1-8d7a-

81f18e3f37c1_1.6dcfeddc8ca5a562185364d8a28288e7.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/8b9148da-b519-4eb1-8d7a-

81f18e3f37c1_1.6dcfeddc8ca5a562185364d8a28288e7.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/8b9148da-b519-4eb1-8d7a-

81f18e3f37c1_1.6dcfeddc8ca5a562185364d8a28288e7.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","productTrackingUrl"

:"http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip

%252FApple-iPod-nano-16GB-Assorted-Colors

%252F42608106%253Faffp1%253DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%2526affilsrc

%253Dapi","standardShipRate":0.0,"marketplace":false,"modelNu

mber":"MKN52LL/A","productUrl":"http://c.affil.walmart.com/t/

api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FApple-iPod-

nano-16GB-Assorted-Colors

%2F42608106%3Faffp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","customerRating":"4.412","numReviews":801,"cu

stomerRatingImage":"http://i2.walmartimages.com/i/CustRating/

4_4.gif","categoryNode":"3944_96469_1231508","bundle":false,"

stock":"Available","addToCartUrl":"http://c.affil.walmart.com

/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart

%3Fitems

%3D42608106%7C1%26affp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","affiliateAddToCartUrl":"http://linksynergy.w

almart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart

%252FaddToCart%253Fitems

%253D42608106%257C1%2526affp1%253DkZWWK28HYe3THWF5eR0beb_mHYx

jnc-b3TOUal__uQ0%2526affilsrc%253Dapi","giftOptions":

{"allowGiftWrap":false,"allowGiftMessage":false,"allowGiftRec

eipt":false},"imageEntities":

[{"thumbnailImage":"https://i5.walmartimages.com/asr/88978ad0

-f31b-484c-8ede-

22343517aacf_1.67ac3465f3c1344792e2154dee912f5f.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/88978ad0-f31b-484c-8ede-

22343517aacf_1.67ac3465f3c1344792e2154dee912f5f.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/88978ad0-f31b-484c-8ede-

22343517aacf_1.67ac3465f3c1344792e2154dee912f5f.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/7d3812a2

-9e3f-45c2-95a9-

a896eeeebcad_1.97fb5fbb8265767bfe639755fac1c364.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/7d3812a2-9e3f-45c2-95a9-

a896eeeebcad_1.97fb5fbb8265767bfe639755fac1c364.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/7d3812a2-9e3f-45c2-95a9-

a896eeeebcad_1.97fb5fbb8265767bfe639755fac1c364.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/4a0f05f5

-cd4f-464d-bbea-

e083a1a53600_1.4318c5851d75bbe5ab7cd6e320dbbba4.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/4a0f05f5-cd4f-464d-bbea-

e083a1a53600_1.4318c5851d75bbe5ab7cd6e320dbbba4.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/4a0f05f5-cd4f-464d-bbea-

e083a1a53600_1.4318c5851d75bbe5ab7cd6e320dbbba4.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/50b494a6

-6033-49b6-adf6-

aee05ec1ad79_1.dc46c4a8ed96f7a9f4add72b9b99f52b.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/50b494a6-6033-49b6-adf6-

aee05ec1ad79_1.dc46c4a8ed96f7a9f4add72b9b99f52b.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/50b494a6-6033-49b6-adf6-

aee05ec1ad79_1.dc46c4a8ed96f7a9f4add72b9b99f52b.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/87e3b944

-8d04-4c48-b77e-

820de426d84e_1.4f6e9b92373ef9e176a12bb8b0a8160a.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/87e3b944-8d04-4c48-b77e-

820de426d84e_1.4f6e9b92373ef9e176a12bb8b0a8160a.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/87e3b944-8d04-4c48-b77e-

820de426d84e_1.4f6e9b92373ef9e176a12bb8b0a8160a.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/99bc07d0

-2fe1-437c-8d7f-

e7f3be508a70_1.624ba8166880ad766e33f443af0021a8.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/99bc07d0-2fe1-437c-8d7f-

e7f3be508a70_1.624ba8166880ad766e33f443af0021a8.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/99bc07d0-2fe1-437c-8d7f-

e7f3be508a70_1.624ba8166880ad766e33f443af0021a8.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/c0f6dd4f-

5600-42e7-baf5-

a9164a207abf_1.fcd007afc34b1640a6f61b35276189fe.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/c0f6dd4f-5600-42e7-baf5-

a9164a207abf_1.fcd007afc34b1640a6f61b35276189fe.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/c0f6dd4f-5600-42e7-baf5-

a9164a207abf_1.fcd007afc34b1640a6f61b35276189fe.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/737ca70f-

6e4c-4099-aa4c-

4f6156cd7f79_1.e84d2fdc3c7bedd12f691ce690588c57.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/737ca70f-6e4c-4099-aa4c-

4f6156cd7f79_1.e84d2fdc3c7bedd12f691ce690588c57.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/737ca70f-6e4c-4099-aa4c-

4f6156cd7f79_1.e84d2fdc3c7bedd12f691ce690588c57.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/1fbb27d0

-a13b-45cf-a16d-

590f626c9afe_1.bce6d17b0b5e3ec378ca620cf87bb4e1.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/1fbb27d0-a13b-45cf-a16d-

590f626c9afe_1.bce6d17b0b5e3ec378ca620cf87bb4e1.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/1fbb27d0-a13b-45cf-a16d-

590f626c9afe_1.bce6d17b0b5e3ec378ca620cf87bb4e1.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/cf71f166

-c098-4830-83ec-

dc74d02352bb_1.eecf629984999a8d887bc40372050ccb.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/cf71f166-c098-4830-83ec-

dc74d02352bb_1.eecf629984999a8d887bc40372050ccb.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/cf71f166-c098-4830-83ec-

dc74d02352bb_1.eecf629984999a8d887bc40372050ccb.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/d61fe210

-e792-4656-8ebd-

9298a35e49cf_1.4a9be9eba10a59668e43e050ee6b7a5c.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/d61fe210-e792-4656-8ebd-

9298a35e49cf_1.4a9be9eba10a59668e43e050ee6b7a5c.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/d61fe210-e792-4656-8ebd-

9298a35e49cf_1.4a9be9eba10a59668e43e050ee6b7a5c.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/f8e7bda3

-23ac-46a3-ae89-

53e1128a6202_1.0daf02e6a06d4d407bec4e82be90a530.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/f8e7bda3-23ac-46a3-ae89-

53e1128a6202_1.0daf02e6a06d4d407bec4e82be90a530.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/f8e7bda3-23ac-46a3-ae89-

53e1128a6202_1.0daf02e6a06d4d407bec4e82be90a530.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/ef89ac4e-

f7fc-443b-ab6f-

3d70a37358a1_1.ff3ace4960a768b5825d700ed55a6793.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/ef89ac4e-f7fc-443b-ab6f-

3d70a37358a1_1.ff3ace4960a768b5825d700ed55a6793.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/ef89ac4e-f7fc-443b-ab6f-

3d70a37358a1_1.ff3ace4960a768b5825d700ed55a6793.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/32344519

-38ca-4105-9131-

92da55693476_1.47103934b3a83703083728bcc2e9e0dd.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/32344519-38ca-4105-9131-

92da55693476_1.47103934b3a83703083728bcc2e9e0dd.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/32344519-38ca-4105-9131-

92da55693476_1.47103934b3a83703083728bcc2e9e0dd.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/e968446a-

68c8-44b1-83dd-

99963ce4634b_1.96488c9e38615849090a01f0657099a6.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/e968446a-68c8-44b1-83dd-

99963ce4634b_1.96488c9e38615849090a01f0657099a6.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/e968446a-68c8-44b1-83dd-

99963ce4634b_1.96488c9e38615849090a01f0657099a6.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/a424e773

-64cf-4f82-827f-

17ea511c91d3_1.db044ed047ca3494d41f7165a1fe37d9.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/a424e773-64cf-4f82-827f-

17ea511c91d3_1.db044ed047ca3494d41f7165a1fe37d9.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/a424e773-64cf-4f82-827f-

17ea511c91d3_1.db044ed047ca3494d41f7165a1fe37d9.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/485aeec0

-5950-4d6c-92c4-

68cb4ad6acfc_1.57dd66c867e934a86ace0ffb05befd87.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/485aeec0-5950-4d6c-92c4-

68cb4ad6acfc_1.57dd66c867e934a86ace0ffb05befd87.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/485aeec0-5950-4d6c-92c4-

68cb4ad6acfc_1.57dd66c867e934a86ace0ffb05befd87.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/688daea8

-b775-478a-ac54-

f8a004a58f26_1.1698ecf5c009e108e6fb96db0a557c0f.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/688daea8-b775-478a-ac54-

f8a004a58f26_1.1698ecf5c009e108e6fb96db0a557c0f.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/688daea8-b775-478a-ac54-

f8a004a58f26_1.1698ecf5c009e108e6fb96db0a557c0f.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/da401ed5

-2156-4e12-8e58-

558dc4254664_1.eabc9b04073f81eb246fe9030f362e15.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/da401ed5-2156-4e12-8e58-

558dc4254664_1.eabc9b04073f81eb246fe9030f362e15.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/da401ed5-2156-4e12-8e58-

558dc4254664_1.eabc9b04073f81eb246fe9030f362e15.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/0e67bded-

0d22-4d0c-ac69-

5a0dfb2938ef_1.27ec57f99640b5c4aea28738650e9f19.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/0e67bded-0d22-4d0c-ac69-

5a0dfb2938ef_1.27ec57f99640b5c4aea28738650e9f19.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/0e67bded-0d22-4d0c-ac69-

5a0dfb2938ef_1.27ec57f99640b5c4aea28738650e9f19.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/8b9148da-

b519-4eb1-8d7a-

81f18e3f37c1_1.6dcfeddc8ca5a562185364d8a28288e7.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/8b9148da-b519-4eb1-8d7a-

81f18e3f37c1_1.6dcfeddc8ca5a562185364d8a28288e7.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/8b9148da-b519-4eb1-8d7a-

81f18e3f37c1_1.6dcfeddc8ca5a562185364d8a28288e7.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"PRIMAR

Y"}],"offerType":"ONLINE_AND_STORE","isTwoDayShippingEligible

":true,"availableOnline":true},

{"itemId":21805465,"parentItemId":21805465,"name":"Apple iPod 

touch 4th Generation 16GB (Space Gray or 

Silver)","msrp":299.989990234375,"salePrice":99.0,"upc":"8859

09684250","categoryPath":"Electronics/Portable Audio/Apple 

iPods/iPod Touch","shortDescription":"The world's most 

popular portable gaming device is now even more fun. Listen 

to your favorite albums. Send text messages over Wi-Fi with 

iMessage. Record HD video. Make FaceTime calls. iPod touch 

even works with iCloud, which stores your content and pushes 

it to all your 

devices.","longDescription":"&lt;br&gt;&lt;b&gt;Apple iPod 

touch 16GB (4th Gen), Black:&lt;/b&gt;&lt;ul&gt;&lt;li 

style=&quot;list-style: 

none&quot;&gt;&lt;/li&gt;&lt;li&gt;Available in both black 

and white&lt;/li&gt;&lt;li&gt;Free text messaging over Wi-Fi 

with iMessage&lt;/li&gt;&lt;li&gt;Front and back cameras for 

HD video recording&lt;/li&gt;&lt;li&gt;FaceTime video 

calling&lt;/li&gt;&lt;li&gt;3.5'' screen 

&lt;/li&gt;&lt;li&gt;iOS 5 with over 200 new 

features&lt;/li&gt;&lt;li&gt;Game Center with more than 60 

million members&lt;/li&gt;&lt;li&gt;App Store with more than 

500,000 apps, including over 100,000 games and entertainment 

titles&lt;/li&gt;&lt;li&gt;iTunes Store with millions of 

songs, movies, and TV shows&lt;/li&gt;&lt;li&gt;iCloud, which 

wirelessly pushes your content to all your 

devices4&lt;/li&gt;&lt;li&gt;Rich HTML 

email&lt;/li&gt;&lt;li&gt;Safari web 

browser&lt;/li&gt;&lt;li&gt;Wi-Fi and Bluetooth wireless 

technology&lt;/li&gt;&lt;li&gt;Activation and setup over Wi-

Fi&lt;/li&gt;&lt;li&gt;Nike+ support built 

in&lt;/li&gt;&lt;li&gt;Apple 

Earphones&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;&lt;p&gt;&lt;font 

size=&quot;1px&quot;&gt;&lt;b&gt;Note:&lt;/b&gt;&lt;/font&gt;

&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;font 

size=&quot;1px&quot;&gt;Wi-Fi Internet access is required for 

some features; broadband recommended; fees may apply. Some 

features, applications, and services are not available in all 

areas. Application availability and pricing are subject to 

change.&lt;/font&gt;&lt;/li&gt;&lt;li&gt;&lt;font 

size=&quot;1px&quot;&gt;1GB = 1 billion bytes; actual 

formatted capacity 

less.&lt;/font&gt;&lt;/li&gt;&lt;li&gt;&lt;font 

size=&quot;1px&quot;&gt;Requires a FaceTime-enabled Mac with 

an Internet connection or a FaceTime-enabled iOS device with 

a Wi-Fi connection. Not available in all 

areas.&lt;/font&gt;&lt;/li&gt;&lt;li&gt;&lt;font 

size=&quot;1px&quot;&gt;App count refers to the total number 

of apps 

worldwide.&lt;/font&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;","thu

mbnailImage":"https://i5.walmartimages.com/asr/df7d9dc9-

293c-44bc-890d-

608b08fa5c83_1.0af330a682aa5e6a4ca9dd320725eefd.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/df7d9dc9-293c-44bc-890d-

608b08fa5c83_1.0af330a682aa5e6a4ca9dd320725eefd.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/df7d9dc9-293c-44bc-890d-

608b08fa5c83_1.0af330a682aa5e6a4ca9dd320725eefd.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","productTrackingUrl"

:"http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=http%253A%252F%252Fwww.walmart.com%252Fip

%252F21805465%253Faffp1%253DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%2526affilsrc

%253Dapi","standardShipRate":0.0,"marketplace":true,"modelNum

ber":"ME178LL/A","sellerInfo":"Beach 

Camera","productUrl":"http://c.affil.walmart.com/t/api02?

l=http%3A%2F%2Fwww.walmart.com%2Fip

%2F21805465%3Faffp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","bundle":false,"stock":"Not 

available","addToCartUrl":"http://c.affil.walmart.com/t/api02

?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems

%3D21805465%7C1%26affp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","affiliateAddToCartUrl":"http://linksynergy.w

almart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart

%252FaddToCart%253Fitems

%253D21805465%257C1%2526affp1%253DkZWWK28HYe3THWF5eR0beb_mHYx

jnc-b3TOUal__uQ0%2526affilsrc

%253Dapi","freeShippingOver50Dollars":false,"imageEntities":

[{"thumbnailImage":"https://i5.walmartimages.com/asr/c84466ec

-4957-46d9-ae08-

18b9e2a1c24b_1.f4176b2be4f64bec0a1570d8f0bed936.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/c84466ec-4957-46d9-ae08-

18b9e2a1c24b_1.f4176b2be4f64bec0a1570d8f0bed936.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/c84466ec-4957-46d9-ae08-

18b9e2a1c24b_1.f4176b2be4f64bec0a1570d8f0bed936.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/df7d9dc9

-293c-44bc-890d-

608b08fa5c83_1.0af330a682aa5e6a4ca9dd320725eefd.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/df7d9dc9-293c-44bc-890d-

608b08fa5c83_1.0af330a682aa5e6a4ca9dd320725eefd.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/df7d9dc9-293c-44bc-890d-

608b08fa5c83_1.0af330a682aa5e6a4ca9dd320725eefd.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"PRIMAR

Y"}],"offerType":"ONLINE_ONLY","availableOnline":false},

{"itemId":42608125,"parentItemId":42608125,"name":"Apple iPod 

touch 32GB, Assorted 

Colors","msrp":246.85,"salePrice":239.99,"upc":"888462353151"

,"categoryPath":"Electronics/Portable Audio/Apple iPods/iPod 

Touch","shortDescription":"The Apple iPod Touch 32GB is 

loaded with features. It is the ideal solution for carrying 

your music collection in your pocket. The device comes in 

five stunning colors, giving you plenty of options to choose 

from. Listen to your favorite songs from Apple Music and 

iTunes. It also offers the ultimate mobile gaming experience 

for versatility. Take outstanding photos and videos with the 

new 8MP iSight camera and make video calls with the improved 

FaceTime HD camera. Use the Bluetooth iPod Touch to stay 

connected with messages and to use the most popular social 

networking apps. The 4&quot; retina display provides a 

quality viewing experience. It offers 1080p HD video 

recording and up to 40 hours of audio playback. With a sleek 

design and the ability to play your favorite tunes with just 

the touch of a button, it is wonderful for users on-the-go. 

It is equipped with 802.11ac Wi-Fi for Internet availability 

almost anywhere and Bluetooth 4.1 for hands-free use or 

pairing with other 

devices.","longDescription":"&lt;ul&gt;&lt;li&gt;&lt;p&gt;&lt

;br&gt;&lt;strong&gt;&lt;br&gt;Apple iPod touch 32GB, 

Assorted 

Colors:&lt;/strong&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;The 

Bluetooth iPod Touch has a 4&quot; Retina 

display&lt;/li&gt;&lt;li&gt;A8 with M8 motion co-

processor&lt;/li&gt;&lt;li&gt;8MP iSight and FaceTime 

cameras&lt;/li&gt;&lt;li&gt;1080p HD video 

recording&lt;/li&gt;&lt;li&gt;802.11ac Wi-Fi and Bluetooth 

4.1&lt;/li&gt;&lt;li&gt;The 8MP iSight camera iPod features 

up to 40 hours audio 

playback&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;strong&gt;Legal&lt

;/strong&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;iPod models are not 

available in all colors at all 

resellers&lt;/li&gt;&lt;li&gt;1. Membership required. 

Requires initial sign-up. At the end of the trial period, the 

membership will automatically renew and payment method will 

be charged on a monthly basis until auto renewal is turned 

off in account settings&lt;/li&gt;&lt;li&gt;2. FaceTime 

calling requires a FaceTime-enabled device with a Wi-Fi 

connection&lt;/li&gt;&lt;li&gt;3. Display size is measured 

diagonally&lt;/li&gt;&lt;li&gt;4. Rechargeable batteries have 

a limited number of charge cycles and may eventually need to 

be replaced. Battery life and number of charge cycles vary by 

use and settings. See www.apple.com/batteries for more 

information&lt;/li&gt;&lt;li&gt;TM and 

&amp;&lt;/li&gt;&lt;li&gt;copy&lt;/li&gt;&lt;/ul&gt;&lt;/li&g

t;&lt;/ul&gt;","thumbnailImage":"https://i5.walmartimages.com

/asr/3546627b-cf1c-4b7a-b6fc-

d7fd3d52c02a_1.b5c2c953db103d317ac0b2bf307c9b99.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/3546627b-cf1c-4b7a-b6fc-

d7fd3d52c02a_1.b5c2c953db103d317ac0b2bf307c9b99.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/3546627b-cf1c-4b7a-b6fc-

d7fd3d52c02a_1.b5c2c953db103d317ac0b2bf307c9b99.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","productTrackingUrl"

:"http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip

%252FApple-iPod-touch-32GB-Assorted-Colors

%252F42608125%253Faffp1%253DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%2526affilsrc

%253Dapi","standardShipRate":0.0,"marketplace":false,"modelNu

mber":"MKJ02LL/A","productUrl":"http://c.affil.walmart.com/t/

api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FApple-iPod-

touch-32GB-Assorted-Colors

%2F42608125%3Faffp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","customerRating":"4.565","numReviews":45,"cus

tomerRatingImage":"http://i2.walmartimages.com/i/CustRating/4

_6.gif","categoryNode":"3944_96469_1231508","bundle":false,"s

tock":"Available","addToCartUrl":"http://c.affil.walmart.com/

t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart

%3Fitems

%3D42608125%7C1%26affp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","affiliateAddToCartUrl":"http://linksynergy.w

almart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart

%252FaddToCart%253Fitems

%253D42608125%257C1%2526affp1%253DkZWWK28HYe3THWF5eR0beb_mHYx

jnc-b3TOUal__uQ0%2526affilsrc%253Dapi","giftOptions":

{"allowGiftWrap":false,"allowGiftMessage":false,"allowGiftRec

eipt":false},"imageEntities":

[{"thumbnailImage":"https://i5.walmartimages.com/asr/3546627b

-cf1c-4b7a-b6fc-

d7fd3d52c02a_1.b5c2c953db103d317ac0b2bf307c9b99.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/3546627b-cf1c-4b7a-b6fc-

d7fd3d52c02a_1.b5c2c953db103d317ac0b2bf307c9b99.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/3546627b-cf1c-4b7a-b6fc-

d7fd3d52c02a_1.b5c2c953db103d317ac0b2bf307c9b99.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"PRIMAR

Y"}],"offerType":"ONLINE_AND_STORE","isTwoDayShippingEligible

":true,"availableOnline":true},

{"itemId":21805445,"parentItemId":21805445,"name":"Apple iPod 

touch 32GB  (Assorted 

Colors)","msrp":249.0,"salePrice":219.83,"upc":"885909456017"

,"categoryPath":"Electronics/Portable Audio/Apple iPods/iPod 

Touch","shortDescription":"iPod touch is more fun than ever. 

It has an ultrathin design, a 4-inch Retina display, a 5MP 

iSight camera, iOS 7, Siri, iMessage, FaceTime, iTunes and 

the App Store, iTunes Radio, and 

more.","longDescription":"&lt;br&gt;&lt;b&gt;Key 

Features:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;Ultrathin design 

available in five gorgeous colors&lt;/li&gt;&lt;li&gt;4-inch 

Retina display&lt;/li&gt;&lt;li&gt;Apple A5 

chip&lt;/li&gt;&lt;li&gt;5-megapixel iSight camera with 1080p 

HD video recording&lt;/li&gt;&lt;li&gt;FaceTime HD camera 

with 1.2-megapixel photos and 720p HD video 

recording&lt;/li&gt;&lt;li&gt;iOS 7 with features like 

Control Center, AirDrop, smarter multitasking, and iTunes 

Radio&lt;/li&gt;&lt;li&gt;Siri intelligent 

assistant&lt;/li&gt;&lt;li&gt;iTunes Store with millions of 

songs, and thousands of movies and TV 

shows&lt;/li&gt;&lt;li&gt;App Store with more than 1,000,000 

apps, including over 100,000 

games&lt;sup&gt;1&lt;/sup&gt;&lt;/li&gt;&lt;li&gt;Game Center 

with millions of gamers&lt;/li&gt;&lt;li&gt;Free text 

messaging over Wi-Fi with iMessage&lt;/li&gt;&lt;li&gt;Rich 

HTML email and Safari web browser&lt;/li&gt;&lt;li&gt;AirPlay 

and AirPlay Mirroring&lt;/li&gt;&lt;li&gt;40 hours of music 

playback, 8 hours of video 

playback&lt;sup&gt;2&lt;/sup&gt;&lt;/li&gt;&lt;li&gt;iPod 

touch loop (sold separately for 16GB 

model)&lt;/li&gt;&lt;li&gt;Apple 

EarPods&lt;/li&gt;&lt;li&gt;16GB, 32GB, and 64GB 

capacities&lt;sup&gt;3&lt;/sup&gt;&lt;/li&gt;&lt;/ul&gt;&lt;b

r&gt;iPod models are not available in all colors at all 

resellers. iPod touch loop is included with 32GB and 64GB 

models only. Wi-Fi Internet access is required for some 

features; broadband recommended; fees may apply. Some 

features, applications, and services are not available in all 

areas. Application availability and pricing are subject to 

change. &lt;br&gt;&lt;br&gt;&lt;sup&gt;1&lt;/sup&gt;App count 

refers to the total number of apps worldwide. Not all content 

is available in all countries. 

&lt;br&gt;&lt;sup&gt;2&lt;/sup&gt;Rechargeable batteries have 

a limited number of charge cycles and may eventually need to 

be replaced. Battery life and number of charge cycles vary by 

use and settings. See www.apple.com/batteries for more 

information. &lt;br&gt;&lt;sup&gt;3&lt;/sup&gt;1GB = 1 

billion bytes; actual formatted capacity less.Accessories and 

Related Products&lt;ul 

class=&quot;noindent&quot;&gt;&lt;li&gt;Apple EarPods with 

Remote and Mic&lt;/li&gt;&lt;li&gt;Apple Lightning to USB 

Cable&lt;/li&gt;&lt;li&gt;Apple Lightning to 30-pin 

Adapter&lt;/li&gt;&lt;li&gt;Apple Lightning to 30-pin Adapter 

(0.2 m)&lt;/li&gt;&lt;li&gt;AppleCare+ for iPod touch/iPod 

classic?

&lt;/li&gt;&lt;/ul&gt;","thumbnailImage":"https://i5.walmarti

mages.com/asr/1461c34c-608d-4786-a189-

7d012a78b2f8_1.ed97d17965eead93544d05733a8e2498.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/1461c34c-608d-4786-a189-

7d012a78b2f8_1.ed97d17965eead93544d05733a8e2498.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/1461c34c-608d-4786-a189-

7d012a78b2f8_1.ed97d17965eead93544d05733a8e2498.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","productTrackingUrl"

:"http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip

%252FApple-iPod-touch-32GB-Assorted-Colors

%252F21805445%253Faffp1%253DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%2526affilsrc

%253Dapi","standardShipRate":0.0,"marketplace":true,"modelNum

ber":"MC903LL/A","sellerInfo":"eLGeo 

Electronics","productUrl":"http://c.affil.walmart.com/t/api02

?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FApple-iPod-touch-

32GB-Assorted-Colors

%2F21805445%3Faffp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","customerRating":"4.644","numReviews":514,"cu

stomerRatingImage":"http://i2.walmartimages.com/i/CustRating/

4_6.gif","categoryNode":"3944_96469_1231508","bundle":false,"

stock":"Not 

available","addToCartUrl":"http://c.affil.walmart.com/t/api02

?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems

%3D21805445%7C1%26affp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","affiliateAddToCartUrl":"http://linksynergy.w

almart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart

%252FaddToCart%253Fitems

%253D21805445%257C1%2526affp1%253DkZWWK28HYe3THWF5eR0beb_mHYx

jnc-b3TOUal__uQ0%2526affilsrc

%253Dapi","freeShippingOver50Dollars":false,"imageEntities":

[{"thumbnailImage":"https://i5.walmartimages.com/asr/d4298350

-ba93-42b0-8f83-

075884231795_1.403760c37c8321db82014e31fc3686d0.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/d4298350-ba93-42b0-8f83-

075884231795_1.403760c37c8321db82014e31fc3686d0.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/d4298350-ba93-42b0-8f83-

075884231795_1.403760c37c8321db82014e31fc3686d0.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/bdb7ac9c-

a673-49c6-b036-

d2b0e9f50c2a_1.8c9184252ea31d9773686032e9292620.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/bdb7ac9c-a673-49c6-b036-

d2b0e9f50c2a_1.8c9184252ea31d9773686032e9292620.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/bdb7ac9c-a673-49c6-b036-

d2b0e9f50c2a_1.8c9184252ea31d9773686032e9292620.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/1461c34c-

608d-4786-a189-

7d012a78b2f8_1.ed97d17965eead93544d05733a8e2498.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/1461c34c-608d-4786-a189-

7d012a78b2f8_1.ed97d17965eead93544d05733a8e2498.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/1461c34c-608d-4786-a189-

7d012a78b2f8_1.ed97d17965eead93544d05733a8e2498.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"PRIMAR

Y"}],"offerType":"ONLINE_ONLY","availableOnline":false},

{"itemId":25174174,"parentItemId":25174174,"name":"Apple iPod 

touch 5th Generation Space Gray and 

Silver","msrp":259.98,"salePrice":179.0,"upc":"885909728947",

"categoryPath":"Electronics/Portable Audio/Apple iPods/iPod 

Touch","shortDescription":"With an ultrathin design, a 

4&quot; Retina display, iTunes and the App Store, Siri, 

iMessage, FaceTime, Game Center, and more - it's the most fun 

iPod touch ever. This iPod touch features a 6mm ultrathin 

design and brilliant, 4&quot; Retina display. The front-

facing FaceTime HD camera lets you make video calls, record 

HD video, and capture self-portraits. Discover music, movies, 

and more from the iTunes Store, or browse apps and games from 

the App Store. And with iOS 6 - the world's most advanced 

mobile operating system - you get Siri, iMessage, Facebook 

integration, Game Center, and 

more.","longDescription":"&lt;br&gt; &lt;b&gt;Apple iPod 

touch 5th Generation, Space Gray and 

Silver:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;Ultrathin 

design&lt;/li&gt;&lt;li&gt;4&quot; Retina 

display&lt;/li&gt;&lt;li&gt;Apple A5 

chip&lt;/li&gt;&lt;li&gt;FaceTime HD camera with 1.2-

megapixel photos and 720p HD video 

recording&lt;/li&gt;&lt;li&gt;iOS 6 with features like Siri, 

Passbook, and Facebook integration&lt;/li&gt;&lt;li&gt;iTunes 

Store with millions of songs, and thousands of movies and TV 

shows&lt;/li&gt;&lt;li&gt;App Store with more than 850,000 

apps, including over 100,000 games *&lt;/li&gt;&lt;li&gt;Game 

Center with millions of gamers&lt;/li&gt;&lt;li&gt;Free text 

messaging over Wi-Fi with iMessage&lt;/li&gt;&lt;li&gt;Rich 

HTML email and Safari web browser&lt;/li&gt;&lt;li&gt;AirPlay 

and AirPlay Mirroring&lt;/li&gt;&lt;li&gt;40 hours of music 

playback, 8 hours of video playback 

**&lt;/li&gt;&lt;li&gt;Apple EarPods&lt;/li&gt;&lt;li&gt;16GB 

capacity ***&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;Wi-Fi Internet 

access is required for some features - broadband recommended 

- fees may apply. Some features, applications, and services 

are not available in all areas. Application availability and 

pricing are subject to change.&lt;br&gt;&lt;br&gt; * App 

count refers to the total number of apps worldwide. Not all 

content is available in all countries. &lt;br&gt; ** 

Rechargeable batteries have a limited number of charge cycles 

and may eventually need to be replaced. Battery life and 

number of charge cycles vary by use and settings. See 

www.apple.com/batteries for more information. &lt;br&gt; *** 

1GB = 1 billion bytes - actual formatted capacity is 

less.","thumbnailImage":"https://i5.walmartimages.com/asr/95c

06e89-7222-4057-94c5-

776d8b88d847_1.7eff452cf58e742ada458e8a98e5ad44.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/95c06e89-7222-4057-94c5-

776d8b88d847_1.7eff452cf58e742ada458e8a98e5ad44.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/95c06e89-7222-4057-94c5-

776d8b88d847_1.7eff452cf58e742ada458e8a98e5ad44.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","productTrackingUrl"

:"http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip

%252FApple-iPod-touch-5th-Generation-Space-Gray-and-Silver

%252F25174174%253Faffp1%253DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%2526affilsrc

%253Dapi","standardShipRate":0.0,"marketplace":false,"modelNu

mber":"iPod 

Touch","productUrl":"http://c.affil.walmart.com/t/api02?

l=https%3A%2F%2Fwww.walmart.com%2Fip%2FApple-iPod-touch-5th-

Generation-Space-Gray-and-Silver

%2F25174174%3Faffp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","customerRating":"3.824","numReviews":238,"cu

stomerRatingImage":"http://i2.walmartimages.com/i/CustRating/

3_8.gif","categoryNode":"3944_96469_1231508","bundle":false,"

stock":"Available","addToCartUrl":"http://c.affil.walmart.com

/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart

%3Fitems

%3D25174174%7C1%26affp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","affiliateAddToCartUrl":"http://linksynergy.w

almart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart

%252FaddToCart%253Fitems

%253D25174174%257C1%2526affp1%253DkZWWK28HYe3THWF5eR0beb_mHYx

jnc-b3TOUal__uQ0%2526affilsrc%253Dapi","giftOptions":

{"allowGiftWrap":false,"allowGiftMessage":false,"allowGiftRec

eipt":false},"imageEntities":

[{"thumbnailImage":"https://i5.walmartimages.com/asr/5190b388

-1327-4a5a-a4bf-

dafabe4147da_1.f02dcfd5fda302bd5a664fa40bf34af1.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/5190b388-1327-4a5a-a4bf-

dafabe4147da_1.f02dcfd5fda302bd5a664fa40bf34af1.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/5190b388-1327-4a5a-a4bf-

dafabe4147da_1.f02dcfd5fda302bd5a664fa40bf34af1.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/5a39fe8b-

fec1-4c6f-a350-

9b0ecb896a8c_1.8c504fe079a142e570797d51793f7fcd.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/5a39fe8b-fec1-4c6f-a350-

9b0ecb896a8c_1.8c504fe079a142e570797d51793f7fcd.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/5a39fe8b-fec1-4c6f-a350-

9b0ecb896a8c_1.8c504fe079a142e570797d51793f7fcd.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/95c06e89

-7222-4057-94c5-

776d8b88d847_1.7eff452cf58e742ada458e8a98e5ad44.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/95c06e89-7222-4057-94c5-

776d8b88d847_1.7eff452cf58e742ada458e8a98e5ad44.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/95c06e89-7222-4057-94c5-

776d8b88d847_1.7eff452cf58e742ada458e8a98e5ad44.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"PRIMAR

Y"}],"offerType":"ONLINE_AND_STORE","isTwoDayShippingEligible

":true,"availableOnline":true},

{"itemId":49650088,"parentItemId":49650088,"name":"Refurbishe

d Apple iPod nano 16GB, 

Blue","msrp":129.0,"salePrice":120.0,"upc":"813516025388","ca

tegoryPath":"Electronics/Portable Audio/Apple iPods/iPod 

Nano","shortDescription":"&lt;div style=&quot;margin-left: 

2em&quot;&gt;iPod nano comes in 5 stunning colors and is 

designed to provide hours of entertainment with maximum 

portability. Its 2.5-inch Multi-Touch display lets you see 

more of the music, photos, and videos you love1. And it has 

built-in FM radio as well as support for Fitness Walk + Run 

and Nike+.&lt;/div&gt;","longDescription":"&lt;ul&gt;&lt;li 

style=&quot;list-style: none&quot;&gt;&lt;b&gt;Key 

Features&lt;/b&gt;&lt;/li&gt;&lt;li&gt;2.5-inch Multi-Touch 

display1&lt;/li&gt;&lt;li&gt;FM radio &amp; 

video&lt;/li&gt;&lt;li&gt;Built-in pedometer &amp; Nike

+&lt;/li&gt;&lt;li&gt;Bluetooth 4.0&lt;/li&gt;&lt;li&gt;Up to 

30 hours audio playback2&lt;/li&gt;&lt;/ul&gt;&lt;div 

style=&quot;margin-left: 

2em&quot;&gt;&lt;b&gt;Legal&lt;/b&gt;&lt;br&gt;iPod models 

are not available in all colors at all resellers.&lt;br&gt;1 

Display size is measured diagonally.&lt;br&gt;2 Rechargeable 

batteries have a limited number of charge cycles and may 

eventually need to be replaced. Battery life and number of 

charge cycles vary by use and settings. 

See&lt;br&gt;www.apple.com/batteries for more 

information.&lt;br&gt;TM and &copy; 2015 Apple Inc. All 

rights reserved.&lt;/div&gt;&lt;ul&gt;&lt;li 

style=&quot;list-style: none&quot;&gt;&lt;b&gt;Key 

Features&lt;/b&gt;&lt;/li&gt;&lt;li&gt;2.5-inch Multi-Touch 

display1&lt;/li&gt;&lt;li&gt;FM radio &amp; 

video&lt;/li&gt;&lt;li&gt;Built-in pedometer &amp; Nike

+&lt;/li&gt;&lt;li&gt;Bluetooth 4.0&lt;/li&gt;&lt;li&gt;Up to 

30 hours audio playback2&lt;/li&gt;&lt;/ul&gt;&lt;div 

style=&quot;margin-left: 

2em&quot;&gt;&lt;b&gt;Legal&lt;/b&gt;&lt;br&gt;iPod models 

are not available in all colors at all resellers.&lt;br&gt;1 

Display size is measured diagonally.&lt;br&gt;2 Rechargeable 

batteries have a limited number of charge cycles and may 

eventually need to be replaced. Battery life and number of 

charge cycles vary by use and settings. 

See&lt;br&gt;www.apple.com/batteries for more 

information.&lt;br&gt;TM and &copy; 2015 Apple Inc. All 

rights 

reserved.&lt;/div&gt;","thumbnailImage":"https://i5.walmartim

ages.com/asr/eba24f2e-1bd2-4c64-b603-

cf0fe2194c93_1.455394d94237129b941ff9ac05ee7b4b.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/eba24f2e-1bd2-4c64-b603-

cf0fe2194c93_1.455394d94237129b941ff9ac05ee7b4b.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/eba24f2e-1bd2-4c64-b603-

cf0fe2194c93_1.455394d94237129b941ff9ac05ee7b4b.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","productTrackingUrl"

:"http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip

%252FRefurbished-Apple-iPod-nano-16GB-Blue

%252F49650088%253Faffp1%253DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%2526affilsrc

%253Dapi","standardShipRate":0.0,"marketplace":false,"modelNu

mber":"RBMKN02LL/A","productUrl":"http://c.affil.walmart.com/

t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FRefurbished-

Apple-iPod-nano-16GB-Blue

%2F49650088%3Faffp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","customerRating":"3.56","numReviews":25,"cust

omerRatingImage":"http://i2.walmartimages.com/i/CustRating/3_

6.gif","categoryNode":"3944_96469_1231508","bundle":false,"st

ock":"Available","addToCartUrl":"http://c.affil.walmart.com/t

/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart

%3Fitems

%3D49650088%7C1%26affp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","affiliateAddToCartUrl":"http://linksynergy.w

almart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart

%252FaddToCart%253Fitems

%253D49650088%257C1%2526affp1%253DkZWWK28HYe3THWF5eR0beb_mHYx

jnc-b3TOUal__uQ0%2526affilsrc%253Dapi","giftOptions":

{"allowGiftWrap":false,"allowGiftMessage":false,"allowGiftRec

eipt":false},"imageEntities":

[{"thumbnailImage":"https://i5.walmartimages.com/asr/eba24f2e

-1bd2-4c64-b603-

cf0fe2194c93_1.455394d94237129b941ff9ac05ee7b4b.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/eba24f2e-1bd2-4c64-b603-

cf0fe2194c93_1.455394d94237129b941ff9ac05ee7b4b.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/eba24f2e-1bd2-4c64-b603-

cf0fe2194c93_1.455394d94237129b941ff9ac05ee7b4b.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"PRIMAR

Y"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/522dc6a8

-28f7-4ea8-a645-

e3ed659c9c45_1.6cad340e08232bfe6a0b02e6aa1a2a69.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/522dc6a8-28f7-4ea8-a645-

e3ed659c9c45_1.6cad340e08232bfe6a0b02e6aa1a2a69.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/522dc6a8-28f7-4ea8-a645-

e3ed659c9c45_1.6cad340e08232bfe6a0b02e6aa1a2a69.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/54730e1b-

2546-4dab-9d86-

9dad4d3277c1_1.041f257a51526a5ddd214e78368fe0cd.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/54730e1b-2546-4dab-9d86-

9dad4d3277c1_1.041f257a51526a5ddd214e78368fe0cd.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/54730e1b-2546-4dab-9d86-

9dad4d3277c1_1.041f257a51526a5ddd214e78368fe0cd.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"}],"offerType":"ONLINE_ONLY","isTwoDayShippingEligible":t

rue,"availableOnline":true},

{"itemId":21805451,"parentItemId":21805451,"name":"Apple iPod 

nano 

16GB","msrp":149.99,"salePrice":112.9,"upc":"885909565078","c

ategoryPath":"Electronics/Portable Audio/Apple iPods/iPod 

Nano","shortDescription":"Listen to your favorite music and 

other audio wherever you go with the Apple iPod Nano 16GB. It 

is redesigned to be ultra-portable and has a larger 2.5&quot; 

multi-touch display for easier navigation of features to 

select songs, adjust volume and more. The device plays not 

only your stored music but also receives FM radio signals so 

you can hear your favorite local broadcasts. With 16GB of 

storage, the iPod nano multi-touch holds plenty of songs, as 

well as video. Bluetooth technology enables wireless pairing 

with portable speakers and other compatible devices. A 

built-in pedometer keeps track of fitness activity, such as 

steps and calories burned throughout the day. It also syncs 

to the Nike+ website to challenge friends. Made of anodized 

aluminum, the Apple iPod 16GB is available in a selection of 

colors. The rechargeable battery offers up to 30 hours of 

playback on a full charge for long periods of listening to 

music, audiobooks and more.","longDescription":"&lt;p&gt;A 

pair of Apple EarPods are also included and the device is 

compatible with both Macs and 

PCs.&lt;br&gt;&lt;b&gt;&lt;br&gt;Apple iPod Nano 

16GB:&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;2.5&quot; 

Multi-Touch color display with 240-by-432-pixel 

resolution&lt;/li&gt;&lt;li&gt;Only 5.4 millimetres thin - 

the thinnest iPod ever&lt;/li&gt;&lt;li&gt;Easy-to-use 

controls to quickly adjust volume, or play, pause and change 

songs&lt;/li&gt;&lt;li&gt;Bluetooth 

4.0&lt;/li&gt;&lt;li&gt;Widescreen 

video&lt;/li&gt;&lt;li&gt;FM radio with Live 

Pause&lt;/li&gt;&lt;li&gt;Built-in pedometer for 

fitness&lt;/li&gt;&lt;li&gt;Built-in Nike+ support for voice 

feedback and syncing to 

nikeplus.com&lt;/li&gt;&lt;li&gt;Anodized aluminum in seven 

gorgeous colors&lt;/li&gt;&lt;li&gt;16GB 

capacity&lt;/li&gt;&lt;li&gt;Up to 30 hours of music 

playback&lt;/li&gt;&lt;li&gt;Apple 

EarPods&lt;/li&gt;&lt;li&gt;iPod nano multi touch works with 

Mac and PC&lt;/li&gt;&lt;li&gt;Available in: blue, purple, 

yellow, silver, green, pink and Space 

Gray&lt;/li&gt;&lt;/ul&gt;","thumbnailImage":"https://i5.walm

artimages.com/asr/30fda0fc-2dc6-4d37-b22f-

0be9e100052e_1.a6320a803d95c6eea8402c1c277c4c7a.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/30fda0fc-2dc6-4d37-b22f-

0be9e100052e_1.a6320a803d95c6eea8402c1c277c4c7a.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/30fda0fc-2dc6-4d37-b22f-

0be9e100052e_1.a6320a803d95c6eea8402c1c277c4c7a.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","productTrackingUrl"

:"http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip

%252FApple-iPod-nano-16GB

%252F21805451%253Faffp1%253DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%2526affilsrc

%253Dapi","standardShipRate":0.0,"marketplace":true,"modelNum

ber":"MD478LL/A","sellerInfo":"Concept 

Electronics","productUrl":"http://c.affil.walmart.com/t/api02

?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FApple-iPod-nano-16GB

%2F21805451%3Faffp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","customerRating":"4.415","numReviews":814,"cu

stomerRatingImage":"http://i2.walmartimages.com/i/CustRating/

4_4.gif","categoryNode":"3944_96469_1231508","bundle":false,"

stock":"Not 

available","addToCartUrl":"http://c.affil.walmart.com/t/api02

?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems

%3D21805451%7C1%26affp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","affiliateAddToCartUrl":"http://linksynergy.w

almart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart

%252FaddToCart%253Fitems

%253D21805451%257C1%2526affp1%253DkZWWK28HYe3THWF5eR0beb_mHYx

jnc-b3TOUal__uQ0%2526affilsrc

%253Dapi","freeShippingOver50Dollars":false,"imageEntities":

[{"thumbnailImage":"https://i5.walmartimages.com/asr/31f67f52

-4ad4-4785-bd69-

c3a57e4ddd4d_1.7f314761a1ccb763cf2deed1db83cebc.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/31f67f52-4ad4-4785-bd69-

c3a57e4ddd4d_1.7f314761a1ccb763cf2deed1db83cebc.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/31f67f52-4ad4-4785-bd69-

c3a57e4ddd4d_1.7f314761a1ccb763cf2deed1db83cebc.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/30fda0fc-

2dc6-4d37-b22f-

0be9e100052e_1.a6320a803d95c6eea8402c1c277c4c7a.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/30fda0fc-2dc6-4d37-b22f-

0be9e100052e_1.a6320a803d95c6eea8402c1c277c4c7a.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/30fda0fc-2dc6-4d37-b22f-

0be9e100052e_1.a6320a803d95c6eea8402c1c277c4c7a.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"PRIMAR

Y"}],"offerType":"ONLINE_ONLY","availableOnline":false},

{"itemId":22288779,"parentItemId":22288779,"name":"Apple iPod 

nano 16GB 

Refurbished","msrp":132.0,"salePrice":90.44,"upc":"8189700133

60","categoryPath":"Electronics/Portable Audio/Apple 

iPods/iPod Nano","shortDescription":"The redesigned, 

ultraportable iPod nano has a larger, 2.5-inch Multi-Touch 

display; plays music, FM radio and videos; includes built-in 

Bluetooth technology; and features a pedometer and Nike+ 

support for fitness.","longDescription":"The redesigned, 

ultraportable iPod nano now has a larger 2.5-inch Multi- 

Touch display. Play your favourite songs, browse music by 

genre, or listen to Genius playlists and FM radio. Or watch 

movies and widescreen videos on the bigger screen. A perfect 

workout partner, iPod nano tracks your steps, your runs and 

burned calories and syncs to the Nike+ website to challenge 

friends. And with built-in Bluetooth technology, you can 

wirelessly connect to speakers, headphones or car 

stereos.&quot;Key Features&lt;ul 

class=&quot;noindent&quot;&gt;&lt;li&gt;2.5-inch Multi-Touch 

colour display with 240-by-432-pixel 

resolution&lt;/li&gt;&lt;li&gt;Only 5.4 millimetres thin 

&mdash; the thinnest iPod ever&lt;/li&gt;&lt;li&gt;Easy-to-

use controls to quickly adjust volume, or play, pause and 

change songs&lt;/li&gt;&lt;li&gt;Bluetooth 

4.0&lt;/li&gt;&lt;li&gt;Widescreen 

video&lt;/li&gt;&lt;li&gt;FM radio with Live 

Pause&lt;/li&gt;&lt;li&gt;Built-in pedometer for 

fitness&lt;/li&gt;&lt;li&gt;Built-in Nike+ support for voice 

feedback and syncing to 

nikeplus.com&lt;/li&gt;&lt;li&gt;Anodised aluminium in seven 

gorgeous colors&lt;/li&gt;&lt;li&gt;16GB 

capacity&lt;/li&gt;&lt;li&gt;Up to 30 hours of music 

playback&lt;/li&gt;&lt;li&gt;Apple 

EarPods&lt;/li&gt;&lt;li&gt;Works with Mac and 

PC&quot;&lt;/li&gt;&lt;/ul&gt;","thumbnailImage":"https://i5.

walmartimages.com/asr/5639f474-e9a5-4bac-9e8b-

aae25d343b2d_1.9ccdc39e34e4f388807b883d1f04cb04.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/5639f474-e9a5-4bac-9e8b-

aae25d343b2d_1.9ccdc39e34e4f388807b883d1f04cb04.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/5639f474-e9a5-4bac-9e8b-

aae25d343b2d_1.9ccdc39e34e4f388807b883d1f04cb04.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","productTrackingUrl"

:"http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip

%252FApple-iPod-nano-16GB-Refurbished

%252F22288779%253Faffp1%253DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%2526affilsrc

%253Dapi","standardShipRate":0.0,"marketplace":false,"modelNu

mber":"RBMD481LL/A","productUrl":"http://c.affil.walmart.com/

t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FApple-iPod-

nano-16GB-Refurbished

%2F22288779%3Faffp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","customerRating":"4.354","numReviews":209,"cu

stomerRatingImage":"http://i2.walmartimages.com/i/CustRating/

4_4.gif","categoryNode":"3944_96469_1231508","bundle":false,"

stock":"Not 

available","addToCartUrl":"http://c.affil.walmart.com/t/api02

?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems

%3D22288779%7C1%26affp1%3DkZWWK28HYe3THWF5eR0beb_mHYxjnc-

b3TOUal__uQ0%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner

%3Dreadonlyapi","affiliateAddToCartUrl":"http://linksynergy.w

almart.com/fs-bin/click?id=|LSNID|

&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1

082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart

%252FaddToCart%253Fitems

%253D22288779%257C1%2526affp1%253DkZWWK28HYe3THWF5eR0beb_mHYx

jnc-b3TOUal__uQ0%2526affilsrc%253Dapi","giftOptions":

{"allowGiftWrap":false,"allowGiftMessage":false,"allowGiftRec

eipt":false},"imageEntities":

[{"thumbnailImage":"https://i5.walmartimages.com/asr/27da3daf

-2c28-4c52-ad13-

77f6755d0c7d_1.622403f8e6bc66baefe2442966fac8bb.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/27da3daf-2c28-4c52-ad13-

77f6755d0c7d_1.622403f8e6bc66baefe2442966fac8bb.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/27da3daf-2c28-4c52-ad13-

77f6755d0c7d_1.622403f8e6bc66baefe2442966fac8bb.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"SECOND

ARY"},

{"thumbnailImage":"https://i5.walmartimages.com/asr/5639f474

-e9a5-4bac-9e8b-

aae25d343b2d_1.9ccdc39e34e4f388807b883d1f04cb04.jpeg?

odnHeight=100&odnWidth=100&odnBg=FFFFFF","mediumImage":"https

://i5.walmartimages.com/asr/5639f474-e9a5-4bac-9e8b-

aae25d343b2d_1.9ccdc39e34e4f388807b883d1f04cb04.jpeg?

odnHeight=180&odnWidth=180&odnBg=FFFFFF","largeImage":"https:

//i5.walmartimages.com/asr/5639f474-e9a5-4bac-9e8b-

aae25d343b2d_1.9ccdc39e34e4f388807b883d1f04cb04.jpeg?

odnHeight=450&odnWidth=450&odnBg=FFFFFF","entityType":"PRIMAR

Y"}],"offerType":"ONLINE_ONLY","isTwoDayShippingEligible":fal

se,"availableOnline":false}],"facets":[]}";
    }*/
    
    findProduct(query){
        this.totReqsMade = this.totReqsMade + 1;
        return this._http
                    .get(this.catalogUrl1+this.apiKey+this.catalogUrl2+query)
            .map(response => {{//console.log(response.json());
            return response.json()};})
                    .catch(error=> Observable.throw(error.json()));
    }

}