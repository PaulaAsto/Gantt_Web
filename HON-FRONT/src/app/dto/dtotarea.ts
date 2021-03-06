export class DtoTarea {
    private id: number;
    private nombre: string;
	private descripcion: string;
	private fechaini: Date;
	private fechafin: Date;
	private dias: number;
	private color: string;

    constructor(id: number, nombre: string, descripcion: string, fechaini: Date, fechafin: Date, dias: number, color: string){
        this.id = id;
        this.nombre = nombre;
		this.descripcion = descripcion;
		this.fechaini = fechaini;
		this.fechafin = fechafin;
		this.dias = dias;
		this.color = color;
    }
    public get $id(): number {
		return this.id;
	}

	public set $id(value: number) {
		this.id = value;
	}

	public get $nombre(): string {
		return this.nombre;
	}

	public set $nombre(value: string) {
		this.nombre = value;
    }
    
    public get $descripcion(): string {
		return this.descripcion;
	}

	public set $descripcion(value: string) {
		this.descripcion = value;
	}

	public get $fechaini(): Date {
		return this.fechaini;
	}

	public set $fechaini(value: Date) {
		this.fechaini = value;
	}
	
	public get $fechafin(): Date {
		return this.fechafin;
	}

	public set $fechafin(value: Date) {
		this.fechafin = value;
	}
	
	public get $dias(): number {
		return this.id;
	}

	public set $dias(value: number) {
		this.id = value;
	}

	public get $color(): string {
		return this.color;
	}

	public set $color(value: string) {
		this.color = value;
    }
}