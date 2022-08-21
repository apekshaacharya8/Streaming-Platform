import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Model/movielist';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movielist:any;
 title!:string
  constructor(public movieservice:MovieService,
    private http:HttpClient) { }

  ngOnInit(): void {
    
    this.getmovielist();
  }
  getmovielist(){
     this.movieservice.getmovielist().subscribe((res:any)=>{
      this.movielist=res.results;
      this.title=res.results.title
      console.log(this.movielist)
     })
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.movielist.title = filterValue.trim().toLowerCase();
  }

}
