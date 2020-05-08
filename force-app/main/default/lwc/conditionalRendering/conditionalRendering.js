import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    @track flag = false;

    handleChange(event) {
        this.flag = event.target.checked;
    }
}