
export default class FileUrlManager {
    public file: File;
    private url: string;

    constructor(file: File){
        this.file = file;
        this.url = URL.createObjectURL(file);
    }
    public init(file: File){
        this.file = file;
        this.url = URL.createObjectURL(file);
    }

    public getURL(){
        return this.url;
    }
    public revokeURL(){
        URL.revokeObjectURL(this.url);
    }

}