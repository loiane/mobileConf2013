Ext.define('MyContacts.view.ContactsPanel', {
    extend: 'Ext.Container',
    alias: 'widget.contactspanel',

    requires: [
        'MyContacts.view.ContactsList',
        'MyContacts.view.ContactInfo',
        'MyContacts.view.ContactEdit'
    ],

    config: {
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'contactslist'
            },
            {
                xtype: 'contactinfo'
            },
            {
                xtype: 'contactedit'
            }
        ]
    }

});