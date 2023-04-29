import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { Usuarios } from '../../interface/info.interface';
import { Estudiantes } from '../../interface/info.interface';
import { Acudientes } from '../../interface/info.interface';
import { Inventarios } from '../../interface/info.interface';
import { environment } from 'src/environments/environment';
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

  constructor(
    public client: ClientService,
    private route:  Router
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

    this.client.getRequestUsuario().subscribe(
      (res:any)=>{
        this.usuarios = res.usuario;
        console.log(this.usuarios);
      },
      (error:any)=>{
        console.log(error.status);
      }
    )
        
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
          this.route.navigate(['/panelAdmin']);
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
    if (this.form.valid) {

      let data = {
        usuario: this.form.value.administradorid,
        nombres: this.form.value.usuario,
        correo: this.form.value.correo,
        telefono: this.form.value.telefono,
        password: this.form.value.password
      }
       this.load = false;
       this.client.postRequestSendForm(`${this.BASE_API}/usuarios`, data).subscribe(
        (response:any)=>{
          console.log(response);
          Swal.fire(
            'Su registro ha sido exitoso!',
            '',
            'success'
          )
          this.route.navigate(['']);
        },
        (error: any)=>{
          Swal.fire(
            'Su registro no ha sido exitoso!',
            'Intentalo nuevamente!',
            'error'
          )
          console.log(error.status);          
        })
    }else{
      console.log("Form error");
    }
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
          this.route.navigate(['/panelAdmin']);
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
          this.route.navigate(['panelAdmin']);
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
          this.route.navigate(['/panelAdmin']);
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
 
}

