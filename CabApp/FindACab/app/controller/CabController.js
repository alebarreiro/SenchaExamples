Ext.define('FindACab.controller.CabController', {
    extend: 'Ext.app.Controller',
    config: {
        models: ['Cab'],
        stores: ['Cabs']
    },
    init: function() {

        Ext.Viewport.mask({
            xtype: 'loadmask',
            message: 'loading...'
        });

        Ext.getStore('Cabs').load();
        Ext.getStore('Cabs').addListener('load',
          this.onCabsStoreLoad,
          this);
    },

    // Callback del load, imprime los datos y oculta el loading spinner.
    onCabsStoreLoad: function(records, success, operation) {
        console.log(records.getData());
        Ext.Viewport.unmask(); //Spins a loading animation
    }

    /**
     * Then we can look up the Cabs store through the store StoreManager:

     Ext.getStore('Cabs').load({
        callback: function(records, success, operation) {
            //callback function here
            console.log(records);
        },
        scope: this
     });

     */
});