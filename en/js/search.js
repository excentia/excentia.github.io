(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';
    
      if ( results.length == 1 ) {
        appendString += '<div class="text-center"><h2 style="font-size: 2em">'+results.length+' artículo que habla de <span class="label label-warning" style="text-transform: uppercase">'+searchTerm+'</span></h2></div>'
      }
      else {
        appendString += '<div class="text-center"><h2 style="font-size: 2em">'+results.length+' artículos que hablan de <span class="label label-warning" style="text-transform: uppercase">'+searchTerm+'</span></h2></div>'    
      }
      appendString += '<div style="padding-top: 50px">'
      
      for (var i = 0; i < results.length; i=i+3) {  // Iterate over the results
        appendString += '<div class="row" >'
        
        // three columns
        for (var j = 0; j < 3; j++) {
          if ( results[i+j] ) {
          var item = store[results[i+j].ref];
          
          appendString += '<div class="col-lg-4 portfolio-item" style="padding-bottom: 10px">'
          appendString += '<a href="' + item.url + '" class="list-group-item" style="border: 0px">'
          appendString += '<h5 style="text-transform: uppercase">' + item.date + '</h3>'
          appendString += '<h3 class="list-group-item-heading" style="text-transform: uppercase">' + item.title + '</h3>'
          appendString += '</a>'
          appendString += '</div>'
          }
        }
          
        appendString += '</div>'
      }
      
      appendString += '</div>'

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<h2 class="text-center">Sin resultados</h2>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    //document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('author');
      this.field('category');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'author': window.store[key].author,
        'category': window.store[key].category,
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();