import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BandsService } from 'src/app/services/bands.service';

@Component({
  selector: 'app-update-band',
  templateUrl: './update-band.component.html',
  styleUrls: ['./update-band.component.scss'],
})
export class UpdateBandComponent implements OnInit {
  
  bandForm!: FormGroup;
  updatedBand!: any;
  id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bandService: BandsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.bandService.getOneBand(this.id).subscribe((data) => {
        //recojo de mi servicio el elemento que vamos a modificar
        console.log(data);
        this.updatedBand = data;

        this.bandForm = this.formBuilder.group({
          name: [this.updatedBand.name, [Validators.required]], //cojo el valor inicial y se lo setteo a mi campo
          img: [this.updatedBand.img, [Validators.required]],
          genre: [this.updatedBand.genre, [Validators.required]],
          origin: [this.updatedBand.origin],
          founded: [this.updatedBand.founded, [Validators.required, Number]],
          members: [this.updatedBand.members],
          exMembers: [this.updatedBand.exMembers],
        });
      });
    });

    this.bandForm.valueChanges.subscribe((changes) => {
      this.updatedBand = changes;
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0]; //este file se lo asignamos al formulario
    this.bandForm.patchValue({
      //tiene los valores de nuestro formulario
      img: file,
    });
  }

  onSubmit() {
    const formData = new FormData();

    formData.append('name', this.bandForm.get('name')?.value);
    formData.append('img', this.bandForm.get('img')?.value);
    formData.append('genre', this.bandForm.get('genre')?.value);
    formData.append('origin', this.bandForm.get('origin')?.value);
    formData.append('founded', this.bandForm.get('founded')?.value);
    formData.append('members', this.bandForm.get('members')?.value);
    formData.append('exMembers', this.bandForm.get('exMembers')?.value);

    console.log(formData);
    this.bandService.putBand(this.id, formData).subscribe(() => this.router.navigate(['/bands']));
  }
}
