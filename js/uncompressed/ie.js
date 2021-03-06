ie = true;
vertCenter = function(){
	var divs = document.querySelectorAll('#menu>div, #playing>div, #pages>div, #hudpages>div, #error');
	var contWIDTH = window.innerWidth,
		contHEIGHT = window.innerHeight;
	for (var i=0; i<divs.length; i++){
		var h = divs[i].offsetHeight,
		w = divs[i].offsetWidth;
			divs[i].style.marginTop = -h/2 + 'px';
			divs[i].style.top = '50%';

			divs[i].style.marginLeft = -w/2 + 'px';
			divs[i].style.left = '50%';
	}
}

if (!Object.keys) {
  Object.keys = function(obj) {
    var keys = [];

    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        keys.push(i);
      }
    }

    return keys;
  };
}

if (!Array.prototype.reduce)
{
  Array.prototype.reduce = function(fun /*, initial*/)
  {
    var len = this.length;
    if (typeof fun != "function")
      throw new TypeError();

    // no value to return if no initial value and an empty array
    if (len === 0 && arguments.length == 1)
      throw new TypeError();

    var i = 0;
    var rv;
    if (arguments.length >= 2)
    {
      rv = arguments[1];
    }
    else
    {
      do
      {
        if (i in this)
        {
          rv = this[i++];
          break;
        }

        // if array contains no values, no initial value to return
        if (++i >= len)
          throw new TypeError();
      }
      while (true);
    }

    for (; i < len; i++)
    {
      if (i in this)
        rv = fun.call(null, rv, this[i], i, this);
    }

    return rv;
  };
}

if (!document.querySelectorAll) {
    document.querySelectorAll = function(selector) {
        var doc = document,
            head = doc.documentElement.firstChild,
            styleTag = doc.createElement('STYLE');
        head.appendChild(styleTag);
        doc.__qsaels = [];
 
        styleTag.styleSheet.cssText = selector + "{x:expression(document.__qsaels.push(this))}";
        window.scrollBy(0, 0);
 
        return doc.__qsaels;
    };
}