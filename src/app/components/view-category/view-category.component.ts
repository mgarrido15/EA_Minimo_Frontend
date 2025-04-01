import { Component } from '@angular/core';
import { ICategory } from '../../Models/category';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-category',
  imports: [],
  templateUrl: './view-category.component.html',
  styleUrl: './view-category.component.css'
})
export class ViewCategoryComponent {
 category: ICategory = {
  _id: '',
  name: '',
  description: '',
  products: []
 }

 constructor(private apiService: CategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCategory();
  }

  loadCategory() {
    const categoryId = this.route.snapshot.paramMap.get('id');  
    console.log(categoryId);
    if (categoryId) {
      this.apiService.getCategory(categoryId).subscribe({
        next: (data) => {
          this.category = data;
          console.log(this.category);
        },
        error: (err) => {
          console.error('Error cargando la categoria', err);
        }
      });
    }
  }

  goBack()
  {
    window.history.back();
  }
}
