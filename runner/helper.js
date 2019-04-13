const getRadioValue = (name, showMessage) => {
	var _chk = false;
	var _o = {};
	var _eles = document.getElementsByName(name);
	for(var i = 0;i < _eles.length;i++)
	{
		if(_eles[i].checked)
		{
			_o.id = _eles[i].getAttribute("id");
			_o.value = _eles[i].value;
			_chk = true;
			break;
		}
	}
	if(!_chk)
	{
		if(showMessage.length > 0)
		{
			alert(showMessage);
		}
		_o = null;//没有值被选中
	}
	return _o;
}