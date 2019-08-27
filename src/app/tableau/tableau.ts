import { Component, OnInit } from "@angular/core";
import tableau from "tableau-api";
@Component({
  templateUrl: "./tableau.component.html",
  styleUrls: ["./tableau.component.css"]
})
export class TableauComponent implements OnInit {
  viz: any;
  dataTable: any;
  sheet: any;
  constructor() {}

  ngOnInit() {
    var containerDiv = document.getElementById("vizContainer"),
      url =
        "https://public.tableau.com/views/Book1_15650386719260/Dashboard1?:embed=y&:display_count=yes&:origin=viz_share_link";
    //https://prod-useast-a.online.tableau.com/trusted/
    const options = {
      hideTabs: true,
      width: "1000px",
      height: "2000px",
      onFirstInteractive: () => {
        this.sheet = this.viz
          .getWorkbook()
          .getActiveSheet()
          .getWorksheets()
          .get("totalVictimesVSfatalities");

        const options = {
          ignoreAliases: false,
          ignoreSelection: false,
          includeAllColumns: false
        };
      }
    };

    this.viz = new window.tableau.Viz(containerDiv, url, options);
    /// resizing the view ====================================
    this.viz.setFrameSize(1000, 1000);
  }
  // getting data : ============================================
  fetchData = () => {
    const options = {
      maxRows: 0, // Max rows to return. Use 0 to return all rows
      ignoreAliases: false,
      ignoreSelection: true,
      includeAllColumns: false
    };
    console.log(" sheet ====> ", this.sheet);
    this.sheet.getUnderlyingDataAsync(options).then(data => {
      console.log("data ===> ", data);
      this.dataTable = data.getData();
      console.log("real data ===>", this.dataTable);
    });
  };
}
