//components 폴더 아래에 있는 컴포넌트들을 한번에 모아서 export 해줌, 인덱스화 해줌

import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";
import Welcome from "./home/welcome/Welcome";
import Nearbyjobs from './home/nearby/Nearbyjobs'
import Popularjobs from './home/popular/Popularjobs' 
import PopularJobCard from "./common/cards/popular/PopularJobCard";
import NearbyJobCard from "./common/cards/nearby/NearbyJobCard";
import Company from "./jobdetails/company/company";
export { ScreenHeaderBtn, Welcome, Nearbyjobs , Popularjobs, PopularJobCard, NearbyJobCard, Company }