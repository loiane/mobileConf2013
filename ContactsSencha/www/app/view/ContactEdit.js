Ext.define('MyContacts.view.ContactEdit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.contactedit',

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Info',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'cancel',
                        text: 'Cancel'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        itemId: 'save',
                        ui: 'confirm',
                        text: 'Done'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Name',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'First',
                        name: 'givenName',
                        required: true,
                        maxLength: 100
                    },
                    {
                        xtype: 'textfield',
                        label: 'Last',
                        name: 'familyName',
                        maxLength: 100
                    }
                ]
            },
            {
                xtype: 'textfield',
                label: 'Phone',
                name: 'phoneNumber',
                maxLength: 20
            },
            {
                xtype: 'datepickerfield',
                label: 'Birthday',
                name: 'birthday',
                placeHolder: 'mm/dd/yyyy'
            },
            {
                xtype: 'textareafield',
                label: 'Notes',
                name: 'notes',
                maxLength: 500
            },
            {
                xtype: 'hiddenfield',
                name: 'id'
            },
            {
                xtype: 'button',
                itemId: 'delete',
                margin: 10,
                ui: 'decline',
                text: 'Delete Contact'
            }
        ]
    }

});