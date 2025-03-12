import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UTApi } from "uploadthing/server";

const f = createUploadthing();

const handleAuth = async () => {
    const { userId } = await auth()
    
    if(!userId) throw new Error("Unauthorized");
    return { userId }
}

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    photo: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(handleAuth)
        .onUploadComplete(async ({ metadata, file }) => {
            return { url: file.url };
        })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
