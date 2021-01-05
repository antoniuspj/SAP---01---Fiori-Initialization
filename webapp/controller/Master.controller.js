sap.ui.define([
	"./BaseController",
	"sap/ui/Device",
	"sap/ui/core/Fragment",
	"../model/formatter"
], function (BaseController, formatter) {
	"use strict";

	return BaseController.extend("ns.apps.fiori.controller.Master", {

		formatter: formatter,

		/*==============================================================================================*/
		/* onInit function will be triggered at the first time		 								 	*/
		/* application running                                       								 	*/
		/*==============================================================================================*/
		onInit : function () {

		},

		/*==============================================================================================*/
		/* onPress to trigger action from button.					 								 	*/
		/*==============================================================================================*/
		onPress: function(){
			this.getRouter().getTargets().display("notFound", {
				fromTarget : "master"
			});
		},

	});

});