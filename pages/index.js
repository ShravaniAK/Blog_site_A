import Head from 'next/head'
import {Toolbar} from "../components/toolbar";


export default function Home() {
  return (
    <div>
      <Head>
          
          <meta name="description" content="A simple NextJS Blog application."/>
      </Head>

      <Toolbar/>

      <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(../blog2.jpeg)' , backgroundRepeat:'no-repeat', backgroundSize:"cover", width:'100vw' }}>
      
    </div>
    </div>
  )
}
