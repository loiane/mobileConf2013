Ext.define('MyContacts.view.ContactsList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.contactslist',

    config: {
        store: 'Contacts',
        grouped: true,
        indexBar: true,
        itemTpl: [
            '<div><b>{givenName}</b> {familyName}</div>'
        ],
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'All Contacts'            }
            
        ]
    }

});