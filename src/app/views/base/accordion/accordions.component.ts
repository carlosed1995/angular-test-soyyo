import { Component, InjectionToken, Injector, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { EntitiesService } from '../../../services/entities.service'; 
import { Entities } from '../../../interface/entities';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss']
})
export class AccordionsComponent implements OnInit {
 
 
 
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
  public entities: Entities[]=[];
  public data=[];
  public sendFormData:boolean=false;
  public submit:boolean=false;

  entityForm = new FormGroup({
    name: new FormControl('', Validators.required),
    contactName: new FormControl('', Validators.required),
    contactMail: new FormControl('', Validators.required),
    identificationNumber: new FormControl('', Validators.required),
    expirationDate: new FormControl('', Validators.required),
    ipAddress: new FormControl('', Validators.required)
  });

  constructor(
    private modal:NgbModal,
    private entitieService: EntitiesService,  
    
  ) { }

  ngOnInit(): void {

     
      
  }

  getEntities(entityId: number){
    this.entitieService.getEntities(entityId).subscribe(
      (resp:any) => { 
        this.entities = [resp.data]; 
        console.log(this.entities);
      },
      (error) => {
        console.log(error);
      }
    ); 
  }

  openEntity(entity:any){
    this.modal.open(entity,{size:'xl'});
  }

  sendForm() {
    const isValid = this.entityForm.valid;
    this.submit = true;
    console.log(isValid)
    if (isValid)
    {
       this.sendFormData = true;
    }
  }

  delete(name:string){
    if(confirm("Esta seguro de eliminar al cliente "+name+ " ?")) {
      
    }
  }

  setInitialValueForm(){
    this.submit = false;
    this.sendFormData = false;
  }
}
