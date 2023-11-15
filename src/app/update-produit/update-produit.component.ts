import { Component } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.modele';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent {
  currentProduit = new Produit();
  categories! : Categorie[];
  updatedCatId! : number;

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private produitService: ProduitService) { }
  ngOnInit() {
  this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).
  subscribe( prod =>{ this.currentProduit = prod; } ) ;
  }
                 
  updateProduit() {
    this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
    this.router.navigate(['produits']); }
    );
    }
}
