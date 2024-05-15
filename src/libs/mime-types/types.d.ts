
type MimeType =
  | "application/pdf"
  | "image/jpeg"
  | "image/jpg"
  | "image/png"
  | "image/webp"
  | "audio/mpeg"
  | "audio/ogg"
  | "audio/wav"
  | "audio/webm"
  | "audio/aac"
  | "video/mp4"
  | "video/webm"
  | "text/plain"
  | "text/html"
  | "application/zip"
  | "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  | "application/vnd.ms-excel"
  | "video/quicktime"



interface MimeTypeInfo {
    mimeType: MimeType
    extension: string
}


export { MimeType, MimeTypeInfo }