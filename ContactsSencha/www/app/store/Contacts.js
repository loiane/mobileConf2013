Ext.define('MyContacts.store.Contacts', {
    extend: 'Ext.data.Store',

    requires: [
        'MyContacts.model.Contact',
        'MyContacts.proxy.ContactsProxy'
    ],

    config: {
       // autoLoad: true,
        model: 'MyContacts.model.Contact',
        storeId: 'Contacts',
        proxy: {
            type: 'contactstorage'
        },
        grouper: {
            groupFn: function(record) {
                if (record.get('givenName')){
                    return record.get('givenName')[0];
           } else if (record.get('familyName')){
                return record.get('familyName')[0];
           } return "";
            }
        }
    }
});