import { LightningElement } from 'lwc';
import My_Resource from '@salesforce/resourceUrl/imagefolder';
export default class StaticResourceLWCExample extends LightningElement {
    spring20Logo = My_Resource + '/images/spring.jpg';
    summer20Logo = My_Resource + '/images/summer.jpg';
}