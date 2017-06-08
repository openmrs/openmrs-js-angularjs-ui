import angular from 'angular';
import openmrsAlertDialog from './openmrs-alertDialog/openmrs-alert-dialog.component';
import openmrsBreadcrumbs from './openmrs-breadcrumbs/openmrs-breadcrumbs.component';
import openmrsChooseLangugage from './openmrs-chooseLanguage/openmrs-chooseLanguage';
import openmrsConceptAutocomplete from './openmrs-conceptAutocomplete/openmrs-conceptAutocomplete.component';
import openmrsHeader from './openmrs-header/openmrs-header.component';
import openmrsList from './openmrs-list/openmrs-list.component';
import openmrsNotification from './openmrs-notification/openmrs-notification.service';

export default angular.module('angularjs-openmrs-ui-components', [openmrsAlertDialog, 
	openmrsBreadcrumbs, openmrsChooseLangugage, openmrsConceptAutocomplete, openmrsHeader,
	openmrsList, openmrsNotification]).name;