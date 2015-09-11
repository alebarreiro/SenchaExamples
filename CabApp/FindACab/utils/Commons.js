/**
 * Created by alejandrobarreiro on 11/9/15.
 */

/*
  Utils.Commons define una clase con miembros estaticos.
  Se puede acceder a las propiedades definidas desde cualquier lugar del codigo.
 */
Ext.define('Utils.Commons', {
  statics: {
    YELP_API: 'http://api.yelp.com/business_review_search?',
    YELP_KEY: 'ftPpQUCgfSA3yV98-uJn9g',
    YELP_TERM: 'Taxi',
    LOCATION: 'Amsterdam NL',

    getUrl: function() {
      return this.YELP_API + "term=" + this.YELP_TERM +
        "&ywsid=" + this.YELP_KEY +
        "&location=" + this.LOCATION;
    }
  }
});