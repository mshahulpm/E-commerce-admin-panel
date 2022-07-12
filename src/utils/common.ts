import { AcceptedImage, RejectedImage } from "src/@types/common"


type validateImageArg = {
    files: File[],
    imageConfig: {
        height: number,
        width: number,
        size: number
    },
    callBack: (accepted: AcceptedImage[], rejected: RejectedImage[]) => void
}

export function validateImage({
    files,
    imageConfig,
    callBack
}: validateImageArg) {

    const accepted: AcceptedImage[] = [], rejected: RejectedImage[] = []

    files.forEach((file, index) => {

        const image = new Image()
        const url = URL.createObjectURL(file)

        if (file.size > imageConfig.size) {
            rejected.push({ file, error: 'Image Size exceeded', url })
            return
        }

        function handleFinish() {
            if (index === files.length - 1) {
                callBack(accepted, rejected)
            }
        }

        image.onload = function () {

            if (image.height !== imageConfig.height) {
                rejected.push({ file, error: 'Invalid Image height', url })
                return handleFinish()
            }

            if (image.width !== imageConfig.width) {
                rejected.push({ file, error: 'Invalid Image height', url })
                return handleFinish()
            }

            accepted.push({ file, url })
            handleFinish()
        }

        image.src = url
    })
}