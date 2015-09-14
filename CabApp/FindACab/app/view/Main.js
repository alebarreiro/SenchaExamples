Ext.define('FindACab.view.Main', {
    extend: 'Ext.Container', //Container hbox (layout horizontal) para alinear dos nuevas vistas: Overview y Detailview
    requires: [
        'FindACab.view.Overview',
        'FindACab.view.DetailView'
    ],
    config: {
        layout: 'hbox',
        items: [{
            xtype: 'overview',
            flex: 1,
            store: 'Cabs'
        }, {
            xtype: 'detailview',
            flex: 3
        }]
    }
});