declare type ProgressHandler = (progress: number, total: number) => void;
declare type UploadOptions = {
    url: string;
    filePath: string;
    progressHandler?: ProgressHandler;
    headers?: Record<string, string>;
};
declare function upload({ url, filePath, progressHandler, headers, }: UploadOptions): Promise<void>;
export default upload;
export { upload };
