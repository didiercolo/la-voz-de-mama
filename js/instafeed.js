var feed = new Instafeed({
    	// get tocken - > https://rudrastyh.com/tools/access-token
        get: 'tagged',
        tagName: 'prouddad',
        resolution: 'low_resolution',
        clientId: '001cb54099d54ba79c683e549c4734c0',
        limit: 4,
        accessToken:'143812036.001cb54.ff20cd6332744fe98eb084aa5652217c',
        template: ' <div class="col-md-3 nopadding animate-box" data-animate-effect="fadeIn"><div class="insta" style="background-image: url({{image}});" ></div></div>'
    });
    feed.run();