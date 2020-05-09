import { LightningElement, api, track } from 'lwc';

export default class ConfigurableCard extends LightningElement {

    @track flag = false;

    @api imageURL;
    @api imageSwitcher = false;

    handleChange(event) {
        this.flag = event.target.checked;
    }
}