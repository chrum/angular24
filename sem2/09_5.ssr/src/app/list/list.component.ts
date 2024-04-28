import {ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() data: Array<any> = [];

  @ContentChild('itemTemplate') itemTemplate!: TemplateRef<any>;
  @ViewChild('defaultItemTemplate') defaultItemTemplate!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }
}
