class TM_JsonElementOrError {}

class TM_JsonElement : TM_JsonElementOrError abstract
{
	abstract string Serialize();
	abstract string GetPrettyName();
}

class TM_JsonNumber : TM_JsonElement abstract
{
	abstract TM_JsonNumber Negate();
	abstract double  asDouble();
	abstract int asInt();
	
	override string GetPrettyName()
	{
		return "Number";
	}
}

class TM_JsonInt : TM_JsonNumber
{
	int i;
	
	static TM_JsonInt make(int i = 0)
	{
		let elem = new("TM_JsonInt");
		elem.i = i;
		return elem;
	}
	override TM_JsonNumber Negate()
	{
		i = -i;
		return self;
	}
	override string Serialize()
	{
		return ""..i;
	}
	
	override double asDouble()
	{
		return double(i);
	}
	
	override int asInt()
	{
		return i;
	}
}

class TM_JsonDouble : TM_JsonNumber
{
	double d;
	
	static TM_JsonDouble Make(double d = 0)
	{
		TM_JsonDouble elem = new("TM_JsonDouble");
		elem.d = d;
		return elem;
	}
	override TM_JsonNumber Negate()
	{
		d = -d;
		return self;
	}
	override string Serialize()
	{
		return ""..d;
	}
	
	override double asDouble()
	{
		return d;
	}
	
	override int asInt()
	{
		return int(d);
	}
}

class TM_JsonBool : TM_JsonElement
{
	bool b;
	
	static TM_JsonBool Make(bool b = false)
	{
		TM_JsonBool elem = new("TM_JsonBool");
		elem.b = b;
		return elem;
	}
	
	override string Serialize()
	{
		return b? "true" : "false";
	}
	
	override string GetPrettyName()
	{
		return "Bool";
	}
}

class TM_JsonString : TM_JsonElement
{
	string s;
	
	static TM_JsonString make(string s = "")
	{
		TM_JsonString elem = new("TM_JsonString");
		elem.s=s;
		return elem;
	}
	
	override string Serialize()
	{
		return TM_JSON.serialize_string(s);
	}
	
	override string GetPrettyName()
	{
		return "String";
	}
}

class TM_JsonNull : TM_JsonElement
{
	static TM_JsonNull Make()
	{
		return new("TM_JsonNull");
	}
	
	override string Serialize()
	{
		return "null";
	}
	
	override string GetPrettyName()
	{
		return "Null";
	}
}

class TM_JsonError : TM_JsonElementOrError
{
	String what;
	
	static TM_JsonError make(string s)
	{
		TM_JsonError err = new("TM_JsonError");
		err.what = s;
		return err;
	}
}