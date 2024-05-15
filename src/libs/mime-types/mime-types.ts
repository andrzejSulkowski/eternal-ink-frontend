import type { MimeType } from './types';



const extensionToMimeType: Record<string, MimeType> = {
    pdf: "application/pdf",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    mp3: "audio/mpeg",
    ogg: "audio/ogg",
    wav: "audio/wav",
    webm: "audio/webm",
    aac: "audio/aac",
    mp4: "video/mp4",
    //webm: "video/webm",
    txt: "text/plain",
    html: "text/html",
    zip: "application/zip",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    xls: "application/vnd.ms-excel",
    webp: "image/webp",
    mov: "video/quicktime",
};


const mimeTypeToExtension: Record<MimeType, string> = {
    "application/pdf": "pdf",
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/jpg": "jpeg",
    "audio/mpeg": "mp3",
    "audio/ogg": "ogg",
    "audio/wav": "wav",
    "audio/webm": "webm",
    "audio/aac": "aac",
    "video/mp4": "mp4",
    "video/webm": "webm",
    "text/plain": "txt",
    "text/html": "html",
    "application/zip": "zip",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
    "application/vnd.ms-excel": "xls",
    "image/webp": "webp",
    "video/quicktime": "mov",
}


// Maybe a way to rewrite the application and use a centralized points of truth
const allowedMimeType: Record<MimeType, boolean> = {
    "application/pdf": true,
    "image/jpeg": true,
    "image/png": true,
    "image/jpg": true,
    "audio/mpeg": true,
    "audio/ogg": false,
    "audio/wav": false,
    "audio/webm": false,
    "audio/aac": false,
    "video/mp4": false,
    "video/webm": false,
    "text/plain": false,
    "text/html": false,
    "application/zip": false,
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": true,
    "application/vnd.ms-excel": false,
    "image/webp": false,
    "video/quicktime": false,
}




function resolveMimeType(type: string): MimeType | undefined {
    const normalizedType = type.toLowerCase();
    
    let mimeType: MimeType | undefined = extensionToMimeType[normalizedType];

    if (!mimeType && mimeTypeToExtension[normalizedType as MimeType]) {
        mimeType = normalizedType as MimeType;
    }

    return mimeType;
}




export { extensionToMimeType, mimeTypeToExtension, resolveMimeType, MimeType, allowedMimeType }