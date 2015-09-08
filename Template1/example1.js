/**
 *
 TEMPLATE 1
Ext.onReady(function() {

    var data = { 
       name: 'Taxi Amsterdam',  
       description: 'The only taxi in Amsterdam that does not circle around' 
    };

    Ext.create('Ext.Component', {
        tpl: '<h1>{name}</h1><p>{description}</p>',
        data: data,
        styleHtmlContent: true,
        cls: 'box',
        renderTo: Ext.getBody()
    });

});
*/

/** CAMBIAR DATOS DINAMICAMENTE Y CON TEMPLATE SNIPPETS **/

var data={
  name: 'Taxi Amsterdam',
  description: 'The only taxi in Amsterdam that does not circle around.'
};

var myTpl = Ext.create(
  'Ext.XTemplate','<h1>{name}</h1><p>{description}</p>');

var c = null;
Ext.require('Ext.Component');
Ext.onReady(function() {

  c = Ext.create('Ext.Component', {
    tpl: myTpl,
    data: data,
    styleHtmlContent: true,
    cls: 'box',
    renderTo: Ext.getBody()
  });

  data.description = "We like tourists a lot!";
  c.setData(data);
});
