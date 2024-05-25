import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component'; // Adjust path as necessary

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent // Declare the component here
  ],
  imports: [
    BrowserModule,
    FormsModule // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
