import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductService } from './products/product.service';
import { fromEventPattern } from 'rxjs';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule} from '@angular/router';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,    
    WelcomeComponent
  ],  
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
    
    //Using Hash
    // RouterModule.forRoot([
    //   {path: 'products', component: ProductListComponent},
    //   {path: 'product/:id', component: ProductDetailComponent},
    //   {path: 'welcome', component: WelcomeComponent},
    //   {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    //   {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    // ], {useHash: true})    
    ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule { }
