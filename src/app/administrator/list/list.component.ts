import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  dataList : any
  constructor (
    private listService : ListService
  ){}

  ngOnInit(): void {
    this.listService.getDataList().subscribe(res=>{
      this.dataList = res
      console.log(res)
    })
  }
}
