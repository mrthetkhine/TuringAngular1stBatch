import {Component, TemplateRef, ViewChild} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Actor, Director, MovieDto} from "../../model/movie-dto.model";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {DirectorService} from "../../services/director.service";
import {ActorService} from "../../services/actor.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  closeResult = '';
  modalRef?: BsModalRef;
  editMode = false;
  @ViewChild(TemplateRef<any>) template!: TemplateRef<any>;

   movies :Array<MovieDto> = [];
   directorsModel: Array<Director> = [];
   actorsModel : Array<Actor> = [];
   movieForm;

  constructor(
    private modalService: BsModalService,
    private fb:FormBuilder,
    private movieService: MovieService,
    private directorService :DirectorService,
    private actorService:ActorService) {
    this.movieForm = fb.nonNullable.group({
      "title": ["", Validators.required],
      "year":[0, Validators.required],
     /* "directors":this.fb.array([]),
      "actors":this.fb.array([]),*/
     "director": ["", Validators.required],
      "actor": ["", Validators.required],
    });
    this.movieService.movies.subscribe(data=>{
      this.movies = data;
    });

    this.directorService.directors.subscribe(directors=>{
      this.directorsModel = directors;
    });
    this.actorService.actors.subscribe(actors=>{
      this.actorsModel = actors;
    });
  }
  /*
  get directors() {
    return this.movieForm.controls["directors"] as FormArray;
  }
  get actors() {
    return this.movieForm.controls["actors"] as FormArray;
  }*/
  showNewToDoModal()
  {
    this.editMode = false;
    this.openModal(this.template);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.movieForm.reset();
  }
  closeModal()
  {
    this.modalRef?.hide();
  }
  onSubmit()
  {
    let movie:any = this.movieForm.value;
    movie.actors = [movie.actor];
    movie.directors = [movie.director];
    this.movieService.addNewMovie(movie);
    console.log("Movie ",this.movieForm.value);
    this.closeModal();
  }
  get form()
  {
    return this.movieForm.controls;
  }
}
