export const checkImageURL = (url) => {
    if (!url) return false;
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)') //RegExp 정규 표현식을 사용하여 url이 유효한지 확인
        return pattern.test(url)
    }
}
//자주쓰는 코드 빼서 export 사용
