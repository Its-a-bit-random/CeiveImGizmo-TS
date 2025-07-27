interface IArrow {
	Draw: (this: IArrow, Origin: Vector3, End: Vector3, Radius: number, Length: number, Subdivisions: number) => void;
}

interface IBox {
	Draw: (this: IBox, Transform: CFrame, Size: Vector3, DrawTriangles: boolean) => void;
}

interface ICFrame {
	Draw: (this: ICFrame, transform: CFrame, scale: number) => void;
}

interface ICapsule {
	Draw: (this: ICapsule, transform: CFrame, radius: number, length: number, subdivisions: number) => void;
}

interface ICircle {
	Draw: (this: ICircle, transform: CFrame, radius: number, subdivisions: number, angle: number, connectToStart?: boolean) => void;
}

interface ICone {
	Draw: (this: ICone, transform: CFrame, radius: number, length: number, subdivisions: number) => void;
}

interface ICylinder {
	Draw: (this: ICylinder, transform: CFrame, radius: number, length: number, subdivisions: number) => void;
}

interface ILine {
	Draw: (this: ILine, transform: CFrame, length: number) => void;
}

interface IMesh {
	Draw: (this: IMesh, transform: CFrame, size: Vector3, vertices: unknown[], faces: unknown[]) => void;
}

interface IPlane {
	Draw: (this: IPlane, position: Vector3, normal: Vector3, size: Vector3) => void;
}

interface IRay {
	Draw: (this: IRay, origin: Vector3, end: Vector3) => void;
}

interface IRoundedFrustum {
	Draw: (this: IRoundedFrustum, transform: CFrame, radius0: number, radius1: number, length: number, subdivisions: number) => void;
}

interface ISphere {
	Draw: (this: ISphere, transform: CFrame, radius: number, subdivisions: number, angle: number) => void;
}

interface IText {
	Draw: (this: IText, origin: Vector3, text: string, size?: number) => void;
}

interface IVolumeArrow {
	Draw: (this: IVolumeArrow, origin: Vector3, end: Vector3, cylinderRadius: number, coneRadius: number, length: number, useCylinder?: boolean) => void;
}

interface IVolumeBox {
	Draw: (this: IVolumeBox, transform: CFrame, size: Vector3) => void;
}

interface IVolumeCone {
	Draw: (this: IVolumeCone, transform: CFrame, radius: number, length: number) => void;
}

interface IVolumeCylinder {
	Draw: (this: IVolumeCylinder, transform: CFrame, radius: number, length: number, innerRadius?: number, angle?: number) => void;
}

interface IVolumeSphere {
	Draw: (this: IVolumeSphere, transform: CFrame, radius: number) => void;
}

interface IWedge {
	Draw: (this: IWedge, transform: CFrame, size: Vector3, drawTriangles?: boolean) => void;
}

interface ICieve {
	GetPoolSize: () => number;
	PushProperty: (Property: string, Value: unknown) => void;
	PopProperty: (Property: string) => unknown;
	SetStyle: (Color?: Color3, Transparency?: number, AlwaysOnTop?: boolean) => void;
	DoCleaning: () => void;
	ScheduleCleaning: () => void;
	AddDebrisInSeconds: (Seconds: number, Callback: () => void) => void;
	AddDebrisInFrames: (Frames: number, Callback: () => void) => void;
	Init: () => void;
	SetEnabled: (Value: boolean) => void;
	RemoveAdornments: () => void;
	
	// Shape References
	Ray: IRay;
	Arrow: IArrow;
	Box: IBox;
	CFrame: ICFrame;
	Capsule: ICapsule;
	Circle: ICircle;
	Cone: ICone;
	Cylinder: ICylinder;
	Line: ILine;
	Mesh: IMesh;
	Plane: IPlane;
	RoundedFrustum: IRoundedFrustum;
	Sphere: ISphere;
	Text: IText;
	VolumeArrow: IVolumeArrow;
	VolumeBox: IVolumeBox;
	VolumeCone: IVolumeCone;
	VolumeCylinder: IVolumeCylinder;
	VolumeSphere: IVolumeSphere;
	Wedge: IWedge;
}

declare const Cieve: ICieve;
export = Cieve;
