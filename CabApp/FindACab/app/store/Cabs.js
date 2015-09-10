/**
 * Created by alejandrobarreiro on 10/9/15.
 */
Ext.define('FindACab.store.Cabs', {
  extend: 'Ext.data.Store',
  config: {
    model: 'FindACab.model.Cab',
    autoLoad: true
  }
});