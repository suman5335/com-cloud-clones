import { LightningElement, api, track} from 'lwc';

export default class DesignComponentLWCDemo extends LightningElement {
    // tracking attributes values
    @track flag = false;
    @api picFlip = false;
    @api cardHeadline;
    @api backgroundColor;
    @api imageURL;
    @api webURL;
    @api descriptionURL;
    


}