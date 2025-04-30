/// <reference path="../../../udbscript.d.ts" />

`#version 4`;
`#name Log sector selection IDs`;
`#description Outputs all selected sector IDs.`

let sectors = UDB.Map.getSelectedOrHighlightedSectors();

if(sectors.length == 0)
UDB.die('You need to select at least one sector.');

var vb = new VertBox();
vb.GetAABB();

let str = '';
let first = false;
sectors.forEach(s => {
	if (first == false)
	{	first = true;	}
	else
	{
		str = str + ', ';
	}
	str = str + s.index;
});
UDB.Log(str);