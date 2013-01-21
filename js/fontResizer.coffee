$ = jQuery

fontResize = (element, options)->
  @.$element= $(element)
  @.options = $.extend({}, $.fn.fontResizer.defaults, options)
  if @.options.startResize 
    @.resize()
  @.listen()

fontResize.prototype = {
  listen: ->
    @.$element
      .on('resize', $.proxy(@.resize, @))
  resize: ->
    coefficient = @.obtain()
    $.each(@.options.elements, (i,v)->
      $(v.elem).css({'font-size': v.size*coefficient})
    )
  obtain: ->
    val = @.$element.width()/(@.options.baseWidth/100)/100
}

$.fn.fontResizer = (options)->
  data = new fontResize(@, options)

$.fn.fontResizer.defaults = {
  baseWidth: 640
, startResize: false
}