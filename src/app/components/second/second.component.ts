import { Component, OnInit,HostListener } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  categories: Array<string> = []
  categoriesSearch: Array<string> = []
  searchText: string = '';

  constructor(private data: DataService) {
    this.data.getCategories().subscribe(data => {
      this.categories = this.categories.concat(Object.values(data))
      this.categoriesSearch = this.categoriesSearch.concat(Object.values(data))
    }); 
   }

  ngOnInit(): void {
  }

  @HostListener('input') oninput() { this.search(); }
  search(){
    this.categories = this.categoriesSearch.filter(el => el.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1)
  }


}
