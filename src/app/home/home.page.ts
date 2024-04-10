  import { Component } from '@angular/core';
  import { Database, object, ref, set } from '@angular/fire/database';

  @Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
  })
  export class HomePage {

    encendido: any;
    encendido2: any;
    encendido3: any;
    encendido4: any;
    encendido5: any;
    encendido6: any;

    color: string='';
    color2: string='';
    color3: string='';
    color4: string='';
    color5: string='';
    color6: string='';
    constructor(private database:Database) {}
    route: any;

  ngOnInit() {
    this.readDatabaseAndSetColor('banio', 1);
    this.readDatabaseAndSetColor('cocina', 2);
    this.readDatabaseAndSetColor('cuarto', 3);
    this.readDatabaseAndSetColor('sala', 4);
    this.readDatabaseAndSetColor('musica', 5);
    this.readDatabaseAndSetColor('lavado', 6);
  }

  readDatabaseAndSetColor(room: string, number: number) {
    const route = ref(this.database, room);
    object(route).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      console.log(valores_db);//Imprimir valores obtenidos de la búsqueda en la ruta 
      switch (number) {
        case 1:
          this.encendido = valores_db;
          this.color = this.encendido ? 'background-color:  rgba(0, 0, 0, 0.5);' : 'background-color:   rgba(255, 255, 0, 0.5);';
          break;
        case 2:
          this.encendido2 = valores_db;
          this.color2 = this.encendido2 ? 'background-color:  rgba(0, 0, 0, 0.5);' : 'background-color:   rgba(255, 255, 0, 0.5);';
          break;
        case 3:
          this.encendido3 = valores_db;
          this.color3 = this.encendido3 ? 'background-color:  rgba(0, 0, 0, 0.5);' : 'background-color:   rgba(255, 255, 0, 0.5);';
          break;
        case 4:
          this.encendido4 = valores_db;
          this.color4 = this.encendido4 ? 'background-color:  rgba(0, 0, 0, 0.5);' : 'background-color:   rgba(255, 255, 0, 0.5);';
          break;
        case 5:
          this.encendido5 = valores_db;
          this.color5 = this.encendido5 ? 'background-color:  rgba(0, 0, 0, 0.5);' : 'background-color:   rgba(255, 255, 0, 0.5);';
          break;
        case 6:
          this.encendido6 = valores_db;
          this.color6 = this.encendido6 ? 'background-color:  rgba(0, 0, 0, 0.5);' : 'background-color:   rgba(255, 255, 0, 0.5);';
          break;
        default:
          break;
      }
    });
  }

    async encender(numero: number){
      if(numero==1)
      {
        this.encendido=!this.encendido;
        this.route = set(ref(this.database,'banio') , this.encendido); /*direccion a donde ir dentro de la base de datos */
        
        const route = ref(this.database, 'banio');
        object(route).subscribe(attributes => {
          const valores_db = attributes.snapshot.val();
          console.log(valores_db);//Imprimir valores obtenidos de la busqueda en la ruta 
        });

        this.color= this.encendido? 'background-color:  rgba(0, 0, 0, 0.5);':'background-color:   rgba(255, 255, 0, 0.5);';
      }
      if(numero==2)
      {
        this.encendido2=!this.encendido2;
        this.route = set(ref(this.database,'cocina') , this.encendido2); /*direccion a donde ir dentro de la base de datos */
        
        const route = ref(this.database, 'cocina');
        object(route).subscribe(attributes => {
          const valores_db = attributes.snapshot.val();
          console.log(valores_db);//Imprimir valores obtenidos de la busqueda en la ruta 
        });
      
        this.color2= this.encendido2? 'background-color:  rgba(0, 0, 0, 0.5);':'background-color:   rgba(255, 255, 0, 0.5);';

      }
      if(numero==3)
      {
        this.encendido3=!this.encendido3;
        this.route = set(ref(this.database,'cuarto') , this.encendido3); /*direccion a donde ir dentro de la base de datos */
      
        const route = ref(this.database, 'cuarto');
        object(route).subscribe(attributes => {
          const valores_db = attributes.snapshot.val();
          console.log(valores_db);//Imprimir valores obtenidos de la busqueda en la ruta 
        });

        this.color3= this.encendido3? 'background-color:  rgba(0, 0, 0, 0.5);':'background-color:   rgba(255, 255, 0, 0.5);';

      }
      if(numero==4)
      {
        this.encendido4=!this.encendido4;
        this.route = set(ref(this.database,'sala') , this.encendido4); /*direccion a donde ir dentro de la base de datos */
      
        const route = ref(this.database, 'sala');
        object(route).subscribe(attributes => {
          const valores_db = attributes.snapshot.val();
          console.log(valores_db);//Imprimir valores obtenidos de la busqueda en la ruta 
        });
        this.color4= this.encendido4? 'background-color:  rgba(0, 0, 0, 0.5);':'background-color:   rgba(255, 255, 0, 0.5);';

      }
      if(numero==5)
      {
        this.encendido5=!this.encendido5;
        this.route = set(ref(this.database,'musica') , this.encendido5); /*direccion a donde ir dentro de la base de datos */
      
        const route = ref(this.database, 'musica');
        object(route).subscribe(attributes => {
          const valores_db = attributes.snapshot.val();
          console.log(valores_db);//Imprimir valores obtenidos de la busqueda en la ruta 
        });
        this.color5= this.encendido5? 'background-color:  rgba(0, 0, 0, 0.5);':'background-color:   rgba(255, 255, 0, 0.5);';

      }
      if(numero==6)
      {
        this.encendido6=!this.encendido6;
        this.route = set(ref(this.database,'lavado') , this.encendido5); /*direccion a donde ir dentro de la base de datos */
      
        const route = ref(this.database, 'lavado');
        object(route).subscribe(attributes => {
          const valores_db = attributes.snapshot.val();
          console.log(valores_db);//Imprimir valores obtenidos de la busqueda en la ruta 
        });
        this.color6= this.encendido6? 'background-color:  rgba(0, 0, 0, 0.5);':'background-color:   rgba(255, 255, 0, 0.5);';

      }
    }
  }
