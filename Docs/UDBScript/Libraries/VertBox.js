class VertBox
{
	constructor()
    {
    }
	GetAABB()
	{
		let verts = UDB.Map.getSelectedOrHighlightedVertices();
		if (verts.length < 1)
		{
			let sec = UDB.Map.getSelectedSectors();
			if (sec.length > 0)
			{
				sec.forEach(sc => 
				{
					let sd = sc.getSidedefs();
					sd.forEach(s => 
					{
						let v1 = s.line.start;
						let v2 = s.line.end;
						
						if (verts.includes(v1) == false) { verts.push(v1); }
						if (verts.includes(v2) == false) { verts.push(v2); }
					});
				});
			}
		}
		if (verts.length > 0)
		{
			let lo = new UDB.Vector2D(65537.0, 65537.0);
			let hi = new UDB.Vector2D(-65537.0, -65537.0);
			verts.forEach(v => {
				lo.x = Math.min(lo.x, v.position.x);
				lo.y = Math.min(lo.y, v.position.y);
				hi.x = Math.max(hi.x, v.position.x);
				hi.y = Math.max(hi.y, v.position.y);
			});
			UDB.Log('----------');
			UDB.Log('AABB:');
			UDB.Log(lo.x + ',' + lo.y + ',' + hi.x + ',' + hi.y);
			UDB.Log('----------');
		}
	}
}