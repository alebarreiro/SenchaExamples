/**
 * Created by alejandrobarreiro on 11/9/15.
 */
Ext.define('FindACab.model.Car', {
  extend: 'Ext.data.Model',

  config: {
    fields: [
      { name: 'name', type: 'string'},
      { name: 'description', type: 'string'},
      { name: 'ponderacion', type: 'int'},
    ],

    proxy: {
      type: 'jsonp', //ajax o rest (y contiene la url del server)
      URL : 'http://45.55.55.144:80/crud-category-0.1.0/client/',
      //format: 'php', //Formato .php
      api: {
        create: 'category', //addcar.php
        update: 'category',
        read: 'category',
        destroy: 'category'
      }
    }
  }
});
