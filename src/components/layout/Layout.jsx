const { default: Footer } = require("../footer/footer")
const { default: Header } = require("../header/header")

const MainLayout=({children})=>{
    return(
        <>
        <Header/>
        {children}
        <Footer/>

        </>
    )
}

export default MainLayout