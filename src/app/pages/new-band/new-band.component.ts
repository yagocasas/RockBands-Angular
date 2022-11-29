import { BandsService } from 'src/app/services/bands.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-band',
  templateUrl: './new-band.component.html',
  styleUrls: ['./new-band.component.scss']
})
export class NewBandComponent implements OnInit {

  newBand: any={
    name: '',
    img: '',
    genre: '',
    origin: '',
    founded: '',
    members: '',
    exMembers:'',
  }

  bandForm!: FormGroup;

  constructor(private bandService: BandsService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.bandForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      img: ['', [Validators.required]],
      genre: ['', Validators.required], //necesito las opciones del enum del back
      origin: [''],
      founded: ['', Validators.required],
      members: [''],
      exMembers: ['']
    })

    this.bandForm.valueChanges.subscribe((changes) => {
      this.newBand = changes; //guardamos los valores que vamos recogiendo en el formulario, para luego hacer el post
    })
  }

  onFileChange(event: any) {
    const file = event.target.files[0] //este file se lo asignamos al formulario
    this.bandForm.patchValue({ //tiene los valores de nuestro formulario
      img: file
    })
  }

  onSubmit() { //antes teníamos una función enviar, en los formularios reactivos tiene que ser un onSubmit. Las líneas 44 y 45 son las mismas
    
    const formData = new FormData();
    
    formData.append('name', this.bandForm.get('name')?.value);
    formData.append('img', this.bandForm.get('img')?.value);
    formData.append('genre', this.bandForm.get('genre')?.value);
    formData.append('origin', this.bandForm.get('origin')?.value);
    formData.append('founded', this.bandForm.get('founded')?.value);
    formData.append('members', this.bandForm.get('members')?.value);
    formData.append('exMembers', this.bandForm.get('exMembers')?.value);
    
    // console.log(formData);
    this.bandService.postNewBand(formData).subscribe(() => this.router.navigate(['/bands'])); //navigate dentro del subscribe para que redireccione inmediatamente sin necesidad de recargar la página
    
  }

} 
