import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import InputComponent from './components/input/input.component';
// import { ModalService } from '../services/modal.service';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, PasswordModule],
  exports: [InputComponent],
  providers: [],
})
export default class SharedModule {}
