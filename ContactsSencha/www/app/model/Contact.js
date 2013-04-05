Ext.define('MyContacts.model.Contact', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'id'
            },
            {
                convert: function(v, rec) {
                    return rec.get('givenName') + ' ' + rec.get('familyName');
                },
                name: 'displayName'
            },
            {
                name: 'phoneNumber'
            },
            {
                name: 'notes'
            },
            {
                name: 'birthday',
                type: 'date'
            },
            {
                name: 'familyName'
            },
            {
                name: 'givenName'
            }
        ]
    }
});