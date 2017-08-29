

// Listen to contextMenu when selected
browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab){

	if(info != null && info.hasOwnProperty('menuItemId')
			&& info.hasOwnProperty('selectionText')){
		var searchURL = findSearchEngin(info.menuItemId);


	var url = '';
		
		if(searchURL != ''){
			url = searchURL+info.selectionText;
		}

		console.log("the url is:::"+url);
		
		// When the URL is not null, create a new tab to search
		if( url != ''){
			  browser.tabs.create({url: url});
		}

	}

}


// Create a set of context options for text-selection
browser.contextMenus.create({
  id: "google",
  title: "Google",
  contexts: ["selection"]
});


browser.contextMenus.create({
  id: "wiki",
  title: "Wikipedia",
  contexts: ["selection"]
});



browser.contextMenus.create({
  id: "bing",
  title: "Bing",
  contexts: ["selection"]
});



browser.contextMenus.create({
  id: "youtube",
  title: "YouTube",
  contexts: ["selection"]
});


browser.contextMenus.create({
  id: "ddg",
  title: "DuckDuckGo",
  contexts: ["selection"]
});


browser.contextMenus.create({
  id: "twitter",
  title: "Twitter",
  contexts: ["selection"]
});


browser.contextMenus.create({
  id: "github",
  title: "Github",
  contexts: ["selection"]
});


browser.contextMenus.create({
  id: "yandex",
  title: "Yandex",
  contexts: ["selection"]
});

browser.contextMenus.create({
  id: "wordpress",
  title: "Wordpress",
  contexts: ["selection"]
});

browser.contextMenus.create({
  id: "amazon",
  title: "Amazon",
  contexts: ["selection"]
});


// Find the Search Engine query url to form the url for new tab
function findSearchEngin(searchEngText){

        if(searchEngText == 'wiki'){
                return 'https://wikipedia.org/wiki/Search?search=';
        }
        else if(searchEngText == 'google'){
                return 'https://www.google.co.in/search?q=';
        }
        else if(searchEngText == 'bing'){
                return 'http://www.bing.com/search?q=';
        }
        else if(searchEngText == 'ddg'){
                return 'https://duckduckgo.com/?q=';
        }
        else if(searchEngText == 'youtube'){
                return 'https://www.youtube.com/results?search_query=';
        }
        else if(searchEngText == 'twitter'){
                return 'https://twitter.com/search?q=';
        }
        else if(searchEngText == 'github'){
                return 'https://github.com/search?q=';
        }
        else if(searchEngText == 'yandex'){
                return 'https://www.yandex.com/search/?text=';
        }
        else if(searchEngText == 'wordpress'){
                return 'https://en.search.wordpress.com/?src=organic&q=';
        }
        else if(searchEngText == 'amazon'){
                return 'https://www.amazon.com/s/field-keywords=';
        }
        return '';
}

