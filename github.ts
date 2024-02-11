// user-input.component.ts
import { Component } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  username: string = '';

  constructor(private githubService: GithubService) {}

  searchRepositories(): void {
    this.githubService.getUserRepositories(this.username)
      .subscribe(data => {
        // Handle data
      }, error => {
        console.error('Error fetching repositories:', error);
      });
  }
}

// repo-list.component.ts
import { Component } from '@angular/core';
// Import the GithubService if you need to fetch repositories here

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent {
  // Define properties and methods to display repositories
}
// github.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUserRepositories(username: string): Observable<any[]> {
    return this.http.get<any[]>(`https://api.github.com/users/${username}/repos`);
  }
}

