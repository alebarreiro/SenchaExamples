/**
 * Created by alejandrobarreiro on 14/9/15.
 */
Ext.define('FindACab.view.DetailView', {
  extend: 'Ext.Container',
  xtype: 'detailview',
  requires: [
    'Ext.TitleBar',
    'Ext.Button'
  ],
  config: {
    items: [{
      xtype: 'titlebar', //CHILD ITEM titlebar (requiere Ext.TitleBar)
      ui: 'light',
      docked: 'top',
      title: 'FindACab',
      items: [{
        iconCls: 'settings', //Setting button (gear icon) en el titlebar
        ui: 'plain',
        align: 'right'
      }]
    }],
    html: 'detail view'
  }
});