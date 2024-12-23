class TM_JsonArray : TM_JsonElement
{ // pretty much just a wrapper for a dynamic array
	Array<TM_JsonElement> arr;
	
	static TM_JsonArray Make()
	{
		return new("TM_JsonArray");
	}
	
	TM_JsonElement Get(uint index)
	{
		return arr[index];
	}
	
	void Set(uint index,TM_JsonElement obj)
	{
		arr[index]=obj;
	}
	
	int Push(TM_JsonElement obj)
	{
		return arr.Push(obj);
	}
	
	bool Pop()
	{
		return arr.Pop();
	}
	
	void Insert(uint index, TM_JsonElement obj)
	{
		arr.Insert(index, obj);
	}
	
	void Delete(uint index, int count = 1)
	{
		arr.Delete(index,count);
	}
	
	uint Size()
	{
		return arr.Size();
	}
	
	void ShrinkToFit()
	{
		arr.ShrinkToFit();
	}
	
	void Grow(uint count)
	{
		arr.Grow(count);
	}
	
	void Resize(uint count)
	{
		arr.Resize(count);
	}
	
	void Reserve(uint count)
	{
		arr.Reserve(count);
	}
	
	int Max()
	{
		return arr.Max();
	}
	
	void Clear()
	{
		arr.Clear();
	}
	
	override string Serialize()
	{
		String s;
		bool first = true;
		s.AppendCharacter("[");
		for(int i = 0; i < arr.size(); i++)
		{
			if(!first)
			{
				s.AppendCharacter(",");
			}
			s.AppendFormat("%s", arr[i].serialize());
			first = false;
		}
		s.AppendCharacter("]");
		return s;
	}
    
	override string GetPrettyName() {
		return "Array";
	}
}