var columnDefs = [
  {headerName: "Restaurant", field: "restro"},
  {headerName: "Rating", field: "rating"},
];
    
// specify the data
var rowData = [
  {restro: "restaurant 1", rating: "5", },
  {restro: "restaurant 2", rating: "4", },
  {restro: "restaurant 1", rating: "5", },
  {restro: "restaurant 2", rating: "4", },
  {restro: "restaurant 1", rating: "5", },
  {restro: "restaurant 2", rating: "4", },
  {restro: "restaurant 1", rating: "5", },
  {restro: "restaurant 2", rating: "4", },
  {restro: "restaurant 1", rating: "5", },
  {restro: "restaurant 2", rating: "4", },
  {restro: "restaurant 1", rating: "5", },
  {restro: "restaurant 2", rating: "4", },
  {restro: "restaurant 1", rating: "5", },
  {restro: "restaurant 2", rating: "4", },
];
    
// let the grid know which columns and what data to use
var gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
  pagination: true,
  paginationPageSize: 10,
  onCellClicked: ( event) => {
    //$('#exampleModal').modal('show')
    document.getElementById("data-modal").click();

    $("#data-modal-body").empty();
    $("#data-modal-body").append('<div class="star-container">'
    +'<div class="star"></div>'
    +'<div class="star"></div>'
    +'<div class="star"></div>'
    +'<div class="star"></div>'
    +'<div class="star"></div>'
    +'</div>'
    +'<h1 class="rating">0/5</h1>')

let stars = document.querySelectorAll(".star");
document.querySelector(".star-container").addEventListener("click", starRating);
let rating = document.querySelector(".rating");


function starRating(e) {
  stars.forEach((star) => star.classList.remove("star__checked"));
  const i = [...stars].indexOf(e.target);
  if (i > -1) {
    stars[i].classList.add("star__checked");
    rating.textContent = `${stars.length - i}/5`;
  } else {
    rating.textContent = `${0}/5`;
  }
}
  },

  rowSelection: 'single',
  //onSelectionChanged: onSelectionChanged,

};

function onSelectionChanged() {
  const selectedRows = gridOptions.api.getSelectedRows();
  // document.querySelector('#selectedRows').innerHTML =
  //   selectedRows.length === 1 ? selectedRows[0].athlete : '';

    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    });

}

function onPageSizeChanged() {
  var value = document.getElementById('page-size').value;
  gridOptions.api.paginationSetPageSize(Number(value));
}


const gridOptions1  = {
  defaultColDef: {
    editable: true,
    enableRowGroup: true,
    enablePivot: true,
    enableValue: true,
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
    minWidth: 10,
  },
  suppressRowClickSelection: true,
  groupSelectsChildren: true,
  // debug: true,
  rowSelection: 'multiple',
  rowGroupPanelShow: 'always',
  pivotPanelShow: 'always',
  columnDefs: columnDefs,
  pagination: true,
  paginationPageSize: 10,
  // autoGroupColumnDef: autoGroupColumnDef,
  // onFirstDataRendered: onFirstDataRendered,
  // paginationNumberFormatter: (params) => {
  //   return '[' + params.value.toLocaleString() + ']';
  // },
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});
