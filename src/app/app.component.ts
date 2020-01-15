import { Component, OnInit } from "@angular/core";
import { TreeNode } from "primeng/api";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  filesTree: TreeNode[];

  ngOnInit() {
    this.filesTree = [
      {
        label: "Documents",
        key: "Documents",
        data: "Documents Folder",
        expandedIcon: "fa fa-folder-open",
        collapsedIcon: "fa fa-folder",
        children: [
          {
            label: "Work",
            key: "Work",
            data: "Work Folder",
            expandedIcon: "fa fa-folder-open",
            collapsedIcon: "fa fa-folder",
            children: [
              {
                label: "Expenses.doc",
                key: "Expenses.doc",
                icon: "fa fa-file-word-o",
                data: "Expenses Document"
              },
              {
                label: "Resume.doc",
                key: "Resume.doc",
                icon: "fa fa-file-word-o",
                data: "Resume Document"
              }
            ]
          },
          {
            label: "Home",
            key: "Home",
            data: "Home Folder",
            expandedIcon: "fa fa-folder-open",
            collapsedIcon: "fa fa-folder",
            children: [
              {
                label: "Invoices.txt",
                key: "Invoices.txt",
                icon: "fa fa-file-word-o",
                data: "Invoices for this month"
              }
            ]
          }
        ]
      },
      {
        label: "Pictures",
        key: "Pictures",
        data: "Pictures Folder",
        expandedIcon: "fa fa-folder-open",
        collapsedIcon: "fa fa-folder",
        children: [
          {
            label: "barcelona.jpg",
            key: "barcelona.jpg",
            icon: "fa fa-file-image-o",
            data: "Barcelona Photo"
          },
          {
            label: "logo.jpg",
            key: "logo.jpg",
            icon: "fa fa-file-image-o",
            data: "PrimeFaces Logo"
          },
          {
            label: "primeui.png",
            key: "primeui.png",
            icon: "fa fa-file-image-o",
            data: "PrimeUI Logo"
          }
        ]
      },
      {
        label: "Movies",
        key: "Movies",
        data: "Movies Folder",
        expandedIcon: "fa fa-folder-open",
        collapsedIcon: "fa fa-folder",
        children: [
          {
            label: "Al Pacino",
            key: "Al Pacino",
            data: "Pacino Movies",
            children: [
              {
                label: "Scarface",
                key: "Scarface",
                icon: "fa fa-file-video-o",
                data: "Scarface Movie"
              },
              {
                label: "Serpico",
                key: "Serpico",
                icon: "fa fa-file-video-o",
                data: "Serpico Movie"
              }
            ]
          },
          {
            label: "Robert De Niro",
            key: "Robert De Niro",
            data: "De Niro Movies",
            children: [
              {
                label: "Goodfellas",
                key: "Goodfellas",
                icon: "fa fa-file-video-o",
                data: "Goodfellas Movie"
              },
              {
                label: "Untouchables",
                key: "Untouchables",
                icon: "fa fa-file-video-o",
                data: "Untouchables Movie"
              }
            ]
          }
        ]
      }
    ];
  }
}
