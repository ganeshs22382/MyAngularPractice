import { Component, OnInit } from "@angular/core";
import { employeeList } from "../../model/employeeList.model";
import { employeeListService } from "../../services/employeelist.service";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-mat-table",
  templateUrl: "./mat-table.component.html",
  styleUrls: ["./mat-table.component.css"],
  providers: [employeeListService]
})
export class MatTableComponent implements OnInit {
  //employeeList : employeeList[] = [];
  displayedColumns = [
    "id",
    "firstName",
    "lastname",
    "email",
    "designation",
    "department",
    "action"
  ];
  employeelistdata: any = [];

  constructor(private employeeListService: employeeListService) {}

  ngOnInit() {
    this.employeeListService
      .getEmployeelistObservable()
      .subscribe(employeeData => {
        this.employeelistdata = employeeData;

        console.log(this.employeelistdata);
      });
  }
}
