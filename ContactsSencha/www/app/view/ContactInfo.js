Ext.define('MyContacts.view.ContactInfo', {
    extend: 'Ext.Container',
    alias: 'widget.contactinfo',

    config: {
        tpl: [
            '<h4>{displayName}</h4>',
            '<div class="field"><span class="label">First: </span>{givenName}</div>',
            '<div class="field"><span class="label">Last: </span>{familyName}</div>',
            '',
            '<h4>Other Info</h4>',
            '<div class="field"><span class="label">Phone: </span>{phoneNumber}</div>'        ],
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Info',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'back',
                        ui: 'back',
                        text: 'All Contacts'
                    }
                ]
            }
        ]
    }

});