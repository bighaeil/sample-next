import { NextPage } from "next";
import Image from "next/image";

import BibleImage from '../public/images/cat.jpg'

const ImageSample: NextPage<void> = (props) => {
    return (
        <div>
            <h1>이미지 표시 비교</h1>
            <p>img 태그로 표시한 경우</p>
            <img src="/images/cat.jpg" />
            <p>Image 컴포넌트로 표시한 경우</p>
            <Image src={BibleImage} alt={""} />
            <p>Image 로 표시한 경우는 사전에 그리기 영역이 확보됩니다.</p>
        </div>
    )
}

export default ImageSample