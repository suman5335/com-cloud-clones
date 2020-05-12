import { LightningElement, api, track} from 'lwc';

export default class configCard4slds extends LightningElement {
    // tracking attributes values
    @track flag = false;
    @api picFlip = false;
    @api cardHeadline;
    @api cardText;
    @api imageURL;
    @api webURL;
    @api descriptionURL;
    


}