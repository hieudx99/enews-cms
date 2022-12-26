import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-article-management-create',
  templateUrl: './article-management-create.component.html',
  styleUrls: ['./article-management-create.component.less'],
})
export class ArticleManagementCreateComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  listCategory!: Category[];

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(
      (data) => {
        this.listCategory = data;
        console.log(this.listCategory);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addImgElement(): void {
    // <div class="form-group">
    //     <label for="exampleFormControlFile1">Ảnh hiển thị</label>
    //     <input type="file" class="form-control-file" id="exampleFormControlFile1">
    // </div>
    const contentAreaElement = document.getElementById('contentArea');
    const div = document.createElement('div');
    div.classList.add('form-group');
    const label = document.createElement('label');
    label.textContent = 'Chọn ảnh';
    div.appendChild(label);
    const input = document.createElement('input');
    input.classList.add('form-control-file');
    input.type = 'file';
    div.appendChild(input);
    contentAreaElement?.appendChild(div);
  }

  addPElement(): void {
    // <div class="form-group">
    //     <label for="txtTitle">Tóm tắt nội dung</label>
    //     <textarea type="text" class="form-control" id="txtTitle"></textarea>
    // </div>
    const contentAreaElement = document.getElementById('contentArea');
    const div = document.createElement('div');
    div.classList.add('form-group');
    const label = document.createElement('label');
    label.textContent = 'Nhập nội dung';
    div.appendChild(label);
    const textarea = document.createElement('textarea');
    textarea.classList.add('form-control');
    textarea.placeholder = 'Nhập nội dung...';
    div.appendChild(textarea);
    contentAreaElement?.appendChild(div);
  }
}
