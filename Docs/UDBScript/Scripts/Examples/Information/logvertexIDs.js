/// <reference path="../../../udbscript.d.ts" />

`#version 5`;
`#name Log vertex selection IDs`;
`#description Outputs all selected vertex IDs.`

let verts = UDB.Map.getSelectedOrHighlightedVertices();

if(verts.length == 0)
UDB.die('You need to select at least one vertex.');

var vb = new VertBox();
vb.GetAABB();

let str = '';
let first = false;
verts.forEach(v => {
	if (first == false)
	{	first = true;	}
	else
	{
		str = str + ', ';
	}
	str = str + v.index;
});
UDB.Log(str);