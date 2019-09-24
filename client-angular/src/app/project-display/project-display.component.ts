import { Component, OnInit } from "@angular/core";
import { ProjectService } from "../project.service";
import { Project } from "../models/project";

@Component({
  selector: "app-project-display",
  templateUrl: "./project-display.component.html",
  styleUrls: ["./project-display.component.css"]
})
export class ProjectDisplayComponent implements OnInit {
  constructor(private projectService: ProjectService) {}

  projects: Project[] = [];

  getProjects() {
    this.projectService
      .getProjects()
      .subscribe(projects => (this.projects = projects));
  }

  ngOnInit() {
    this.getProjects();
  }
}
