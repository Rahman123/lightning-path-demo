/*
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license. 
 * For full license text, see LICENSE.txt file in the repo root  or https://opensource.org/licenses/BSD-3-Clause
 */
({
    onselect : function (component, event, helper) {
        var stepName = event.getParam("detail").value;        
        component.set('v.hiringStep', stepName);
        helper.setPathButtonVisibility(component, stepName);
	},
    
    handleValueChange : function(component, event, helper) {
        var fields = component.get('v.simpleRecord');
        if (fields) {
            component.set("v.hiringStep", fields['Hiring_Stage__c']);
	        helper.setPathButtonVisibility(component, fields['Hiring_Stage__c']);                    
        }

	},
    
    updateJobApplicationRecord : function(component, event, helper) {        
        var params = event.getParams();        
		helper.saveRecord(component, event, helper, params.fieldToUpdate, params.newFieldValue);        
    },
    
    recordUpdated : function(component, event, helper) {
        var changeType = event.getParams().changeType;
        if (changeType === 'CHANGED') {
            component.find("recordLoader").reloadRecord();
        }
    }
})