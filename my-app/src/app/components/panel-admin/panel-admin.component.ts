import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Usuarios } from '../../interface/info.interface';
import { Estudiantes } from '../../interface/info.interface';
import { Acudientes } from '../../interface/info.interface';
import { Inventarios } from '../../interface/info.interface';
import { environment } from 'src/environments/environment';
import { Estudiante } from '../../interface/estudiantes.interface';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {
  BASE_API: string=environment.BASE_API;
  form!: FormGroup;
  load: boolean = true;

  opcion = 'default'
  
  titulo: boolean = true ;
  usuarios : Usuarios [] = [];
  title = "Estudiantes"
  estudiantes : Estudiantes [] = [];
  acudientes : Acudientes [] = [];
  inventarios : Inventarios [] = [];
  Estudiante : Estudiantes [] = [];

  constructor(
    public client: ClientService,
    private fb: FormBuilder,
    private router: Router,
    private route:ActivatedRoute
  ) { }
/*let opcion = this.route.snapshot.paramMap.get("opcion");
    console.log(opcion);*/
  ngOnInit(): void {
    this.client.getRequestPerfil(`${this.BASE_API}/dateAdmin`).subscribe(
      (response: any) => {  
        this.usuarios = response.usuario;
          console.log(this.usuarios);
      },
      (error) => {
        console.log(error.status);
        }
      )
    this.client.getRequestdatosUsuarios().subscribe(
      (res:any)=>{
        this.usuarios = res.usuarios;
      },
      (error:any)=>{
        console.log(error.status);
      }
    )
  
    this.client.getRequestdatosEstudiantes().subscribe(
      (res:any)=>{
        this.estudiantes = res.estudiantes;
      },
      (error:any)=>{
        console.log(error.status);
      }
    )

    this.client.getRequestdatosAcudientes().subscribe(
      (res:any)=>{
        this.acudientes = res.acudientes;
      },
      (error:any)=>{
        console.log(error.status);
      }
    )

    this.client.getRequestdatosInventario().subscribe(
      (res:any)=>{
        this.inventarios = res.inventarios;
      },
      (error:any)=>{
        console.log(error.status);
      }
    )

    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.email],
      tipodoc: ['', Validators.required],
      documento: ['', Validators.required],
      observaciones: ['', Validators.required],
     
    });
        
  }
  
  // eliminarUsuario(id:number){
  //   console.log("Hago peticion por delete al server para eliminar el user de id: ", id);
  // }
  // actualizarUsuario(id:number){
  //   console.log("Hago peticion por delete al server para eliminar el user de id: ", id);
  // }
  eliminarUsuario(id:any){

    this.client.delete(`${this.BASE_API}/deleteUser?id=${id}`)
        .subscribe( (response:any)=>{
          console.log(response);
          Swal.fire(
            ' Delete successful',
            '',
            'success'
          )
          this.client.getRequestUsuario().subscribe(
            (res:any)=>{
              this.usuarios = res.usuario;
              console.log(this.usuarios);
            },
            (error:any)=>{
              console.log(error.status);
            }
          );
        
        },
        (error: any)=>{
          Swal.fire(
            'No ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
      }
  
  actualizarUsuario(id:any){
    this.client.update(`${this.BASE_API}/updateUser`, id)
        .subscribe( (response:any)=>{
          console.log(response);
          Swal.fire(
            ' Update successful',
            '',
            'success'
          )
          this.router.navigate(['/panelAdmin']);
        },
        (error: any)=>{
          Swal.fire(
            'No ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
  }

  eliminarEstudiante(id:any){
    this.client.delete(`${this.BASE_API}/deleteEstudiante?id=${id}`)
        .subscribe( (response:any)=>{
          console.log(response);
          Swal.fire(
            ' Delete successful',
            '',
            'success'
          )
          this.client.getRequestdatosEstudiantes().subscribe(
            (res:any)=>{
              this.estudiantes = res.estudiante;
              console.log(this.estudiantes);
            },
            (error:any)=>{
              console.log(error.status);
            }
          );
        },
        (error: any)=>{
          Swal.fire(
            'No ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
      }
  
  actualizarEstudiante(id:any){
    this.client.update(`${this.BASE_API}/updateEstudiante`, id)
        .subscribe( (response:any)=>{
          console.log(response);
          Swal.fire(
            ' Update successful',
            '',
            'success'
          )
          this.router.navigate(['/panelAdmin']);
        },
        (error: any)=>{
          Swal.fire(
            'No ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
  }
 
  eliminarAcudiente(id:any){
    this.client.delete(`${this.BASE_API}/deleteAcudiente?id=${id}`)
        .subscribe( (response:any)=>{
          console.log(response);
          Swal.fire(
            ' Delete successful',
            '',
            'success'
          )
          this.client.getRequestAcudiente().subscribe(
            (res:any)=>{
              this.acudientes = res.acudientes;
              console.log(this.acudientes);
            },
            (error:any)=>{
              console.log(error.status);
            }
          )
        },
        (error: any)=>{
          Swal.fire(
            'No ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
  }
  
  actualizaracudiente(correo:any){
    this.client.update(`${this.BASE_API}/updateAcudiente`, correo)
        .subscribe( (response:any)=>{
          console.log(response);
          Swal.fire(
            ' Update successful',
            '',
            'success'
          )
          this.router.navigate(['panelAdmin']);
        },
        (error: any)=>{
          Swal.fire(
            'No ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
  }
 
  eliminarInventario(id:any){
    this.client.delete(`${this.BASE_API}/deleteinventario?id=${id}`)
        .subscribe( (response:any)=>{
          console.log(response);
          Swal.fire(
            ' Delete successful',
            '',
            'success'
          )
          this.client.getRequestInventario().subscribe(
            (res:any)=>{
              this.inventarios = res.inventario;
              console.log(this.inventarios);
            },
            (error:any)=>{
              console.log(error.status);
            }
          )
        },
        (error: any)=>{
          Swal.fire(
            'No ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
  }
  
  actualizarInventario(id:any){
    this.client.update(`${this.BASE_API}/updateInventario`, id)
        .subscribe( (response:any)=>{
          console.log(response);
          Swal.fire(
            ' Update successful',
            '',
            'success'
          )
          this.router.navigate(['/panelAdmin']);
        },
        (error: any)=>{
          Swal.fire(
            'No ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
  }
  async onSubmit(){
    this.route.queryParams.subscribe(params => {
      if (this.form.valid) {
        let dataNewStudent = {
          nombre: this.form.value.nombre,
          identificacion: this.form.value.identificacion,
          edad: this.form.value.edad,
          fechaDeNacimiento: this.form.value.fechaDeNacimiento,        
          ultimoGrado: this.form.value.ultimoGrado,
          escuela: this.form.value.escuela,
          referido: this.form.value.referido,
          nombreReferido: this.form.value.nombreReferido,
          horarioDia: this.form.value.horarioDia,
          horarioHora: this.form.value.horarioHora,
          Acudiente: this.form.value.Acudiente,
        }
        this.load = false;
        this.client.postRequestSendForm(`${this.BASE_API}/Estudiantes`,dataNewStudent
        ).subscribe(
          (response:any)=>{
            this.load = true;
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'se registro correctamente!',
              showConfirmButton: false,
              timer: 4000
            })
            console.log(response);
           this.router.navigate(['/panel-admin']);
          },
          (error: any)=>{
            console.log(error.status); 
            
            Swal.fire({
              icon: 'info',
              title: 'Error al enviar tú solicitud',
              text: 'Por favor registrate o inicia sesión',
            })
          })
      }else{
        console.log("Form error");
        Swal.fire({
          icon: 'info',
          title: 'Error al enviar tú solicitud',
          text: 'Por favor verifica los datos ingresados',
        })
      };
      });
    }
    reqEstudiante(){
      this.client.getReqEstudiante(`${this.BASE_API}/addEstudiante`).subscribe(
      (response: any) => {
          console.log(response);
      },
      (error) => {
        console.log(error.status);
        }
      )
    }
    reqAcudiente(){
      this.client.getReqAcudiente(`${this.BASE_API}/addAcudiente`).subscribe(
      (response: any) => {
          console.log(response);    
      },
      (error) => {
        console.log(error.status);
        }
      )
    }
    reqInventario(){
      this.client.getReqInventario(`${this.BASE_API}/addInventario`).subscribe(
      (response: any) => {
          console.log(response);
      },
      (error) => {
        console.log(error.status);
        }
      )
    }
}

