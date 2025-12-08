import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [Button],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
})
export class Pagination {

  @Input() totalItems: number = 0;
  @Input() pageSize: number = 10;
  @Input() currentPage: number = 1;
  @Input() showFirstLast: boolean = true;
  @Input() maxVisiblePages: number = 5;
  
  @Output() pageChange = new EventEmitter<number>();


  get totalPages(): number { 
    return Math.ceil(this.totalItems / this.pageSize);
  }

  get pages(): number[] { 
    
    if (this.totalPages <= this.maxVisiblePages) 
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);

    let startPage = Math.max(this.currentPage - Math.floor(this.maxVisiblePages / 2), 1);
    let endPage = startPage + this.maxVisiblePages - 1;

    if (startPage < 1) {
      startPage = 1;
      endPage = this.maxVisiblePages;
    } else if (endPage > this.totalPages) {
      endPage = this.totalPages;
      startPage = endPage - this.maxVisiblePages + 1;
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  }

  goToPage(page: number): void { 
    if (page < 1 || page > this.totalPages || page === this.currentPage) return;
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }

  nextPage(): void { 
    if (this.currentPage < this.totalPages)
      this.goToPage(this.currentPage + 1);
  }

  previousPage(): void { 
    if (this.currentPage> 1)
      this.goToPage(this.currentPage - 1);  
  }

  isFirstPage(): boolean { 
    return this.currentPage === 1;
  }

  isLastPage(): boolean { 
    return this.currentPage === this.totalPages;
  }



}
