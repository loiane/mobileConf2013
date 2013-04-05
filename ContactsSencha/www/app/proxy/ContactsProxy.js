Ext.define('MyContacts.proxy.ContactsProxy', {
    extend: 'Ext.data.proxy.Proxy',

    alias : 'proxy.contactstorage',

    constructor: function(config) {
        var me = this;

        config = config || {};
        /**
         * @event exception
         * Fires when the server returns an exception
         * @param {Ext.data.proxy.Proxy} this
         * @param {Object} response The response from the AJAX request
         * @param {Ext.data.Operation} operation The operation that triggered request
         */
        me.callParent([config]);
    },


    create: function(operation, callback, scope) { },

    read: function(operation, callback, scope) {
	    var thisProxy = this;

	    var fields = ['id', 'name', 'phoneNumbers', 'birthday', 'note'];

	    navigator.contacts.find(
	        fields,
	        function(deviceContacts) {
	            //loop over deviceContacts and create Contact model instances
	            var contacts = [];
	            for (var i = 0; i < deviceContacts.length; i++) {
	                var deviceContact = deviceContacts[ i ];

					console.log(deviceContact.id);
                                
                                var phone = "";
                            if (deviceContact.phoneNumbers){
                                phone = deviceContact.phoneNumbers[0];
                                if (phone){
                                phone = phone.value;
                                } else{
                                phone = "";
                                }
                            }
					

					//console.log("phone " + phone);

	               /* var contact = Ext.create('MyContacts.model.Contact',{
	                    id: deviceContact.id,
	                    givenName: deviceContact.name.givenName,
	                    familyName: deviceContact.name.familyName,
	                    phoneNumber: "",
	                    birthday: new Date(), //new Date(deviceContact.birthday),
	                    notes: "a" //deviceContact.note
	                });*/
	                //contact.deviceContact = deviceContact;
                                contacts.push(Ext.create('MyContacts.model.Contact',{
                                                         id: deviceContact.id,
                                                         givenName: deviceContact.name.givenName,
                                                         familyName: deviceContact.name.familyName,
                                                         phoneNumber: phone
                              
                                                         }));
                                
                                	            }
	            //return model instances in a result set
                operation.setResultSet(
                	Ext.create('Ext.data.ResultSet', {
                      	records: contacts,
                      	total  : contacts.length
                    })
                );
	            //announce success
	            operation.setSuccessful();
	            operation.setCompleted();
                console.log('operation complete');
	            //finish with callback
	            if (typeof callback == "function") {
	                callback.call(scope || thisProxy, operation);
	            }
	        },
	        function (e) { 
	        	console.log('Error fetching contacts'); 
	        },
	        {multiple: true}
	    );
	},

	update: function(operation, callback, scope) { },

	destroy: function(operation, callback, scope) { }

});