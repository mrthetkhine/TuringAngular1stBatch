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

   selectedDirectorIndex:number = 0;
   selectedActorIndex:number = 0;

  constructor(
    private modalService: BsModalService,
    private fb:FormBuilder,
    private movieService: MovieService,
    private directorService :DirectorService,
    private actorService:ActorService) {
    this.movieForm = fb.nonNullable.group({
      "title": ["", Validators.required],
      "year":[0, Validators.required],
      "directors":this.fb.array([]),
      "actors":this.fb.array([]),

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

  get directors() {
    return this.movieForm.controls["directors"] as FormArray;
  }
  isDirectorAlreadyExist(director:Director)
  {
    let directorValue = this.directors.value;
    let directorExist = directorValue.filter((dir:any)=>director._id == dir._id);
    return directorExist.length >0 ;
  }
  addDirector()
  {
    console.log('Director ',this.directors.value.length);
    let index = this.selectedDirectorIndex;
    let director = this.directorsModel[index];
    if(this.directors.value.length == this.directorsModel.length
      || this.isDirectorAlreadyExist(director))
    {
      return;
    }

    //console.log('Director exist ',this.isDirectorAlreadyExist(director));
    console.log('Add director ',this.selectedDirectorIndex);
    const directorForm = this.fb.group({
      _id: [director._id, Validators.required],
      name: [director.name, Validators.required]
    });
    this.directors.push(directorForm);
  }
  removeDirector(index:number)
  {
    console.log('Remove director ',index);
    this.directors.removeAt(index);
  }
  getDirectorFormValue(value:any)
  {
    console.log('DirectorForm ',value);
  }
  isActorAlreadyExist(actor:Actor)
  {
    let actorValue = this.actors.value;
    let actors = actorValue.filter((act:any)=>actor._id == act._id);
    return actors.length >0 ;
  }
  addActor()
  {
    console.log('Actor ',this.actors.value.length);
    let index = this.selectedActorIndex;
    let actor = this.actorsModel[index];
    if(this.actors.value.length == this.actorsModel.length
      || this.isActorAlreadyExist(actor))
    {
      console.log('Add actor validation failed');
      return;
    }

    const actorForm = this.fb.group({
      _id: [actor._id, Validators.required],
      name: [actor.name, Validators.required]
    });
    this.actors.push(actorForm);
  }
  removeActor(index:number)
  {
    console.log('Remove actors ',index);
    this.actors.removeAt(index);
  }
  get actors() {
    return this.movieForm.controls["actors"] as FormArray;
  }
  showNeMovieModal()
  {
    console.log('Reset new movie ');
    this.movieForm.reset();
    this.directors.clear();
    this.actors.clear();
    this.editMode = false;
    this.openModal(this.template);
  }
  openModal(template: TemplateRef<any>) {
    console.log('Directors in open modal ',this.directors);
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
    movie.actors =  movie.actors.map((actor:any)=>actor._id);
    movie.directors = movie.directors.map((dir:any)=>dir._id);
    this.movieService.addNewMovie(movie);
    console.log("Movie ",this.movieForm.value);
    this.closeModal();
  }
  get form()
  {
    return this.movieForm.controls;
  }
}
