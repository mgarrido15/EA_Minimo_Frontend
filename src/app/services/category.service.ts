import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../Models/category';

@Injectable({
    providedIn: 'root'
  })
export class CategoryService{
    private apiUrl = 'http://localhost:4000/api/category'; 

    constructor(private http: HttpClient) {}

    createCategory(category: Omit<ICategory,'_id'>): Observable<any> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.post<any>(`${this.apiUrl}`, category, { headers });
    }

    deleteCategory(categoryId: string): Observable<any> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.delete<any>(`${this.apiUrl}/${categoryId}`, { headers });
    }

    updateCategory(categoryId: string, category:Omit<ICategory,'_id'>): Observable<any> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.put<any>(`${this.apiUrl}/${categoryId}`, category, { headers });
    }

    getCategory(categoryId: string): Observable<ICategory> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get<ICategory>(`${this.apiUrl}/${categoryId}`, { headers });
    }


}