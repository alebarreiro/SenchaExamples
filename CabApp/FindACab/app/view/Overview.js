/**
 * Created by alejandrobarreiro on 14/9/15.
 */
Ext.define('FindACab.view.Overview', {
  extend: 'Ext.Container',
  xtype: 'overview',
  requires: [
    'Ext.TitleBar',
  ],
  config: {
    items: [{
      xtype: 'titlebar',
      docked: 'top',
      title: 'Overview'
    }],

    html: 'list here'
  }
});