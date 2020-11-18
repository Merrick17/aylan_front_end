import { Component, OnInit } from '@angular/core';
import { NewsService} from '../../news.service'
import { ToastrService } from 'ngx-toastr'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  title="";
  body = "";
  file: File = null
  news = []
  newsToUpdate = {
      id: "",
    title: "",
      body: "",
      image:""
  }
    quillConfig={
     toolbar: {
       container: [
         ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
         ['code-block'],
         [{ 'header': 1 }, { 'header': 2 }],               // custom button values
         [{ 'list': 'ordered'}, { 'list': 'bullet' }],
         [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
         [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
         [{ 'direction': 'rtl' }],                         // text direction

         [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
         [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

         [{ 'font': [] }],
         [{ 'align': [] }],

         ['clean'],                                         // remove formatting button

         ['link'],
         //['link', 'image', 'video']  
       ],
    //   handlers: {'emoji': function() {}}
     },
    keyboard: {
      bindings: {
        enter:{
          key:13,
          handler: (range, context)=>{
            return true;
          }
        }
      }
    }
  }
  constructor(private newsService: NewsService, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.getAllNews()
  }
    onChange(event) {
    this.file = event.target.files[0]
  }
    getAllNews() {
    this.newsService.getAllNews().subscribe((data) => {
      let result: any = data
      this.news = result.news
    })
  }
  readyToEdit(id, title, body, image) {
      this.newsToUpdate.id = id
    this.newsToUpdate.title = title;
      this.newsToUpdate.body = body;
      this.newsToUpdate.image = image
  }

    updateNews() {
    this.readyToEdit(this.newsToUpdate.id, this.newsToUpdate.title, this.newsToUpdate.body, this.newsToUpdate.image)
    var formData = new FormData()
      formData.append('title', this.newsToUpdate.title)
      formData.append('body', this.newsToUpdate.body)
    if (this.file) {
      formData.append('image', this.file)
    }
    this.newsService.updateNews(this.newsToUpdate.id, formData).subscribe(data => {
      const result: any = data
        this.getAllNews()
        this.clear()
    })
  }
  SubmitNews() {
    var formData = new FormData()
    formData.append('title', this.title)
    formData.append("body", this.body)
    formData.append('image', this.file, this.file.name)
    this.newsService.createNews(formData).subscribe(
      (data) => {
        let result: any = data
        this.toaster.success(result.msg, 'Success')
        this.getAllNews()
        this.clear()
      },
      (err) => {
        this.toaster.error('Something went wrong', 'Error')
      },
    )
  }
    deleteNews(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.newsService.deleteNews(id).subscribe((data) => {
          let result: any = data
          this.toaster.success('News Deleted', 'Success')
          this.getAllNews()
        })
      }
    })
  }
  clear() {
      this.title = ''
      this.body = ""
    this.file = null
  }
}
