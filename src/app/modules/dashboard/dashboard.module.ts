import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimeNGModule } from 'src/app/prime-ng/prime-ng.module';
import { NbClientComponent } from "./nb-client/nb-client.component";
import { FluxClientComponent } from "./flux-client/flux-client.component";
import { TauxCaptationComponent } from './taux-captation/taux-captation.component';
import { TauxDisponibiliteComponent } from './taux-disponibilite/taux-disponibilite.component';
import { TauxServiceComponent } from './taux-service/taux-service.component';
import { TempsPriseChargeComponent } from './temps-prise-charge/temps-prise-charge.component';
import { FidelisationClientComponent } from './fidelisation-client/fidelisation-client.component';
import { TypologieClientsComponent } from './typologie-clients/typologie-clients.component';
import { TauxShoppingComponent } from './taux-shopping/taux-shopping.component';
import { IntegriteProduitComponent } from './integrite-produit/integrite-produit.component';
import { ChiffreAffairesComponent } from './chiffre-affaires/chiffre-affaires.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NbClientComponent,
    FluxClientComponent,
    TauxCaptationComponent,
    TauxDisponibiliteComponent,
    TauxServiceComponent,
    TempsPriseChargeComponent,
    FidelisationClientComponent,
    TypologieClientsComponent,
    TauxShoppingComponent,
    IntegriteProduitComponent,
    ChiffreAffairesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimeNGModule,
    
    
]
})
export class DashboardModule { }
