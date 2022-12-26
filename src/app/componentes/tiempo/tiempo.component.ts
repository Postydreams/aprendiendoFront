import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemperaturaService } from 'src/app/services/temperatura.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private fb: FormBuilder, private _tiempo: TemperaturaService) {
    this.iniciaFormulario();
   }

  ngOnInit(): void {
  }

  /**
   * Metodo que crea e inicia un formulario.
   */
  iniciaFormulario(){

    this.formulario = this.fb.group({
      ciudad: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      codigo: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]]
    })

  }

  consultar(){
    console.log("Formulario: ", this.formulario);

    this._tiempo.getEstadoTiempo(this.formulario.get('ciudad')?.value, this.formulario.get('codigo')?.value)
      .subscribe( respuesta => {
          console.log("respuesta: ", respuesta);
        })
  }
}
