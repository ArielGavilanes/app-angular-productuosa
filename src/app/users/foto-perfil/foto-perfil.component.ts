import { Component } from '@angular/core';

@Component({
  selector: 'app-foto-perfil',
  templateUrl: './foto-perfil.component.html',
  styleUrls: ['./foto-perfil.component.css']
})
export class FotoPerfilComponent {
  profileImageUrl: string = ''; 

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  editProfilePhoto() {
    const newUrl = prompt("Introduce la nueva URL de la imagen de perfil:");
    if (newUrl !== null && newUrl !== "") {
      this.profileImageUrl = newUrl;
    }
  }
}
