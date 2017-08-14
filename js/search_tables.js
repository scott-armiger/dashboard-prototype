$(document).ready(function(){
    var tableOptions = {
      paging: false,
      searching: true,
      bFilter: false,
      responsive: true,
      dom: 'ti'
    };

    var hostgroup_table = $('#hostgroup-drilldown').DataTable(tableOptions);
    var host_table = $('#host-drilldown').DataTable(tableOptions);

    $('#hostgroup-search').on('keyup change', function() {
      hostgroup_table.search($(this).val()).draw();
    });

    $('#host-search').on('keyup change', function() {
      host_table.search($(this).val()).draw();
    });
    
});
