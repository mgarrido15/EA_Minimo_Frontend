import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { ICategory } from '../../Models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  imports: [ FormsModule, CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CreateCategoryComponent {
  IdCategory: string = '';
  categoryName: string = '';
  categoryDescription: string = '';
  categoryProducts: string[] = [];

  constructor(private apiService: CategoryService, private router: Router) { }

  CreateCategory() {
    const category: Omit<ICategory, '_id'> = {
      name: this.categoryName,
      description: this.categoryDescription,
      products: [],
    };
    console.log(category);

    this.apiService.createCategory(category).subscribe({
      next: (response) => {
        console.log('Categoria creada:', response);
      },
      error: (err) => {
        console.error('Error al crear la Categoria:', err);
      }
    });
     
  }

  DeleteCategory(){
    this.apiService.deleteCategory(this.IdCategory).subscribe({
      next: (response) => {
        console.log('Categoria eliminada:', response);
      },
      error: (err) => {
        console.error('Error al eliminar la Categoria:', err);
      }
    });
  }

  UpdateCategory(){
    const category: Omit<ICategory, '_id'> = {
      name: this.categoryName,
      description: this.categoryDescription,
      products: [],
    };
    console.log(category);
    this.apiService.updateCategory(this.IdCategory, category).subscribe({
      next: (response) => {
        console.log('Categoria actualizada:', response);
      },
      error: (err) => {
        console.error('Error al actualizar la Categoria:', err);
      }
    });
  }

  GetCategory(){
    const category: ICategory = {
      _id: this.IdCategory,
      name: this.categoryName,
      description: this.categoryDescription,
      products: [],
    };
    console.log(category);
        this.router.navigate(['/view-category', category._id]);
        
  }
}
