import {React,useEffect} from "react"

import NavBar from "./NavBar"
import Banner from "./Banner"
import {styled,Box} from "@mui/material"
import {getProducts} from "../../redux/actions/productsAction"
import {useDispatch,useSelector} from "react-redux" 
import Slide from "./Slide"
import LatestSlider from "./LatestSlider"
import MidSlide from "./MidSlide"
import MidSection from "./MidSection"
const Container=styled(Box)`
padding:10px;
background-color:#F2F2F2
`

const Home=()=>{

    const {products} = useSelector(state => state.getProducts)
    const dispatch=useDispatch();
    useEffect(()=>{
       dispatch(getProducts())
      },[dispatch])

     

    return(
     <>
     <NavBar/>
     <Container>
        <Banner/>
        <MidSlide products={products} title="Deal Of The Day" timer={true} />
        <MidSection/>
        <LatestSlider products={products} showPicture={true}/>
        <Slide products={products} title="Beauty, Food, Toys & more" timer={false}/>
        <LatestSlider products={products} showPicture={false}/>
        
     </Container>
     </>
    );
}
export default Home;