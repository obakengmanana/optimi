jQuery(document).ready(function() {

    var search_number = 0;
    var search_count = 0;
    var count_text = 0;
    var srch_numb = 0;
  
    function scroll_to_word() {
      var pos = $('#text .selectHighlight').position();
      jQuery.scrollTo(".selectHighlight", 500, {
        offset: -150
      });
    }
  
  
    var query = {};
    var $select = $('.js-source-states');
    
    $select.select2();
    //redirect to link when user selects an option
    $select.on("select2:select", function (e) {
       var url = e['params']['data']['element']['dataset']['url']; 
       window.open(url, '_blank');
    });
  
    function markMatch(text, term) {
      var match = text.toUpperCase().indexOf(term.toUpperCase());
      var $result = $('<span></span>');
      if (match < 0) {
        return $result.text(text);
      }
      $result.text(text.substring(0, match));
      var $match = $('<span class="select2-rendered__match"></span>');
      $match.text(text.substring(match, match + term.length));
      $result.append($match);
      $result.append(text.substring(match + term.length));
      return $result;
    }
  
    $select.select2({
      templateResult: function(item) {
        if (item.loading) {
          return item.text;
        }
        var term = query.term || '';
        var $result = markMatch(item.text, term);
        return $result;
      },
      language: {
        searching: function(params) {
          query = params;
          return 'Searching…';
        }
      },
      placeholder: 'Select or search below'
    });
  
    $select.select2('open');
    var $searchField = $("input.select2-search__field").eq(0);
   
    $searchField.on('input', function(e) {
      $('#text').removeHighlight();
      var txt = e.target.value;
      
      if (txt == '') return;
      $('#text').highlight(txt);
      search_count = $('#text span.highlight').size() - 1;
      count_text = search_count + 1;
      search_number = 0;
      $('#text').selectHighlight(search_number);
      if (search_count >= 0) scroll_to_word();
      $('#count').html('Find: <b>' + count_text + '</b>');
    });
    $select.select2('close');
  
  
 
  
  
  
  
  
  
  
  
  
  
  });
  