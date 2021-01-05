sap.ui.define([
	"./BaseController",
	"sap/ui/core/routing/History",
], function (BaseController, History) {
	"use strict";

	return BaseController.extend("ns.apps.fiori.controller.NotFound", {

		
		/*==============================================================================================*/
		/* onInit function will be triggered at the first time		 								 	*/
		/* application running                                       								 	*/
		/*==============================================================================================*/
		onInit: function () {
			
		},

		/*==============================================================================================*/
		/* Event handler for navigating back.														 	*/
		/*==============================================================================================*/
		onNavBack: function () {
			BaseController.prototype.onNavBack.apply(this, arguments);
		}

	});
});