Ext.define('MyContacts.controller.ContactsController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'Contact'
        ],
        stores: [
            'Contacts'
        ],
        views: [
            'ContactsList',
            'ContactInfo'
        ],

        refs: {
            contactsPanel: {
                autoCreate: true,
                selector: 'contactspanel',
                xtype: 'container'
            },
            contactInfo: {
                selector: 'contactinfo',
                xtype: 'container'
            }
        },

        control: {
            "contactslist": {
                itemtap: 'onListItemTap',
           show: 'onListItemPainted'
            },
            "button#back": {
                tap: 'onButtonTapBack'
            }
        }
    },
    
    onButtonTapBack: function(button, e, options) {
        //this.getContactsPanel().setActiveItem(0);

        this.getContactsPanel().animateActiveItem(0, {type: 'slide', direction: 'right'});
    },

    onListItemTap: function(dataview, index, target, record, e, options) {
        var panel = this.getContactsPanel();

        panel.setActiveItem(1);

        this.getContactInfo().setRecord(record);
    },

    onListItemPainted: function(view, options) {
           
           view.getStore().load();
    }

});