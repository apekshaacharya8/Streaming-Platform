import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss']
})
export class MoviedetailComponent implements OnInit {
  movielist:any;
 
  constructor(public movieservice:MovieService) { }

  ngOnInit(): void {
    this.getmovielist
  }
  getmovielist(){
    this.movieservice.getmovielist().subscribe((res:any)=>{
     this.movielist=res.results;
     console.log(this.movielist)
    })
 }
 
}
