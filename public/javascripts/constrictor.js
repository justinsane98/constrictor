$(document).ready(function(){
  var canvas = $('.canvas'),
      layers = canvas.find('.layer'),
      qStat = $('.stat-quality'),
      fsStat = $('.stat-filesize'),
      dl = $('.download'),
      quality = $('.quality-slider').val();

  // init quality
  qStat.text(quality);

  // init download link
  dl.attr('href',"images/export/"+canvas.data('filename')+"-"+quality+"."+canvas.data('file-extension'))
  dl.attr('download',canvas.data('filename')+"."+canvas.data('file-extension'))

  // slider onchnage event
  $('input.html5').change(function(e){
    var val = $(this).val();
    // toggle active layer
    var activeLayer = canvas.find('[data-quality='+val+']')
    layers.removeClass('active');
    activeLayer.addClass('active');

    // update quality
    qStat.text(val);

    // update filesize
    fsStat.text(activeLayer.data('filesize'));

    // update download link
    dl.attr('href',activeLayer.find('img').attr('src'));

  });

  $(".quality-slider").bind("slider:changed", function (event, data) {

    // toggle active layer
    var activeLayer = canvas.find('[data-quality='+data.value+']')
    layers.removeClass('active');
    activeLayer.addClass('active');

    // update quality
    qStat.text(data.value);

    // update filesize
    fsStat.text(activeLayer.data('filesize'));

    // update download link
    dl.attr('href',activeLayer.find('img').attr('src'));
  });

});
