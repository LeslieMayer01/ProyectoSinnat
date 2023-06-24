import { Component } from '@angular/core';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  BASE_API: string=environment.BASE_API;
  form!: FormGroup;
  load: boolean = true;

  opcion = 'default'
  
  constructor(
    public client: ClientService,
    private fb: FormBuilder,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
        
  }

  async onSubmit(){
    if (this.form.valid) {
    
      let dataUser = {
        usuario: this.form.value.user,
        password: this.form.value.password,
      }
      
      this.client.loginAdmin(`${this.BASE_API}/loginAdmin`,dataUser
      ).subscribe(
        (response: any) => {
            console.log(response);
            if(response.token){
              this.router.navigate(['/panelAdmin'])
            }
        },
        (error) => {
          console.log(error.status);
          }
        )
    }
  }
}
